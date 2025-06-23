import prisma from "../configs/prisma";
import { sendInvoiceEmail, sendOverdueInvoiceEmail } from "../utils/email/sendEmail";
import { createToken } from "../utils/createToken";
import { generateInvoicePDF } from "./pdf/pdfGenerator";

export const scheduledEmailLogic = async () => {
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

  const invoices = await prisma.invoices.findMany({
    where: {
      start_date: {
        gte: new Date(formattedDate + "T00:00:00.000Z"),
        lte: new Date(formattedDate + "T23:59:59.999Z"),
      },
      is_deleted: false,
    },
    include: {
      invoice_items: true,
      clients: true,
    },
  });

  for (const invoice of invoices) {
    const user = await prisma.users.findFirst({
      where: { id: invoice.user_id, is_deleted: false },
    });

    if (!user) continue;

    const userProfile = await prisma.user_profiles.findFirst({
      where: { user_id: user.id },
    });

    if (!userProfile) continue;

    const token = createToken(
      {
        id: invoice.client_id,
        email: invoice.clients.email,
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
        isRecurring: false
      },
      pdfBuffer
    );
  }

  return invoices.length;
};


export const markOverdueInvoices = async () => {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
  const zone = "Asia/Jakarta";

  const todayString = new Intl.DateTimeFormat("en-CA", {
    timeZone: zone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const formattedStart = new Date(`${todayString}T00:00:00.000Z`);
  const formattedEnd = new Date(`${todayString}T23:59:59.999Z`);
  
  const overdueInvoices = await prisma.invoices.findMany({
    where: {
      due_date: {
        gte: formattedStart,
        lte: formattedEnd
      },
      status: "Pending",
      is_deleted: false,
    },
    include: {
      clients: true,
      invoice_items: true,
      users: true
    },
  });

  for (const invoice of overdueInvoices) {
    await prisma.invoices.update({
      where: { id: invoice.id },
      data: {
        status: "Overdue",
      },
    });

    const user = await prisma.users.findFirst({
      where: { id: invoice.user_id, is_deleted: false },
    });

    if (!user) continue;

    const userProfile = await prisma.user_profiles.findFirst({
      where: { user_id: user.id },
    });

    if (!userProfile) continue;


    const token = createToken({ id: invoice.clients.id, email: invoice.clients.email }, "30d");

    const pdfBuffer = await generateInvoicePDF({
      invoice_number: invoice.invoice_number,
      client: { name: invoice.clients.name },
      due_date: invoice.due_date,
      start_date: invoice.start_date,
      invoice_items: invoice.invoice_items,
      total: invoice.total,
      notes: invoice.notes || undefined,
      template: invoice.template
    });

    await sendOverdueInvoiceEmail(
      invoice.clients.email,
      `Overdue Invoice - ${userProfile.first_name} ${userProfile.last_name}`,
      null,
      {
        name: userProfile.first_name,
        client_name: invoice.clients.name,
        invoice_number: invoice.invoice_number,
        token,
      },
      pdfBuffer
    );
  }
  return overdueInvoices.length;
};