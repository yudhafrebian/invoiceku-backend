"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductService = exports.createProductService = exports.getSingleProductService = exports.getAllProductsService = void 0;
const prisma_1 = __importDefault(require("../configs/prisma"));
const getAllProductsService = async ({ userId, page, limit, search, type, unit, sort, }) => {
    const skip = (page - 1) * limit;
    let orderByClause = { name: "asc" };
    switch (sort) {
        case "name_asc":
            orderByClause = { name: "asc" };
            break;
        case "name_desc":
            orderByClause = { name: "desc" };
            break;
        case "price_asc":
            orderByClause = { price: "asc" };
            break;
        case "price_desc":
            orderByClause = { price: "desc" };
            break;
        case "type_asc":
            orderByClause = { type: "asc" };
            break;
        case "type_desc":
            orderByClause = { type: "desc" };
            break;
        case "unit_asc":
            orderByClause = { unit: "asc" };
            break;
        case "unit_desc":
            orderByClause = { unit: "desc" };
            break;
    }
    const whereClause = {
        user_id: userId,
        is_deleted: false,
    };
    if (search) {
        whereClause.OR = [
            {
                name: { contains: search, mode: "insensitive" },
            },
            {
                description: { contains: search, mode: "insensitive" },
            },
        ];
    }
    if (type)
        whereClause.type = type;
    if (unit)
        whereClause.unit = unit;
    const [products, total] = await Promise.all([
        prisma_1.default.products_services.findMany({
            where: whereClause,
            skip,
            take: limit,
            orderBy: orderByClause,
        }),
        prisma_1.default.products_services.count({ where: whereClause }),
    ]);
    return {
        products,
        pagination: {
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            totalItems: total,
        },
    };
};
exports.getAllProductsService = getAllProductsService;
const getSingleProductService = async (id) => {
    const product = await prisma_1.default.products_services.findUnique({
        where: {
            id,
        },
    });
    return product;
};
exports.getSingleProductService = getSingleProductService;
const createProductService = async (input) => {
    const newProduct = await prisma_1.default.products_services.create({
        data: input,
    });
    return newProduct;
};
exports.createProductService = createProductService;
const updateProductService = async (input) => {
    const updatedProduct = await prisma_1.default.products_services.update({
        where: { id: input.id },
        data: {
            name: input.name,
            price: input.price,
            type: input.type,
            unit: input.unit,
            description: input.description,
        },
    });
    return updatedProduct;
};
exports.updateProductService = updateProductService;
