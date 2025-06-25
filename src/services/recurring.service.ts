import { Response } from "express";
import { PaymentMethod, TemplateStyle } from "../../prisma/generated/client";
import prisma from "../configs/prisma";
import { CreateRecurringInvoiceInput } from "../types/recurring.type";
import { generateInvoicePDF } from "../utils/pdf/pdfGenerator";
import { createToken } from "../utils/createToken";
import { sendInvoiceEmail } from "../utils/email/sendEmail";



export const createRecurringInvoiceService = async (
  input: CreateRecurringInvoiceInput
) => {
  const {
    userId,
    client_id,
    invoice_number,
    start_date,
    notes,
    recurrence_type,
    recurrence_interval,
    duration,
    due_in_days,
    total,
    payment_method,
    template,
    recurring_invoice_items,
  } = input;

  const isExist = await prisma.recurring_invoice.findFirst({
    where: {
      user_id: userId,
      invoice_number,
    },
  });

  if (isExist) {
    throw `Recurring invoice with invoice number ${invoice_number} already exist`;
  }

  const startDate = new Date(start_date);
  const dueDate = new Date(startDate);
  dueDate.setDate(dueDate.getDate() + due_in_days);
  const nextRun = new Date(startDate);

  const created = await prisma.recurring_invoice.create({
    data: {
      user_id: userId,
      client_id,
      invoice_number,
      start_date: startDate,
      due_date: dueDate,
      notes,
      recurrence_type,
      recurrence_interval,
      duration,
      payment_method: payment_method as PaymentMethod,
      template: template as TemplateStyle,
      due_in_days,
      total,
      next_run: nextRun,
    },
  });

  await prisma.recurring_invoice_item.createMany({
    data: recurring_invoice_items.map((item) => ({
      recurring_invoice_id: created.id,
      product_id: item.product_id,
      name_snapshot: item.name_snapshot,
      price_snapshot: item.price_snapshot,
      quantity: item.quantity,
      total: item.total,
    })),
  });

  return created;
};

