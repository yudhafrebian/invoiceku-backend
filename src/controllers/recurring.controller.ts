import { NextFunction, Request, Response } from "express";
import { createResponse, successResponse } from "../utils/response";
import prisma from "../configs/prisma";
import { PaymentMethod, Recurrence } from "../../prisma/generated/client";

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

      const recurring_invoice_item = await prisma.recurring_invoice_item.createMany({
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
}

export default RecurringController;
