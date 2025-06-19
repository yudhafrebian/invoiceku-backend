import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";

class DashboardController {
  async getSummary(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const totalInvoice = await prisma.invoices.count({
        where: {
          user_id: userId,
        },
      });

      const paidInvoice = await prisma.invoices.count({
        where: {
          user_id: userId,
          status: "Paid",
        },
      });

      const pendingInvoice = await prisma.invoices.count({
        where: {
          user_id: userId,
          status: "Pending",
        },
      });

      const confirmatingInvoice = await prisma.invoices.count({
        where: {
          user_id: userId,
          status: "Confirmating",
        },
      });

      const rejectedInvoice = await prisma.invoices.count({
        where: {
          user_id: userId,
          status: "Rejected",
        },
      });

      const overdueInvoice = await prisma.invoices.count({
        where: {
          user_id: userId,
          status: "Overdue",
        },
      });

      const clients = await prisma.clients.findMany({
        where: {
          user_id: userId,
        },
        take: 5,
      });

      const products = await prisma.products_services.findMany({
        where: {
          user_id: userId,
        },
        take: 5,
      });

      const invoices = await prisma.invoices.findMany({
        where: {
          user_id: userId,
        },
        take: 5,
      });

      successResponse(res, "Success", {
        invoiceSummary: {
          totalInvoice,
          paidInvoice,
          pendingInvoice,
          confirmatingInvoice,
          rejectedInvoice,
          overdueInvoice,
        },
        clients,
        products,
        invoices,
      });
    } catch (error) {
      next(error);
    }
  }
}


export default DashboardController;