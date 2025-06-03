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
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const skip = (page - 1) * limit;

      const search = req.query.search as string;
      const type = req.query.type as string;
      const unit = req.query.unit as string;

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
            description: {
              contains: search,
              mode: "insensitive",
            },
          },
        ];
      }
      
      
      if (type) {
        whereClause.type = type;
      }
      if (unit) {
        whereClause.unit = unit;
      }

      const [products, total] = await Promise.all([
        prisma.products_services.findMany({
          where: whereClause,
          skip,
          take: limit,
          orderBy: {
            name: "asc",
          },
        }),
        prisma.products_services.count({
          where: whereClause,
        }),
      ]);

      successResponse(res, "Success", {
        products,
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
  async getSingleProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const productId = parseInt(req.params.id);
      const product = await prisma.products_services.findUnique({
        where: {
          id: productId,
        },
      });

      successResponse(res, "Success", { product });
    } catch (error) {
      next(error);
    }
  }

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
  async updateProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const productId = parseInt(req.params.id);
      const updateProduct = await prisma.products_services.update({
        where: {
          id: productId,
        },
        data: {
          ...req.body,
        },
      });

      successResponse(res, "Product & Service has been updated", updateProduct);
    } catch (error) {
      next(error);
    }
  }
  async deleteProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const productId = parseInt(req.params.id);
      const deleteProduct = await prisma.products_services.update({
        where: {
          id: productId,
        },
        data: {
          is_deleted: true,
        },
      });

      successResponse(res, "Product & Service has been deleted", deleteProduct);
    } catch (error) {
      next(error);
    }
  }

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
