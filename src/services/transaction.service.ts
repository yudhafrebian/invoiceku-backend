import { cloudUpload } from "../configs/cloudinary";
import prisma from "../configs/prisma";
import { sendStatusEmail } from "../utils/email/sendEmail";


export const createTransactionService = async (
  invoiceNumber: string,
  file: Express.Multer.File | undefined
) => {
  const invoice = await prisma.invoices.findFirst({
    where: { invoice_number: invoiceNumber },
    include: {
      invoice_items: true,
      clients: true,
      users: true,
    },
  });

  if (!invoice) throw "Invoice not found";

  if (!file) throw "Payment proof is required";

  const upload = await cloudUpload(file);
  const paymentProofImage = upload.secure_url;

  const userProfile = await prisma.user_profiles.findFirst({
    where: { user_id: invoice.user_id },
  });

  if (!userProfile) throw "User profile not found";

  await sendStatusEmail(
    invoice.users.email,
    "Payment Status Update",
    null,
    {
      name: `${userProfile.first_name} ${userProfile.last_name}`,
      invoice_number: invoice.invoice_number,
      client_name: invoice.clients.name,
      template: "payment-confirmating",
      status: "Confirmating",
    }
  );

  const transaction = await prisma.transaction.create({
    data: {
      invoice_id: invoice.id,
      payment_method: invoice.payment_method,
      payment_proof: paymentProofImage,
    },
  });

  await prisma.invoices.update({
    where: { id: invoice.id },
    data: { status: "Confirmating" },
  });

  return transaction;
};

export const getPaymentProofService = async (invoiceNumber: string) => {
    const invoice = await prisma.invoices.findFirst({
      where: { invoice_number: invoiceNumber },
      include: {
        invoice_items: true,
        clients: true,
        users: true,
      },
    });
  
    if (!invoice) {
      throw "Invoice not found";
    }
  
    const transaction = await prisma.transaction.findFirst({
      where: { invoice_id: invoice.id },
    });
  
    if (!transaction) {
      throw "Payment proof not found";
    }
  
    return transaction;
  };