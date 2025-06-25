import { NextFunction, Request, Response } from "express";
import { createResponse, successResponse } from "../utils/response";
import prisma from "../configs/prisma";
import {
  PaymentMethod,
  Recurrence,
  TemplateStyle,
} from "../../prisma/generated/client";
import { generateInvoicePDF } from "../utils/pdf/pdfGenerator";
import { createToken } from "../utils/createToken";
import { sendInvoiceEmail } from "../utils/email/sendEmail";
import { createRecurringInvoiceService, downloadRecurringInvoicePdf, getAllRecurringInvoiceService, getRecurringInvoiceChildrenService, getRecurringInvoiceDetailPayment, getRecurringInvoiceDetailService, previewRecurringInvoicePDFService, sendRecurringInvoiceEmailService, softDeleteRecurringInvoiceService } from "../services/recurring.service";

class RecurringController {
  async createRecurringInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const body = req.body;
  
      const result = await createRecurringInvoiceService({
        userId,
        ...body,
      });
  
      createResponse(res, "Recurring invoice created successfully", result);
    } catch (error) {
      next(error);
    }
  }

  async softDeleteRecurringInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ):Promise<void> {
    try {
      const userId = res.locals.data.id;
      const invoiceNumber = req.params.invoice_number;
  
      const result = await softDeleteRecurringInvoiceService({
        userId,
        invoiceNumber,
      });
  
      successResponse(res, "Invoice has been deleted", { deletedInvoice: result });
    } catch (error) {
      next(error);
    }
  }

  async getAllRecurringInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const userId = res.locals.data.id;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
  
      const search = req.query.search as string;
      const payment = req.query.payment as string;
      const type = req.query.type as string;
      const status = req.query.status as string;
      const sort = req.query.sort as string;
  
      const result = await getAllRecurringInvoiceService({
        userId,
        page,
        limit,
        search,
        payment,
        type,
        status,
        sort,
      });
  
      successResponse(res, "Success", result);
    } catch (error) {
      next(error);
    }
  }

  async getRecurringInvoiceChildren(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const recurringInvoiceNumber = req.params.recurring_invoice_number;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = req.query.search as string;
      const payment = req.query.payment as string;
      const status = req.query.status as string;
      const sort = req.query.sort as string;
  
      const result = await getRecurringInvoiceChildrenService({
        userId,
        recurringInvoiceNumber,
        page,
        limit,
        search,
        payment,
        status,
        sort,
      });
  
      successResponse(res, "Success", result, 200);
    } catch (error) {
      next(error);
    }
  }

  async previewRecurringInvoicePDF(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await previewRecurringInvoicePDFService(req.body, res);
    } catch (error) {
      next(error);
    }
  }

  async DetailRecurringInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      await getRecurringInvoiceDetailService(invoiceNumber, res);
    } catch (error) {
      next(error);
    }
  }

  async sendRecurringInvoiceEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      await sendRecurringInvoiceEmailService(invoiceNumber);
      successResponse(res, "Email sent successfully");
    } catch (error) {
      next(error);
    }
  }

  async detailPayment(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      const result = await getRecurringInvoiceDetailPayment(invoiceNumber);
  
      successResponse(res, "Success", result);
    } catch (error) {
      next(error);
    }
  }

  async downloadPdf(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      await downloadRecurringInvoicePdf(invoiceNumber, res);
    } catch (error) {
      next(error);
    }
  }

  async recurringType(req: Request, res: Response, next: NextFunction) {
    try {
      const recurringType = Object.values(Recurrence);
      successResponse(res, "Success", recurringType);
    } catch (error) {
      next(error);
    }
  }
}

export default RecurringController;
