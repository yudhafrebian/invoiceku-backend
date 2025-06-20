import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";
import { cloudUpload } from "../configs/cloudinary";
import { sendStatusEmail } from "../utils/email/sendEmail";

class TransactionController {
  async createTransaction(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      const invoice = await prisma.invoices.findFirst({
        where: { invoice_number: invoiceNumber },
        include: {
          invoice_items: true,
          clients: true,
          users: true,
        },
      });

      let paymentProofImage: string | undefined;
      if (req.file) {
        const upload = await cloudUpload(req.file);
        paymentProofImage = upload.secure_url;
      }

      if (!paymentProofImage) {
        throw "Payment proof is required";
      }

      if (!invoice) {
        throw "Invoice not found";
      }

      const userProfile = await prisma.user_profiles.findFirst({
        where: {
          user_id: invoice.user_id,
        },
      });

      if (!userProfile) {
        throw "User profile not found";
      }

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

      const createTransaction = await prisma.transaction.create({
        data: {
          invoice_id: invoice.id,
          payment_method: invoice.payment_method,
          payment_proof: paymentProofImage,
        },
      });

      const updateInvoiceStatus = await prisma.invoices.update({
        where: { id: invoice.id },
        data: {
          status: "Confirmating",
        },
      });

      createResponse(res, "Transaction has been created", createTransaction);
    } catch (error) {
      next(error);
    }
  }

  async getPaymentProof(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;

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

      successResponse(res, "Success", transaction);
    } catch (error) {
      next(error);
    }
  }
}

export default TransactionController;
