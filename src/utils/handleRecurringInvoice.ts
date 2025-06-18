import { addDays, addWeeks, addMonths } from "date-fns";
import prisma from "../configs/prisma";
import { PaymentMethod } from "../../prisma/generated/client";
import { sendInvoiceEmail } from "./email/sendEmail";
import { createToken } from "./createToken";
import { generateInvoicePDFBuffer } from "./pdf/pdfGeneratorBuffer";

export const handleRecurringInvoice = async () => {
  
    const now = new Date();
    let createdCount = 0;

    const recurringInvoices = await prisma.recurring_invoice.findMany({
      where: {
        is_active: true,
        is_deleted: false,
        next_run: {
          lte: now,
        },
      },
      include: {
        recurring_invoice_item: true,
        clients: true,
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
        start_date,
        due_in_days,
        status,
        total,
        recurring_invoice_item,
        payment_method,
        notes
      } = recurring;

      const existingGenerated = await prisma.invoices.count({
        where: {
          invoice_number: {
            startsWith: invoice_number,
          },
          user_id,
        },
      });

      if (duration !== null && duration !== undefined && existingGenerated >= duration) {
  
        await prisma.recurring_invoice.update({
          where: { id },
          data: { is_active: false },
        });
        continue;
      }

      const dueDate = addDays(new Date(next_run), due_in_days );

      const recurringInvoice = await prisma.recurring_invoice.create({
        data: {
          user_id,
          client_id,
          invoice_number: `${invoice_number}-${existingGenerated + 1}`,
          start_date: next_run,
          due_date: dueDate,
          notes,
          status,
          total,
          payment_method: payment_method as PaymentMethod,
          due_in_days,
          recurrence_type,
          next_run,
        },
      });

      await prisma.recurring_invoice_item.createMany({
        data: recurring_invoice_item.map((item) => ({
          recurring_invoice_id: recurringInvoice.id,
          product_id: item.product_id,
          name_snapshot: item.name_snapshot,
          price_snapshot: item.price_snapshot,
          quantity: item.quantity,
          total: item.total,
        })),
      });

      createdCount++;

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

      await prisma.recurring_invoice.update({
        where: { id },
        data: {
          next_run: newNextRun,
        },
      });

      const token = createToken(
        {
          id: recurring.clients.id,
          email: recurring.clients.email,
        },
        "30d"
      );

      const pdfBuffer = await generateInvoicePDFBuffer({
        invoice_number: recurring.invoice_number,
        client: { name: recurring.clients.name },
        due_date: dueDate,
        start_date: recurring.start_date,
        invoice_items: recurring.recurring_invoice_item,
        total: recurringInvoice.total,
        notes: recurring.notes || undefined,
        recurrence_interval: recurring.recurrence_interval,
        recurrence_type: recurring.recurrence_type
      })

      await sendInvoiceEmail(
        recurring.clients.email,
        `Invoice ${recurring.invoice_number}`,
        null,
        {
          name: recurring.clients.name,
          invoice_number: recurring.invoice_number,
          token,
          isRecurring: true
        },
        pdfBuffer
      )
    }

    return createdCount;
};
