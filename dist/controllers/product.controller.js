"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../configs/prisma"));
const response_1 = require("../utils/response");
const client_1 = require("../../prisma/generated/client");
class ProductController {
    async getAllProduct(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;
            const search = req.query.search;
            const type = req.query.type;
            const unit = req.query.unit;
            const sort = req.query.sort;
            let orderByClause = { name: "asc" };
            if (sort === "name_asc")
                orderByClause = { name: "asc" };
            else if (sort === "name_desc")
                orderByClause = { name: "desc" };
            else if (sort === "price_asc")
                orderByClause = { price: "asc" };
            else if (sort === "price_desc")
                orderByClause = { price: "desc" };
            else if (sort === "type_asc")
                orderByClause = { type: "asc" };
            else if (sort === "type_desc")
                orderByClause = { type: "desc" };
            else if (sort === "unit_asc")
                orderByClause = { unit: "asc" };
            else if (sort === "unit_desc")
                orderByClause = { unit: "desc" };
            const whereClause = {
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
                prisma_1.default.products_services.findMany({
                    where: whereClause,
                    skip,
                    take: limit,
                    orderBy: orderByClause,
                }),
                prisma_1.default.products_services.count({
                    where: whereClause,
                }),
            ]);
            (0, response_1.successResponse)(res, "Success", {
                products,
                pagination: {
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit),
                    totalItems: total,
                },
            });
        }
        catch (error) {
            next(error);
        }
    }
    async getSingleProduct(req, res, next) {
        try {
            const productId = parseInt(req.params.id);
            const product = await prisma_1.default.products_services.findUnique({
                where: {
                    id: productId,
                },
            });
            (0, response_1.successResponse)(res, "Success", { product });
        }
        catch (error) {
            next(error);
        }
    }
    async createProduct(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const createProduct = await prisma_1.default.products_services.create({
                data: {
                    user_id: userId,
                    ...req.body,
                },
            });
            (0, response_1.createResponse)(res, "Product & Service has been created", createProduct);
        }
        catch (error) {
            next(error);
        }
    }
    async updateProduct(req, res, next) {
        try {
            const productId = parseInt(req.params.id);
            const updateProduct = await prisma_1.default.products_services.update({
                where: {
                    id: productId,
                },
                data: {
                    ...req.body,
                },
            });
            (0, response_1.successResponse)(res, "Product & Service has been updated", updateProduct);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteProduct(req, res, next) {
        try {
            const productId = parseInt(req.params.id);
            const deleteProduct = await prisma_1.default.products_services.update({
                where: {
                    id: productId,
                },
                data: {
                    is_deleted: true,
                },
            });
            (0, response_1.successResponse)(res, "Product & Service has been deleted", deleteProduct);
        }
        catch (error) {
            next(error);
        }
    }
    async getTypeProduct(req, res, next) {
        try {
            const type = Object.values(client_1.Type);
            (0, response_1.successResponse)(res, "Success", type);
        }
        catch (error) {
            next(error);
        }
    }
    async getUnitProduct(req, res, next) {
        try {
            const unit = Object.values(client_1.Unit);
            (0, response_1.successResponse)(res, "Success", unit);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = ProductController;
