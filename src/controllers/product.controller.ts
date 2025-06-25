import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";
import { Type, Unit } from "../../prisma/generated/client";
import { createProductService, getAllProductsService, getSingleProductService, updateProductService } from "../services/product.service";

class ProductController {
  async getAllProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const {
        page = "1",
        limit = "10",
        search,
        type,
        unit,
        sort,
      } = req.query;
  
      const pageNum = parseInt(page as string);
      const limitNum = parseInt(limit as string);
  
      const result = await getAllProductsService({
        userId,
        page: pageNum,
        limit: limitNum,
        search: search as string,
        type: type as string,
        unit: unit as string,
        sort: sort as string,
      });
  
      successResponse(res, "Success", result);
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
      if (isNaN(productId)) {
        throw "Invalid product ID";
      }
  
      const product = await getSingleProductService(productId);
      if (!product) {
        throw "Product not found";
      }
  
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
      const { name, price, type, unit, description } = req.body;
  
      const product = await createProductService({
        user_id: userId,
        name,
        price,
        type: type as Type,
        unit: unit as Unit,
        description,
      });
  
      createResponse(res, "Product & Service has been created", product);
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
      const { name, price, type, unit, description } = req.body;
  
      const updatedProduct = await updateProductService({
        id: productId,
        name,
        price,
        type: type as Type,
        unit: unit as Unit,
        description,
      });
  
      successResponse(res, "Product & Service has been updated", updatedProduct);
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
