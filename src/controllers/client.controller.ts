import { Response, Request, NextFunction } from "express";
import { createResponse, errorResponse, successResponse } from "../utils/response";
import { PaymentMethod } from "../../prisma/generated/client";
import { createClientService, deleteClientService, getAllClientService, getSingleClientService, updateClientService } from "../services/client.service";

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
      const search = req.query.search as string;
      const payment = req.query.payment as string;
      const sort = req.query.sort as string;
  
      const result = await getAllClientService({
        userId,
        page,
        limit,
        search,
        payment,
        sort,
      });
  
      successResponse(res, "Success", result);
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
  
      const client = await getSingleClientService(clientId);
  
      successResponse(res, "Success", { client });
    } catch (error: any) {
      if (error.message === "Client not found") {
        errorResponse(res, error.message, 404);
      } else {
        next(error);
      }
    }
  }

  async createClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const { name, email, phone, address, payment_ref } = req.body;
  
      const result = await createClientService({
        userId,
        name,
        email,
        phone,
        address,
        payment_ref,
      });
  
      createResponse(res, "Client has been created", result);
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
      const clientId = parseInt(req.params.id);
      const { name, email, phone, address } = req.body;
  
      const result = await updateClientService({
        clientId,
        name,
        email,
        phone,
        address,
      });
  
      successResponse(res, "Client has been updated", result);
    } catch (error: any) {
      if (error.message === "Client not found") {
        errorResponse(res, error.message, 404);
      } else {
        next(error);
      }
    }
  }

  async deleteClient(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const clientId = parseInt(req.params.id);
  
      const result = await deleteClientService(clientId);
  
      successResponse(res, "Client has been deleted", result);
    } catch (error: any) {
      if (error.message === "Client not found or already deleted") {
        errorResponse(res, error.message, 404);
      } else {
        next(error);
      }
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
