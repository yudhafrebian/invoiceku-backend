"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../configs/prisma"));
const response_1 = require("../utils/response");
const client_1 = require("../../prisma/generated/client");
const product_service_1 = require("../services/product.service");
class ProductController {
    async getAllProduct(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { page = "1", limit = "10", search, type, unit, sort, } = req.query;
            const pageNum = parseInt(page);
            const limitNum = parseInt(limit);
            const result = await (0, product_service_1.getAllProductsService)({
                userId,
                page: pageNum,
                limit: limitNum,
                search: search,
                type: type,
                unit: unit,
                sort: sort,
            });
            (0, response_1.successResponse)(res, "Success", result);
        }
        catch (error) {
            next(error);
        }
    }
    async getSingleProduct(req, res, next) {
        try {
            const productId = parseInt(req.params.id);
            if (isNaN(productId)) {
                throw "Invalid product ID";
            }
            const product = await (0, product_service_1.getSingleProductService)(productId);
            if (!product) {
                throw "Product not found";
            }
            (0, response_1.successResponse)(res, "Success", { product });
        }
        catch (error) {
            next(error);
        }
    }
    async createProduct(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { name, price, type, unit, description } = req.body;
            const product = await (0, product_service_1.createProductService)({
                user_id: userId,
                name,
                price,
                type: type,
                unit: unit,
                description,
            });
            (0, response_1.createResponse)(res, "Product & Service has been created", product);
        }
        catch (error) {
            next(error);
        }
    }
    async updateProduct(req, res, next) {
        try {
            const productId = parseInt(req.params.id);
            const { name, price, type, unit, description } = req.body;
            const updatedProduct = await (0, product_service_1.updateProductService)({
                id: productId,
                name,
                price,
                type: type,
                unit: unit,
                description,
            });
            (0, response_1.successResponse)(res, "Product & Service has been updated", updatedProduct);
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
