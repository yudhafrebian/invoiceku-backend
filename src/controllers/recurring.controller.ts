import { NextFunction, Request, Response } from "express";
import { createResponse, successResponse } from "../utils/response";
import prisma from "../configs/prisma";
import { PaymentMethod, Recurrence } from "../../prisma/generated/client";
import { generateInvoicePDF } from "../utils/pdf/pdfGenerator";
import { createToken } from "../utils/createToken";
import { generateInvoicePDFBuffer } from "../utils/pdf/pdfGeneratorBuffer";
import { sendInvoiceEmail } from "../utils/email/sendEmail";

class RecurringController {
  async createRecurringInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;

      const {
        client_id,
        invoice_number,
        start_date,
        notes,
        recurrence_type,
        recurrence_interval,
        duration,
        due_in_days,
        total,
        payment_method,
        recurring_invoice_items,
      }: {
        client_id: number;
        invoice_number: string;
        start_date: string;
        notes?: string;
        recurrence_type: Recurrence;
        recurrence_interval: number;
        duration: number;
        due_in_days: number;
        total: number;
        payment_method: string;
        recurring_invoice_items: {
          product_id: number;
          name_snapshot: string;
          price_snapshot: number;
          quantity: number;
          total: number;
        }[];
      } = req.body;

      const startDate = new Date(start_date);
      const dueDate = new Date(startDate);
      dueDate.setDate(dueDate.getDate() + due_in_days);

      const nextRun = new Date(startDate);

      const created = await prisma.recurring_invoice.create({
        data: {
          user_id: userId,
          client_id,
          invoice_number,
          start_date: startDate,
          due_date: dueDate,
          notes,
          recurrence_type,
          recurrence_interval,
          duration,
          payment_method: payment_method as PaymentMethod,
          due_in_days,
          total,
          next_run: nextRun,
        },
      });

      const recurring_invoice_item =
        await prisma.recurring_invoice_item.createMany({
          data: recurring_invoice_items.map((item) => ({
            recurring_invoice_id: created.id,
            product_id: item.product_id,
            name_snapshot: item.name_snapshot,
            price_snapshot: item.price_snapshot,
            quantity: item.quantity,
            total: item.total,
          })),
        });

      createResponse(res, "Recurring invoice created successfully", created);
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
      const skip = (page - 1) * limit;
      const search = req.query.search as string;
      const payment = req.query.payment as string;
      const status = req.query.status as string;
      const sort = req.query.sort as string;

      let orderByClause: any = { created_at: "asc" };
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

      const recurringInvoice = await prisma.recurring_invoice.findMany({
        where: whereClause,
        orderBy: orderByClause,
        take: limit,
        skip,
        include: {
          users: true,
          clients: true,
          recurring_invoice_item: true,
        },
      });

      const total = await prisma.recurring_invoice.count({
        where: whereClause,
      });
      successResponse(
        res,
        "Success",
        {
          recurringInvoice,
          pagination: {
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            totalItems: total,
          },
        },
        200
      );
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
      const {
        client_id,
        invoice_number,
        start_date,
        due_date,
        recurring_invoice_items,
        notes,
        recurrence_type,
        recurrence_interval,
        due_in_days,
      } = req.body;
      console.log("Received body for previewRecurringInvoicePDF:", req.body);
      const startDate = new Date(start_date);
      const dueDate = new Date(startDate);
      dueDate.setDate(dueDate.getDate() + due_in_days);

      const total = recurring_invoice_items.reduce(
        (acc: number, item: any) => acc + item.quantity * item.price_snapshot,
        0
      );

      const clientData = await prisma.clients.findUnique({
        where: { id: client_id },
      });

      const invoiceData = {
        invoice_number,
        client: { name: clientData?.name || "Unknown Client" },
        start_date,
        due_date: dueDate,
        invoice_items: recurring_invoice_items,
        total,
        notes,
        recurrence_type,
        recurrence_interval,
      };

      generateInvoicePDF(invoiceData, res, false);
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
      const invoice = await prisma.recurring_invoice.findUnique({
        where: { invoice_number: invoiceNumber },
        include: {
          recurring_invoice_item: true,
          clients: true,
        },
      });
      if (!invoice) {
        throw "Invoice not found";
      }

      const startDate = new Date(invoice.start_date);
      const dueDate = new Date(startDate);
      dueDate.setDate(dueDate.getDate() + invoice.due_in_days);
      generateInvoicePDF(
        {
          invoice_number: invoice.invoice_number,
          client: { name: invoice.clients.name },
          due_date: dueDate,
          start_date: invoice.start_date.toISOString(),
          invoice_items: invoice.recurring_invoice_item,
          total: invoice.total,
          notes: invoice.notes || undefined,
          recurrence_type: invoice.recurrence_type,
          recurrence_interval: invoice.recurrence_interval,
        },
        res,
        false
      );
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
      const invoice = await prisma.recurring_invoice.findUnique({
        where: { invoice_number: invoiceNumber },
        include: {
          recurring_invoice_item: true,
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
      })

      if (!userProfile) {
        throw "User profile not found";
      }

      const startDate = new Date(invoice.start_date);
      const dueDate = new Date(startDate);
      dueDate.setDate(dueDate.getDate() + invoice.due_in_days);

      const token = createToken({
        id: invoice.client_id,
        email: invoice.clients.email
      },"30d")

      const pdfBuffer = await generateInvoicePDFBuffer({
        invoice_number: invoice.invoice_number,
        client: { name: invoice.clients.name },
        due_date: dueDate,
        start_date: invoice.start_date,
        invoice_items: invoice.recurring_invoice_item,
        total: invoice.total,
        notes: invoice.notes || undefined,
        recurrence_type: invoice.recurrence_type,
        recurrence_interval: invoice.recurrence_interval,
      });

      await sendInvoiceEmail(
        invoice.clients.email,
        `Invoice Payment - ${userProfile.first_name} ${userProfile.last_name}`,
        null,
        { name: invoice.clients.name, invoice_number: invoice.invoice_number , token},
        pdfBuffer
      );

      successResponse(res, "Email sent successfully");
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
