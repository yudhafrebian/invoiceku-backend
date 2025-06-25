import dayjs from "dayjs";
import prisma from "../configs/prisma";
import {
  CreateInvoiceInput,
  GetAllInvoiceParams,
  PreviewInvoiceInput,
} from "../types/invoice.type";
import { createToken } from "../utils/createToken";
import { sendInvoiceEmail, sendStatusEmail } from "../utils/email/sendEmail";
import { generateInvoicePDF } from "../utils/pdf/pdfGenerator";
import {
  PaymentMethod,
  Status,
  TemplateStyle,
} from "../../prisma/generated/client";
import { Response } from "express";
import { verify } from "jsonwebtoken";

export const getAllInvoiceService = async ({
  userId,
  page,
  limit,
  search,
  payment,
  status,
  sort,
}: GetAllInvoiceParams) => {
  const skip = (page - 1) * limit;

  let orderByClause: any = { created_at: "asc" };
  if (sort === "invoice_number_asc") orderByClause = { invoice_number: "asc" };
  else if (sort === "invoice_number_desc")
    orderByClause = { invoice_number: "desc" };
  else if (sort === "client_name_asc")
    orderByClause = { clients: { name: "asc" } };
  else if (sort === "client_name_desc")
    orderByClause = { clients: { name: "desc" } };
  else if (sort === "start_date_asc") orderByClause = { start_date: "asc" };
  else if (sort === "start_date_desc") orderByClause = { start_date: "desc" };
  else if (sort === "due_date_asc") orderByClause = { due_date: "asc" };
  else if (sort === "due_date_desc") orderByClause = { due_date: "desc" };
  else if (sort === "total_asc") orderByClause = { total: "asc" };
  else if (sort === "total_desc") orderByClause = { total: "desc" };

  const whereClause: any = {
    user_id: userId,
    is_deleted: false,
  };

  if (search) {
    whereClause.OR = [
      { invoice_number: { contains: search, mode: "insensitive" } },
      { clients: { name: { contains: search, mode: "insensitive" } } },
    ];
  }

  if (payment) {
    whereClause.payment_method = payment;
  }

  if (status) {
    whereClause.status = status;
  }

  const [invoice, total] = await Promise.all([
    prisma.invoices.findMany({
      where: whereClause,
      orderBy: orderByClause,
      take: limit,
      skip,
      include: {
        clients: true,
      },
    }),
    prisma.invoices.count({
      where: whereClause,
    }),
  ]);

  return {
    invoice,
    pagination: {
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    },
  };
};

export const createInvoiceService = async ({
  userId,
  client_id,
  start_date,
  due_date,
  invoice_number,
  status,
  notes,
  total,
  payment_method,
  template,
  invoice_items,
}: CreateInvoiceInput) => {
  const userPaymentMethodCount = await prisma.user_payment_method.count({
    where: {
      user_id: userId,
      is_active: true,
    },
  });

  if (userPaymentMethodCount === 0) {
    throw "You need to add at least one active payment method to create invoice";
  }

  const userPaymentMethodData = await prisma.user_payment_method.findFirst({
    where: {
      user_id: userId,
      is_active: true,
      payment_method: payment_method as PaymentMethod,
    },
  });

  if (!userPaymentMethodData) {
    throw `You have not activated the selected payment method: ${payment_method}`;
  }

  const isExist = await prisma.invoices.findFirst({
    where: {
      invoice_number,
      user_id: userId,
      is_deleted: false,
    },
  });

  if (isExist) {
    throw "Invoice number already exist";
  }

  const createdInvoice = await prisma.invoices.create({
    data: {
      user_id: userId,
      client_id,
      start_date: new Date(start_date),
      due_date: new Date(due_date),
      invoice_number,
      status: status as Status,
      notes,
      total,
      payment_method: payment_method as PaymentMethod,
      is_deleted: false,
      template: template as TemplateStyle,
    },
  });

  await prisma.invoice_items.createMany({
    data: invoice_items.map((item) => ({
      invoice_id: createdInvoice.id,
      product_id: item.product_id,
      name_snapshot: item.name_snapshot,
      price_snapshot: item.price_snapshot,
      quantity: item.quantity,
      total: item.total,
    })),
  });

  const today = dayjs().format("YYYY-MM-DD");
  const startDateFormatted = dayjs(start_date).format("YYYY-MM-DD");

  if (today === startDateFormatted) {
    const user = await prisma.users.findUnique({ where: { id: userId } });
    if (!user || user.is_deleted) throw "User not found";

    const userProfile = await prisma.user_profiles.findFirst({
      where: { user_id: userId },
    });
    const client = await prisma.clients.findUnique({
      where: { id: client_id },
    });

    if (userProfile && client) {
      const token = createToken({ id: client.id, email: client.email }, "30d");

      const pdfBuffer = await generateInvoicePDF({
        invoice_number,
        client: { name: client.name },
        due_date,
        start_date,
        invoice_items,
        total,
        notes: notes || undefined,
        template,
      });

      await sendInvoiceEmail(
        client.email,
        `Invoice Payment - ${userProfile.first_name} ${userProfile.last_name}`,
        null,
        {
          name: userProfile.first_name,
          client_name: client.name,
          invoice_number,
          token,
          isRecurring: false,
        },
        pdfBuffer
      );
    }
  }

  return createdInvoice;
};

