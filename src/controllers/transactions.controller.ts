import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";
import { cloudUpload } from "../configs/cloudinary";
import { sendStatusEmail } from "../utils/email/sendEmail";
import { createTransactionService, getPaymentProofService } from "../services/transaction.service";

class TransactionController {
  async createTransaction(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      const file = req.file;
  
      const transaction = await createTransactionService(invoiceNumber, file);
  
      createResponse(res, "Transaction has been created", transaction);
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
  
      const transaction = await getPaymentProofService(invoiceNumber);
  
      successResponse(res, "Success", transaction);
    } catch (error) {
      next(error);
    }
  }
}

export default TransactionController;
