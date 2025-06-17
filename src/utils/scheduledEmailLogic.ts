import prisma from "../configs/prisma";
import { generateInvoicePDFBuffer } from "../utils/pdf/pdfGeneratorBuffer";
import { sendInvoiceEmail } from "../utils/email/sendEmail";
import { createToken } from "../utils/createToken";

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
    const user = await prisma.users.findUnique({
      where: { id: invoice.user_id },
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

    const pdfBuffer = await generateInvoicePDFBuffer({
      invoice_number: invoice.invoice_number,
      client: { name: invoice.clients.name },
      due_date: invoice.due_date.toISOString(),
      start_date: invoice.start_date.toISOString(),
      invoice_items: invoice.invoice_items,
      total: invoice.total,
      notes: invoice.notes || undefined,
    });

    await sendInvoiceEmail(
      invoice.clients.email,
      `Invoice Payment - ${userProfile.first_name} ${userProfile.last_name}`,
      null,
      {
        name: invoice.clients.name,
        invoice_number: invoice.invoice_number,
        token,
      },
      pdfBuffer
    );
  }

  return invoices.length;
};
