import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";
import { PaymentMethod, Status } from "../../prisma/generated/client";

class InvoiceController {
  async getAllInvoice(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const invoice = await prisma.invoices.findMany({
        where: {
          user_id: userId,
        },
        include: {
          clients: true,
        }
      });
      successResponse(res, "Success", invoice);
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
        payment_method
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

      if (userPaymentMethod === 0) {
        throw "You need to add payment method atleast one to create invoice";
      }

      const isExist = await prisma.invoices.findUnique({
        where: {
          invoice_number,
          is_deleted: false
        }
      })

      if (isExist) {
        throw "Invoice number already exist"
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
      createResponse(res, "Invoice has been created", createInvoice);
    } catch (error) {
      next(error);
    }
  }
}

export default InvoiceController;
