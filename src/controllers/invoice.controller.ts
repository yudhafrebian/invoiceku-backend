import { Response, Request, NextFunction } from "express";
import {
  createResponse,
  errorResponse,
  successResponse,
} from "../utils/response";
import {
  Status,
  TemplateStyle,
} from "../../prisma/generated/client";
import {
  createInvoiceService,
  downloadInvoicePDFService,
  getAllInvoiceService,
  getInvoiceDetailForPaymentService,
  getInvoiceDetailService,
  previewInvoicePDFService,
  sendInvoiceEmailService,
  softDeleteInvoiceService,
  updateInvoiceStatusService,
} from "../services/invoice.service";

class InvoiceController {
  async getAllInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const search = req.query.search as string;
      const payment = req.query.payment as string;
      const status = req.query.status as string;
      const sort = req.query.sort as string;

      const result = await getAllInvoiceService({
        userId,
        page,
        limit,
        search,
        payment,
        status,
        sort,
      });

      successResponse(res, "Success", result);
    } catch (error) {
      next(error);
    }
  }

  async createInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const {
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
      } = req.body;

      const result = await createInvoiceService({
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
      });

      createResponse(res, "Invoice has been created", result);
    } catch (error: any) {
      if (typeof error === "string") {
        errorResponse(res, error, 400);
      } else {
        next(error);
      }
    }
  }

  async updateInvoiceStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      const { status } = req.body;

      const result = await updateInvoiceStatusService(invoiceNumber, status);

      successResponse(res, "Status has been updated successfully", result);
    } catch (error: any) {
      if (typeof error.message === "string") {
        errorResponse(res, error.message, 404);
      } else {
        next(error);
      }
    }
  }

  async softDeleteInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const invoiceNumber = req.params.invoice_number;

      const result = await softDeleteInvoiceService(userId, invoiceNumber);

      successResponse(res, "Invoice has been deleted", {
        deletedInvoice: result,
      });
    } catch (error: any) {
      if (typeof error.message === "string") {
        errorResponse(res, error.message, 404);
      } else {
        next(error);
      }
    }
  }

  async previewInvoicePDF(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await previewInvoicePDFService(req.body, res);
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
      const token = req.query.tkn as string;

      const result = await getInvoiceDetailForPaymentService(
        invoiceNumber,
        token
      );

      successResponse(res, "Success", result);
    } catch (error: any) {
      if (typeof error.message === "string") {
        errorResponse(res, error.message, 400);
      } else {
        next(error);
      }
    }
  }

  async DetailInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      await getInvoiceDetailService(invoiceNumber, res);
    } catch (error: any) {
      next(error);
    }
  }

  async downloadPdf(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceId = parseInt(req.params.id);
      await downloadInvoicePDFService(invoiceId, res);
    } catch (error) {
      next(error);
    }
  }

  async sendInvoiceEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      const userId = res.locals.data.id;
  
      await sendInvoiceEmailService(invoiceNumber, userId);
      successResponse(res, "Email sent successfully");
    } catch (error) {
      next(error);
    }
  }

  async getInvoiceStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const status = Object.values(Status);
      successResponse(res, "Success", status);
    } catch (error) {
      next(error);
    }
  }

  async getTemplates(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const templates = Object.values(TemplateStyle);
      successResponse(res, "Success", templates);
    } catch (error) {
      next(error);
    }
  }
}

export default InvoiceController;