export const softDeleteRecurringInvoiceService = async ({
    userId,
    invoiceNumber,
  }: {
    userId: number;
    invoiceNumber: string;
  }) => {
    const invoice = await prisma.recurring_invoice.findFirst({
      where: { user_id: userId, invoice_number: invoiceNumber },
    });
  
    if (!invoice) {
      throw "Invoice not found";
    }
  
    const deletedInvoice = await prisma.recurring_invoice.update({
      where: { id: invoice.id },
      data: { is_deleted: true },
    });
  
    return deletedInvoice;
  };
  
  export const getAllRecurringInvoiceService = async ({
    userId,
    page,
    limit,
    search,
    payment,
    type,
    status,
    sort,
  }: {
    userId: number;
    page: number;
    limit: number;
    search?: string;
    payment?: string;
    type?: string;
    status?: string;
    sort?: string;
  }) => {
    const skip = (page - 1) * limit;
  
    let orderByClause: any = { created_at: "asc" };
    if (sort === "invoice_number_asc") orderByClause = { invoice_number: "asc" };
    else if (sort === "invoice_number_desc") orderByClause = { invoice_number: "desc" };
    else if (sort === "client_name_asc") orderByClause = { clients: { name: "asc" } };
    else if (sort === "client_name_desc") orderByClause = { clients: { name: "desc" } };
    else if (sort === "start_date_asc") orderByClause = { start_date: "asc" };
    else if (sort === "start_date_desc") orderByClause = { start_date: "desc" };
    else if (sort === "recurrence_interval_asc") orderByClause = { recurrence_interval: "asc" };
    else if (sort === "recurrence_interval_desc") orderByClause = { recurrence_interval: "desc" };
    else if (sort === "duration_asc") orderByClause = { duration: "asc" };
    else if (sort === "duration_desc") orderByClause = { duration: "desc" };
    else if (sort === "due_in_days_asc") orderByClause = { due_in_days: "asc" };
    else if (sort === "due_in_days_desc") orderByClause = { due_in_days: "desc" };
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
    if (type) {
      whereClause.recurrence_type = type;
    }
  
    const [recurringInvoice, total] = await Promise.all([
      prisma.recurring_invoice.findMany({
        where: whereClause,
        orderBy: orderByClause,
        take: limit,
        skip,
        include: {
          users: true,
          clients: true,
          recurring_invoice_item: true,
        },
      }),
      prisma.recurring_invoice.count({
        where: whereClause,
      }),
    ]);
  
    return {
      recurringInvoice,
      pagination: {
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        totalItems: total,
      },
    };
  };
  
  export const getRecurringInvoiceChildrenService = async ({
    userId,
    recurringInvoiceNumber,
    page,
    limit,
    search,
    payment,
    status,
    sort,
  }: {
    userId: number;
    recurringInvoiceNumber: string;
    page: number;
    limit: number;
    search?: string;
    payment?: string;
    status?: string;
    sort?: string;
  }) => {
    const skip = (page - 1) * limit;
  
    let orderByClause: any = { created_at: "asc" };
    if (sort === "invoice_number_asc") orderByClause = { invoice_number: "asc" };
    else if (sort === "invoice_number_desc") orderByClause = { invoice_number: "desc" };
    else if (sort === "client_name_asc") orderByClause = { clients: { name: "asc" } };
    else if (sort === "client_name_desc") orderByClause = { clients: { name: "desc" } };
    else if (sort === "start_date_asc") orderByClause = { start_date: "asc" };
    else if (sort === "start_date_desc") orderByClause = { start_date: "desc" };
    else if (sort === "due_date_asc") orderByClause = { due_date: "asc" };
    else if (sort === "due_date_desc") orderByClause = { due_date: "desc" };
    else if (sort === "total_asc") orderByClause = { total: "asc" };
    else if (sort === "total_desc") orderByClause = { total: "desc" };
  
    const recurring = await prisma.recurring_invoice.findFirst({
      where: {
        invoice_number: recurringInvoiceNumber,
        user_id: userId,
        is_deleted: false,
      },
      select: { id: true },
    });
  
    if (!recurring) {
      throw "Recurring invoice not found";
    }
  
    const whereClause: any = {
      user_id: userId,
      recurrence_invoice_id: recurring.id,
      is_deleted: false,
    };
  
    if (search) {
      whereClause.OR = [
        { invoice_number: { contains: search, mode: "insensitive" } },
        { clients: { name: { contains: search, mode: "insensitive" } } },
      ];
    }
    if (payment) whereClause.payment_method = payment;
    if (status) whereClause.status = status;
  
    const [invoice, total] = await Promise.all([
      prisma.invoices.findMany({
        where: whereClause,
        orderBy: orderByClause,
        take: limit,
        skip,
        include: {
          users: true,
          clients: true,
          invoice_items: true,
        },
      }),
      prisma.invoices.count({ where: whereClause }),
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
  

export const previewRecurringInvoicePDFService = async (
  data: {
    client_id: number;
    invoice_number: string;
    start_date: string;
    due_date?: Date;
    recurring_invoice_items: {
      product_id: number;
      name_snapshot: string;
      price_snapshot: number;
      quantity: number;
      total: number;
    }[];
    notes?: string;
    recurrence_type: string;
    recurrence_interval: number;
    due_in_days: number;
    template: string;
  },
  res: Response
): Promise<void> => {
  const {
    client_id,
    invoice_number,
    start_date,
    recurring_invoice_items,
    notes,
    recurrence_type,
    recurrence_interval,
    due_in_days,
    template,
  } = data;

  const startDate = new Date(start_date);
  const dueDate = new Date(startDate);
  dueDate.setDate(dueDate.getDate() + due_in_days);

  const total = recurring_invoice_items.reduce(
    (acc, item) => acc + item.quantity * item.price_snapshot,
    0
  );

  const clientData = await prisma.clients.findUnique({
    where: { id: client_id },
  });

  const invoiceData = {
    invoice_number,
    client: { name: clientData?.name || "Unknown Client" },
    start_date: startDate,
    due_date: dueDate,
    invoice_items: recurring_invoice_items,
    total,
    notes,
    recurrence_type,
    recurrence_interval,
    template,
  };

  await generateInvoicePDF(invoiceData, res, false);
};

export const getRecurringInvoiceDetailService = async (
    invoiceNumber: string,
    res: Response
  ) => {
    const invoice = await prisma.recurring_invoice.findFirst({
      where: { invoice_number: invoiceNumber },
      include: {
        recurring_invoice_item: true,
        clients: true,
      },
    });
  
    if (!invoice) {
      throw "Invoice not found";
    }
  
    const startDate = new Date(invoice.start_date);
    const dueDate = new Date(startDate);
    dueDate.setDate(dueDate.getDate() + invoice.due_in_days);
  
    return generateInvoicePDF(
      {
        invoice_number: invoice.invoice_number,
        client: { name: invoice.clients.name },
        due_date: dueDate,
        start_date: startDate,
        invoice_items: invoice.recurring_invoice_item,
        total: invoice.total,
        notes: invoice.notes || undefined,
        recurrence_type: invoice.recurrence_type,
        recurrence_interval: invoice.recurrence_interval,
        template: invoice.template,
      },
      res,
      false
    );
  };

export const sendRecurringInvoiceEmailService = async (invoiceNumber: string) => {
  const invoice = await prisma.recurring_invoice.findFirst({
    where: { invoice_number: invoiceNumber, is_deleted: false },
    include: {
      recurring_invoice_item: true,
      clients: true,
    },
  });

  if (!invoice) throw "Invoice not found";

  const user = await prisma.users.findFirst({
    where: { id: invoice.user_id, is_deleted: false },
  });
  if (!user) throw "User not found";

  const userProfile = await prisma.user_profiles.findFirst({
    where: { user_id: user.id },
  });
  if (!userProfile) throw "User profile not found";

  const startDate = new Date(invoice.start_date);
  const dueDate = new Date(startDate);
  dueDate.setDate(dueDate.getDate() + invoice.due_in_days);

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
    due_date: dueDate,
    start_date: startDate,
    invoice_items: invoice.recurring_invoice_item,
    total: invoice.total,
    notes: invoice.notes || undefined,
    recurrence_type: invoice.recurrence_type,
    recurrence_interval: invoice.recurrence_interval,
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
      isRecurring: true,
    },
    pdfBuffer
  );
};

export const getRecurringInvoiceDetailPayment = async (invoiceNumber: string) => {
  const invoice = await prisma.recurring_invoice.findFirst({
    where: { invoice_number: invoiceNumber },
    include: {
      recurring_invoice_item: true,
      clients: true,
      users: true,
    },
  });

  if (!invoice) {
    throw "Invoice not found";
  }

  const userPaymentMethod = await prisma.user_payment_method.findFirst({
    where: {
      user_id: invoice.user_id,
      payment_method: invoice.payment_method,
    },
  });

  return {
    invoice,
    userPaymentMethod,
  };
};


export const downloadRecurringInvoicePdf = async (
  invoiceNumber: string,
  res: Response
): Promise<void> => {
  const invoice = await prisma.recurring_invoice.findFirst({
    where: { invoice_number: invoiceNumber },
    include: {
      recurring_invoice_item: true,
      clients: true,
    },
  });

  if (!invoice) {
    throw "Invoice not found";
  }

  const startDate = new Date(invoice.start_date);
  const dueDate = new Date(startDate);
  dueDate.setDate(dueDate.getDate() + invoice.due_in_days);

  await generateInvoicePDF(
    {
      invoice_number: invoice.invoice_number,
      client: { name: invoice.clients.name },
      due_date: dueDate,
      start_date: invoice.start_date,
      invoice_items: invoice.recurring_invoice_item,
      total: invoice.total,
      notes: invoice.notes || undefined,
      recurrence_type: invoice.recurrence_type,
      recurrence_interval: invoice.recurrence_interval,
      template: invoice.template,
    },
    res,
    true
  );
};