export const updateInvoiceStatusService = async (
  invoiceNumber: string,
  status: string
) => {
  const invoice = await prisma.invoices.findFirst({
    where: { invoice_number: invoiceNumber },
    include: {
      clients: true,
      users: true,
      invoice_items: true,
    },
  });

  if (!invoice) {
    throw new Error("Invoice not found");
  }

  const userProfile = await prisma.user_profiles.findFirst({
    where: {
      user_id: invoice.users.id,
    },
  });

  if (!userProfile) {
    throw new Error("User profile not found");
  }

  const updatedInvoice = await prisma.invoices.update({
    where: {
      id: invoice.id,
      invoice_number: invoiceNumber,
    },
    data: {
      status: status as Status,
    },
  });

  await sendStatusEmail(invoice.clients.email, "Payment Status Updated", null, {
    name: `${userProfile.first_name} ${userProfile.last_name}`,
    invoice_number: invoice.invoice_number,
    client_name: invoice.clients.name,
    template: "payment-paid-client",
    status,
  });

  await sendStatusEmail(invoice.users.email, "Payment Status Updated", null, {
    name: `${userProfile.first_name} ${userProfile.last_name}`,
    invoice_number: invoice.invoice_number,
    client_name: invoice.clients.name,
    template: "payment-paid-user",
    status,
  });

  return updatedInvoice;
};

export const softDeleteInvoiceService = async (
  userId: number,
  invoiceNumber: string
) => {
  const invoice = await prisma.invoices.findFirst({
    where: {
      user_id: userId,
      invoice_number: invoiceNumber,
      is_deleted: false,
    },
  });

  if (!invoice) {
    throw new Error("Invoice not found");
  }

  const deletedInvoice = await prisma.invoices.update({
    where: { id: invoice.id },
    data: { is_deleted: true },
  });

  return deletedInvoice;
};

export const previewInvoicePDFService = async (
  data: PreviewInvoiceInput,
  res: Response
): Promise<void> => {
  const {
    client_id,
    invoice_number,
    invoice_date,
    due_date,
    start_date,
    invoice_items,
    notes,
    template,
  } = data;

  const total = invoice_items.reduce(
    (acc: any, item: any) => acc + item.quantity * item.price_snapshot,
    0
  );

  const clientData = await prisma.clients.findUnique({
    where: { id: client_id },
  });

  const invoiceData = {
    invoice_number,
    client_id,
    invoice_date,
    due_date,
    start_date,
    invoice_items,
    notes,
    template,
    client: { name: clientData?.name || "Unknown Client" },
    total,
  };

  await generateInvoicePDF(invoiceData, res, false);
};

