import { NextFunction, Request, Response } from "express";
import { createResponse } from "../utils/response";
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
        invoice_items,
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
        invoice_items: {
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
          recurring_invoice_item: {
            create: invoice_items.map((item) => ({
              product_id: item.product_id,
              name_snapshot: item.name_snapshot,
              price_snapshot: item.price_snapshot,
              quantity: item.quantity,
              total: item.total,
            })),
          },
        },
      });

      createResponse(res, "Recurring invoice created successfully", created);
    } catch (error) {
      next(error);
    }
  }
}

export default RecurringController;
