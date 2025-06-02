import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";

class ClientController {
  async getAllClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const clients = await prisma.clients.findMany({
        where: {
          user_id: userId,
          is_deleted: false,
        },
      });
      successResponse(res, "Success", clients);
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
        const normalizedPhone = rawPhone.startsWith("62") ? rawPhone : `62${rawPhone}`
      const userId = res.locals.data.id;
      const createClient = await prisma.clients.create({
        data: {
          user_id: userId,
          name: req.body.name,
          email: req.body.email,
          phone: normalizedPhone,
          address: req.body.address,
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
        const normalizedPhone = rawPhone.startsWith("62") ? rawPhone : `62${rawPhone}`
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
}

export default ClientController;
