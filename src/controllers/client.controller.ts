import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";
import { PaymentMethod } from "../../prisma/generated/client";

class ClientController {
  async getAllClient(
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
      const sort = req.query.sort as string;

      let orderByClause: any = { name: "asc" };

      if (sort === "name_asc") orderByClause = { name: "asc" };
      else if (sort === "name_desc") orderByClause = { name: "desc" };
      else if (sort === "email_asc") orderByClause = { email: "asc" };
      else if (sort === "email_desc") orderByClause = { email: "desc" };
      else if (sort === "phone_asc") orderByClause = { phone: "asc" };
      else if (sort === "phone_desc") orderByClause = { phone: "desc" };
      else if (sort === "address_asc") orderByClause = { address: "asc" };
      else if (sort === "address_desc") orderByClause = { address: "desc" };

      const whereClause: any = {
        user_id: userId,
        is_deleted: false,
      };

      if (search) {
        whereClause.OR = [
          {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            email: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            phone: {
              contains: search,
              mode: "insensitive",
            },
          },
          {
            address: {
              contains: search,
              mode: "insensitive",
            },
          },
        ];
      }

      if (payment) {
        whereClause.payment_ref = payment;
      }

      const [clients, total] = await Promise.all([
        prisma.clients.findMany({
          where: whereClause,
          skip,
          take: limit,
          orderBy: orderByClause,
        }),
        prisma.clients.count({
          where: whereClause,
        }),
      ]);
      successResponse(res, "Success", {
        clients,
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

  async getSingleClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const clientId = parseInt(req.params.id);
      const client = await prisma.clients.findUnique({
        where: {
          id: clientId,
        },
      });
      successResponse(res, "Success", { client });
    } catch (error) {
      next(error);
    }
  }

  async createClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const rawPhone = String(req.body.phone);
      const normalizedPhone = rawPhone.startsWith("62")
        ? rawPhone
        : `62${rawPhone}`;
      const userId = res.locals.data.id;
      const createClient = await prisma.clients.create({
        data: {
          user_id: userId,
          name: req.body.name,
          email: req.body.email,
          phone: normalizedPhone,
          address: req.body.address,
          payment_ref: req.body.payment_ref,
        },
      });
      createResponse(res, "Client has been created", createClient);
    } catch (error) {
      next(error);
    }
  }

  async updateClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const rawPhone = String(req.body.phone);
      const normalizedPhone = rawPhone.startsWith("62")
        ? rawPhone
        : `62${rawPhone}`;
      const clientId = parseInt(req.params.id);
      const updateClient = await prisma.clients.update({
        where: {
          id: clientId,
        },
        data: {
          name: req.body.name,
          email: req.body.email,
          phone: normalizedPhone,
          address: req.body.address,
        },
      });
      successResponse(res, "Client has been updated", updateClient);
    } catch (error) {
      next(error);
    }
  }

  async deleteClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const clientId = parseInt(req.params.id);
      const deleteClient = await prisma.clients.update({
        where: {
          id: clientId,
        },
        data: {
          is_deleted: true,
        },
      });
      successResponse(res, "Client has been deleted", deleteClient);
    } catch (error) {
      next(error);
    }
  }

  async getPaymentMethod(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const payment_ref = Object.values(PaymentMethod);
      successResponse(res, "Success", payment_ref);
    } catch (error) {
      next(error);
    }
  }
}

export default ClientController;