export const getInvoiceDetailForPaymentService = async (
  invoiceNumber: string,
  token: string
) => {
  if (!token) {
    throw new Error("Token not found");
  }

  const decoded = verify(token, process.env.TOKEN_KEY!) as {
    id: number;
    email: string;
  };

  const invoice = await prisma.invoices.findFirst({
    where: {
      invoice_number: invoiceNumber,
      client_id: decoded.id,
    },
    include: {
      invoice_items: true,
      clients: true,
      users: true,
    },
  });

  if (!invoice) {
    throw new Error("Invoice not found");
  }

  const userPaymentMethod = await prisma.user_payment_method.findFirst({
    where: {
      user_id: invoice.user_id,
      payment_method: invoice.payment_method,
    },
  });

  return { invoice, userPaymentMethod };
};

export const getInvoiceDetailService = async (
  invoiceNumber: string,
  res: Response
): Promise<void> => {
  const invoice = await prisma.invoices.findFirst({
    where: { invoice_number: invoiceNumber },
    include: {
      invoice_items: true,
      clients: true,
      recurring_invoice: true,
    },
  });

  if (!invoice) {
    throw new Error("Invoice not found");
  }

  const invoiceData = {
    invoice_number: invoice.invoice_number,
    client: { name: invoice.clients.name },
    due_date: invoice.due_date,
    start_date: invoice.start_date,
    invoice_items: invoice.invoice_items,
    total: invoice.total,
    notes: invoice.notes || undefined,
    recurrence_interval: invoice.recurring_invoice?.recurrence_interval,
    recurrence_type: invoice.recurring_invoice?.recurrence_type,
    template: invoice.template,
  };

  await generateInvoicePDF(invoiceData, res, false);
};

export const downloadInvoicePDFService = async (
  invoiceId: number,
  res: Response
): Promise<void> => {
  const invoice = await prisma.invoices.findUnique({
    where: { id: invoiceId },
    include: {
      invoice_items: true,
      clients: true,
      recurring_invoice: true,
    },
  });

  if (!invoice) {
    throw new Error("Invoice not found");
  }

  const invoiceData = {
    invoice_number: invoice.invoice_number,
    client: { name: invoice.clients.name },
    due_date: invoice.due_date,
    start_date: invoice.start_date,
    invoice_items: invoice.invoice_items,
    total: invoice.total,
    notes: invoice.notes || undefined,
    recurrence_interval: invoice.recurring_invoice?.recurrence_interval,
    recurrence_type: invoice.recurring_invoice?.recurrence_type,
    template: invoice.template,
  };

  await generateInvoicePDF(invoiceData, res, true);
};

export const sendInvoiceEmailService = async (
  invoiceNumber: string,
  userId: number
): Promise<void> => {
  const invoice = await prisma.invoices.findFirst({
    where: {
      invoice_number: invoiceNumber,
      user_id: userId,
      is_deleted: false,
    },
    include: {
      invoice_items: true,
      clients: true,
      recurring_invoice: true,
    },
  });

  if (!invoice) throw new Error("Invoice not found");

  const user = await prisma.users.findFirst({
    where: { id: invoice.user_id, is_deleted: false },
  });
  if (!user) throw new Error("User not found");

  const userProfile = await prisma.user_profiles.findFirst({
    where: { user_id: user.id },
  });
  if (!userProfile) throw new Error("User profile not found");

  const token = createToken(
    {
      id: invoice.client_id,
      email: invoice.clients.email,
      invoice_number: invoice.invoice_number,
    },
    "30d"
  );

  const pdfBuffer = await generateInvoicePDF({
    invoice_number: invoice.invoice_number,
    client: { name: invoice.clients.name },
    due_date: invoice.due_date,
    start_date: invoice.start_date,
    invoice_items: invoice.invoice_items,
    total: invoice.total,
    notes: invoice.notes || undefined,
    recurrence_interval: invoice.recurring_invoice?.recurrence_interval,
    recurrence_type: invoice.recurring_invoice?.recurrence_type,
    template: invoice.template,
  });

  await sendInvoiceEmail(
    invoice.clients.email,
    `Invoice Payment - ${userProfile.first_name} ${userProfile.last_name}`,
    null,
    {
      name: userProfile.first_name,
      client_name: invoice.clients.name,
      invoice_number: invoice.invoice_number,
      token,
      isRecurring: invoice.recurrence_invoice_id !== null,
    },
    pdfBuffer
  );
};
