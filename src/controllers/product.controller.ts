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
      const sort = req.query.sort as string;

      let orderByClause: any = { name: "asc" };

      if (sort === "name_asc") orderByClause = { name: "asc" };
      else if (sort === "name_desc") orderByClause = { name: "desc" };
      else if (sort === "price_asc") orderByClause = { price: "asc" };
      else if (sort === "price_desc") orderByClause = { price: "desc" };
      else if (sort === "type_asc") orderByClause = { type: "asc" };
      else if (sort === "type_desc") orderByClause = { type: "desc" };
      else if (sort === "unit_asc") orderByClause = { unit: "asc" };
      else if (sort === "unit_desc") orderByClause = { unit: "desc" };

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
          orderBy: orderByClause,
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
