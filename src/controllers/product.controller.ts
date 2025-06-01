import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";
import { Type, Unit } from "../../prisma/generated/client";

class ProductController {
  async getAllProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const products = await prisma.products_services.findMany({
        where: {
          user_id: userId,
          is_deleted: false,
        },
      });

      successResponse(res, "Success", products);
    } catch (error) {
      next(error);
    }
  }
  async getSingleProduct(req: Request, res: Response, next: NextFunction) {}

  async createProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const createProduct = await prisma.products_services.create({
        data: {
          user_id: userId,
          ...req.body,
        },
      });

      createResponse(res, "Product & Service has been created", createProduct);
    } catch (error) {
      next(error);
    }
  }
  async updateProduct(req: Request, res: Response, next: NextFunction) {}
  async deleteProduct(req: Request, res: Response, next: NextFunction) {}

  async getTypeProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const type = Object.values(Type);
      successResponse(res, "Success", type);
    } catch (error) {
      next(error);
    }
  }

  async getUnitProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
        const unit = Object.values(Unit);
        successResponse(res, "Success", unit);
    } catch (error) {
        next(error);
    }
  }
}

export default ProductController;
