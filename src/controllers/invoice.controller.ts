import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";
import { PaymentMethod, Status } from "../../prisma/generated/client";
import { generateInvoicePDF } from "../utils/pdf/pdfGenerator";
import { generateInvoicePDFBuffer } from "../utils/pdf/pdfGeneratorBuffer";
import { sendInvoiceEmail, sendStatusEmail } from "../utils/email/sendEmail";
import { createToken } from "../utils/createToken";
import { scheduledEmailLogic } from "../utils/scheduledEmailLogic";
import dayjs from "dayjs";

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
      const skip = (page - 1) * limit;
      const search = req.query.search as string;
      const payment = req.query.payment as string;
      const status = req.query.status as string;
      const sort = req.query.sort as string;

      let orderByClause: any = { invoice_number: "asc" };
      if (sort === "invoice_number_asc")
        orderByClause = { invoice_number: "asc" };
      else if (sort === "invoice_number_desc")
        orderByClause = { invoice_number: "desc" };
      else if (sort === "client_name_asc")
        orderByClause = { clients: { name: "asc" } };
      else if (sort === "client_name_desc")
        orderByClause = { clients: { name: "desc" } };
      else if (sort === "start_date_asc") orderByClause = { start_date: "asc" };
      else if (sort === "start_date_desc")
        orderByClause = { start_date: "desc" };
      else if (sort === "due_date_asc") orderByClause = { due_date: "asc" };
      else if (sort === "due_date_desc") orderByClause = { due_date: "desc" };
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

      const invoice = await prisma.invoices.findMany({
        where: whereClause,
        orderBy: orderByClause,
        take: limit,
        skip,
        include: {
          clients: true,
        },
      });

      const total = await prisma.invoices.count({
        where: whereClause,
      });
      successResponse(res, "Success", {
        invoice,
        pagination: {
          page,
          limit,
          totalPages: Math.ceil(total / limit),
          totalItems: total,
        },
      });
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
        is_deleted,
        invoice_items,
        payment_method,
      }: {
        client_id: number;
        start_date: Date;
        due_date: Date;
        invoice_number: string;
        status: string;
        notes: string;
        total: number;
        is_deleted: boolean;
        payment_method: string;
        invoice_items: {
          product_id: number;
          name_snapshot: string;
          price_snapshot: number;
          quantity: number;
          total: number;
        }[];
      } = req.body;

      const userPaymentMethod = await prisma.user_payment_method.count({
        where: {
          user_id: userId,
          is_active: true,
        },
      });

      const userPaymentMethodData = await prisma.user_payment_method.findFirst({
        where: {
          user_id: userId,
          is_active: true,
          payment_method: payment_method as PaymentMethod,
        },
      });

      if (!userPaymentMethodData) {
        throw `You have not activated the selected payment method: ${payment_method}`;
      }

      if (userPaymentMethod === 0) {
        throw "You need to add payment method atleast one to create invoice";
      }

      const isExist = await prisma.invoices.findUnique({
        where: {
          invoice_number,
          is_deleted: false,
        },
      });

      if (isExist) {
        throw "Invoice number already exist";
      }

      const createInvoice = await prisma.invoices.create({
        data: {
          user_id: userId,
          client_id,
          start_date,
          due_date,
          invoice_number,
          status: status as Status,
          notes,
          total,
          payment_method: payment_method as PaymentMethod,
          is_deleted,
        },
      });

      const createInvoiceItems = await prisma.invoice_items.createMany({
        data: invoice_items.map((item: any) => ({
          invoice_id: createInvoice.id,
          product_id: item.product_id,
          name_snapshot: item.name_snapshot,
          price_snapshot: item.price_snapshot,
          quantity: item.quantity,
          total: item.total,
        })),
      });

      const today = dayjs().format("YYYY-MM-DD");
      const startDateFormatted = dayjs(start_date).format("YYYY-MM-DD");

      if (today === startDateFormatted) {
        const user = await prisma.users.findUnique({ where: { id: userId } });
        const userProfile = await prisma.user_profiles.findFirst({
          where: { user_id: userId },
        });
        const client = await prisma.clients.findUnique({
          where: { id: client_id },
        });

        if (user && userProfile && client) {
          const token = createToken(
            {
              id: client.id,
              email: client.email,
            },
            "30d"
          );

          const pdfBuffer = await generateInvoicePDFBuffer({
            invoice_number: invoice_number,
            client: { name: client.name },
            due_date: due_date,
            start_date: start_date,
            invoice_items,
            total,
            notes: notes || undefined,
          });

          await sendInvoiceEmail(
            client.email,
            `Invoice Payment - ${userProfile.first_name} ${userProfile.last_name}`,
            null,
            {
              name: client.name,
              invoice_number: invoice_number,
              token,
              isRecurring: false,
            },
            pdfBuffer
          );
        }
      }
      createResponse(res, "Invoice has been created", createInvoice);
    } catch (error) {
      next(error);
    }
  }

  async updateInvoiceStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      const status = req.body.status;

      const invoice = await prisma.invoices.findUnique({
        where: { invoice_number: invoiceNumber },
        include: {
          clients: true,
          users: true,
          invoice_items: true,
        },
      });

      if (!invoice) {
        throw "Invoice not found";
      }

      const userProfile = await prisma.user_profiles.findFirst({
        where: {
          user_id: invoice.users.id,
        },
      });

      if (!userProfile) {
        throw "User profile not found";
      }

      const updateStatus = await prisma.invoices.update({
        where: {
          invoice_number: invoiceNumber,
        },
        data: {
          status: status as Status,
        },
      });

      const sendEmailToClient = await sendStatusEmail(
        invoice.clients.email,
        "Payment Status Updated",
        null,
        {
          name: `${userProfile.first_name} ${userProfile.last_name}`,
          invoice_number: invoice.invoice_number,
          client_name: invoice.clients.name,
          template: "payment-paid-client",
          status: status,
        }
      );

      const sendEmailToUser = await sendStatusEmail(
        invoice.users.email,
        "Payment Status Updated",
        null,
        {
          name: `${userProfile.first_name} ${userProfile.last_name}`,
          invoice_number: invoice.invoice_number,
          client_name: invoice.clients.name,
          template: "payment-paid-user",
          status: status,
        }
      );

      successResponse(
        res,
        "Status has been updated successfully",
        updateStatus
      );
    } catch (error) {
      next(error);
    }
  }

  async scheduledEmailInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      await scheduledEmailLogic();
      successResponse(res, "Email has been sent successfully");
    } catch (error) {
      next(error);
    }
  }

  async previewInvoicePDF(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const {
        client_id,
        invoice_date,
        due_date,
        invoice_items,
        notes,
        start_date,
        invoice_number,
      } = req.body;

      const total = invoice_items.reduce(
        (acc: number, item: any) => acc + item.quantity * item.price_snapshot,
        0
      );

      const clientData = await prisma.clients.findUnique({
        where: { id: client_id },
      });

      const invoiceData = {
        invoice_number,
        client_id,
        invoice_date,
        due_date,
        start_date,
        invoice_items,
        notes,
        client: { name: clientData?.name || "Unknown Client" },
        total,
      };

      generateInvoicePDF(invoiceData, res, false);
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
      const invoice = await prisma.invoices.findUnique({
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

      const userPaymentMethod = await prisma.user_payment_method.findFirst({
        where: {
          user_id: invoice.user_id,
          payment_method: invoice.payment_method,
        },
      });

      successResponse(res, "Success", {
        invoice,
        userPaymentMethod,
      });
    } catch (error) {
      next(error);
    }
  }

  async DetailInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      const invoice = await prisma.invoices.findUnique({
        where: { invoice_number: invoiceNumber },
        include: {
          invoice_items: true,
          clients: true,
        },
      });
      if (!invoice) {
        throw "Invoice not found";
      }
      generateInvoicePDF(
        {
          invoice_number: invoice.invoice_number,
          client: { name: invoice.clients.name },
          due_date: invoice.due_date,
          start_date: invoice.start_date.toISOString(),
          invoice_items: invoice.invoice_items,
          total: invoice.total,
          notes: invoice.notes || undefined,
        },
        res,
        false
      );
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
      const invoiceId = parseInt(req.params.id);
      const invoice = await prisma.invoices.findUnique({
        where: { id: invoiceId },
        include: {
          invoice_items: true,
          clients: true,
        },
      });
      if (!invoice) {
        throw "Invoice not found";
      }
      generateInvoicePDF(
        {
          invoice_number: invoice.invoice_number,
          client: { name: invoice.clients.name },
          due_date: invoice.due_date,
          start_date: invoice.start_date.toISOString(),
          invoice_items: invoice.invoice_items,
          total: invoice.total,
          notes: invoice.notes || undefined,
        },
        res,
        true
      );
    } catch (error) {
      next(error);
    }
  }

  async sendInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const invoiceNumber = req.params.invoice_number;
      const invoice = await prisma.invoices.findUnique({
        where: { invoice_number: invoiceNumber },
        include: {
          invoice_items: true,
          clients: true,
        },
      });

      if (!invoice) {
        throw "Invoice not found";
      }

      generateInvoicePDF(
        {
          invoice_number: invoice.invoice_number,
          client: { name: invoice.clients.name },
          due_date: invoice.due_date,
          start_date: invoice.start_date.toISOString(),
          invoice_items: invoice.invoice_items,
          total: invoice.total,
          notes: invoice.notes || undefined,
        },
        res,
        false
      );
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
      const invoice = await prisma.invoices.findUnique({
        where: { invoice_number: invoiceNumber },
        include: {
          invoice_items: true,
          clients: true,
        },
      });

      if (!invoice) {
        throw "Invoice not found";
      }

      const user = await prisma.users.findUnique({
        where: { id: invoice.user_id },
      });

      if (!user) {
        throw "User not found";
      }
      const userProfile = await prisma.user_profiles.findFirst({
        where: { user_id: user.id },
      });

      if (!userProfile) {
        throw "User profile not found";
      }

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
        due_date: invoice.due_date,
        start_date: invoice.start_date,
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
          isRecurring: false
        },
        pdfBuffer
      );

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
}

export default InvoiceController;
