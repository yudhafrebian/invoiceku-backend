import { addDays, addWeeks, addMonths } from "date-fns";
import prisma from "../configs/prisma";
import { PaymentMethod, TemplateStyle } from "../../prisma/generated/client";
import { sendInvoiceEmail } from "./email/sendEmail";
import { createToken } from "./createToken";
import { generateInvoicePDF } from "./pdf/pdfGenerator";

export const handleRecurringInvoice = async () => {
  const zone = "Asia/Jakarta";

  const todayString = new Intl.DateTimeFormat("en-CA", {
    timeZone: zone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const formattedStart = new Date(`${todayString}T00:00:00.000Z`);
  const formattedEnd = new Date(`${todayString}T23:59:59.999Z`);

  let createdCount = 0;

  const recurringInvoices = await prisma.recurring_invoice.findMany({
    where: {
      is_active: true,
      is_deleted: false,
      next_run: {
        gte: formattedStart,
        lte: formattedEnd,
      },
    },
    include: {
      recurring_invoice_item: true,
      clients: true,
      users: true,
    },
  });

  

  for (const recurring of recurringInvoices) {
    const {
      id,
      user_id,
      client_id,
      invoice_number,
      next_run,
      recurrence_type,
      recurrence_interval,
      duration,
      due_in_days,
      status,
      total,
      recurring_invoice_item,
      payment_method,
      notes,
      template,
    } = recurring;

    if (
      duration !== null &&
      duration !== undefined &&
      recurring.occurrences_done >= duration
    ) {
      await prisma.recurring_invoice.update({
        where: { id },
        data: { is_active: false },
      });
      continue;
    }

    const dueDate = addDays(new Date(next_run), due_in_days);

    const newInvoiceNumber = `${invoice_number}-${recurring.occurrences_done + 1}`;

    const existing = await prisma.invoices.findFirst({
      where: { invoice_number: newInvoiceNumber },
    });

    if (existing) {
      console.warn(`Invoice ${newInvoiceNumber} sudah ada, skip`);
      continue;
    }

    let invoice;
    try {
      invoice = await prisma.invoices.create({
        data: {
          user_id,
          client_id,
          invoice_number: newInvoiceNumber,
          start_date: next_run,
          due_date: dueDate,
          total,
          notes,
          status,
          payment_method: payment_method as PaymentMethod,
          recurrence_invoice_id: id,
          template: template as TemplateStyle,
        },
      });
    } catch (err) {
      console.error("Gagal membuat invoice:", err);
      continue;
    }

    await prisma.invoice_items.createMany({
      data: recurring_invoice_item.map((item) => ({
        invoice_id: invoice.id,
        product_id: item.product_id,
        name_snapshot: item.name_snapshot,
        price_snapshot: item.price_snapshot,
        quantity: item.quantity,
        total: item.total,
      })),
    });

    let newNextRun: Date;
    switch (recurrence_type) {
      case "Daily":
        newNextRun = addDays(next_run, recurrence_interval);
        break;
      case "Weekly":
        newNextRun = addWeeks(next_run, recurrence_interval);
        break;
      case "Monthly":
        newNextRun = addMonths(next_run, recurrence_interval);
        break;
      default:
        newNextRun = addDays(next_run, 7);
    }


    const token = createToken(
      {
        id: recurring.clients.id,
        email: recurring.clients.email,
      },
      "30d"
    );

    const userProfile = await prisma.user_profiles.findFirst({
      where: { user_id },
    });

    if (!userProfile) continue;

    const pdfBuffer = await generateInvoicePDF({
      invoice_number: invoice.invoice_number,
      client: { name: recurring.clients.name },
      due_date: dueDate,
      start_date: invoice.start_date,
      invoice_items: recurring_invoice_item,
      total: invoice.total,
      notes: invoice.notes || undefined,
      recurrence_interval,
      recurrence_type,
      template: recurring.template
    });

    await sendInvoiceEmail(
      recurring.clients.email,
      `Invoice ${invoice.invoice_number}`,
      null,
      {
        name: userProfile.first_name,
        client_name: recurring.clients.name,
        invoice_number: invoice.invoice_number,
        token,
        isRecurring: true,
      },
      pdfBuffer
    );

    await prisma.recurring_invoice.update({
      where: { id },
      data: {
        next_run: newNextRun,
        occurrences_done: { increment: 1 },
      },
    });

    createdCount++;
  }

  return createdCount;
};
