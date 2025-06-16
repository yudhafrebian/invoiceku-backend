"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../configs/prisma"));
const response_1 = require("../utils/response");
const client_1 = require("../../prisma/generated/client");
class ClientController {
    async getAllClient(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skip = (page - 1) * limit;
            const search = req.query.search;
            const payment = req.query.payment;
            const sort = req.query.sort;
            let orderByClause = { name: "asc" };
            if (sort === "name_asc")
                orderByClause = { name: "asc" };
            else if (sort === "name_desc")
                orderByClause = { name: "desc" };
            else if (sort === "email_asc")
                orderByClause = { email: "asc" };
            else if (sort === "email_desc")
                orderByClause = { email: "desc" };
            else if (sort === "phone_asc")
                orderByClause = { phone: "asc" };
            else if (sort === "phone_desc")
                orderByClause = { phone: "desc" };
            else if (sort === "address_asc")
                orderByClause = { address: "asc" };
            else if (sort === "address_desc")
                orderByClause = { address: "desc" };
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
                prisma_1.default.clients.findMany({
                    where: whereClause,
                    skip,
                    take: limit,
                    orderBy: orderByClause,
                }),
                prisma_1.default.clients.count({
                    where: whereClause,
                }),
            ]);
            (0, response_1.successResponse)(res, "Success", {
                clients,
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
    async getSingleClient(req, res, next) {
        try {
            const clientId = parseInt(req.params.id);
            const client = await prisma_1.default.clients.findUnique({
                where: {
                    id: clientId,
                },
            });
            (0, response_1.successResponse)(res, "Success", { client });
        }
        catch (error) {
            next(error);
        }
    }
    async createClient(req, res, next) {
        try {
            const rawPhone = String(req.body.phone);
            const normalizedPhone = rawPhone.startsWith("62")
                ? rawPhone
                : `62${rawPhone}`;
            const userId = res.locals.data.id;
            const createClient = await prisma_1.default.clients.create({
                data: {
                    user_id: userId,
                    name: req.body.name,
                    email: req.body.email,
                    phone: normalizedPhone,
                    address: req.body.address,
                    payment_ref: req.body.payment_ref,
                },
            });
            (0, response_1.createResponse)(res, "Client has been created", createClient);
        }
        catch (error) {
            next(error);
        }
    }
    async updateClient(req, res, next) {
        try {
            const rawPhone = String(req.body.phone);
            const normalizedPhone = rawPhone.startsWith("62")
                ? rawPhone
                : `62${rawPhone}`;
            const clientId = parseInt(req.params.id);
            const updateClient = await prisma_1.default.clients.update({
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
            (0, response_1.successResponse)(res, "Client has been updated", updateClient);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteClient(req, res, next) {
        try {
            const clientId = parseInt(req.params.id);
            const deleteClient = await prisma_1.default.clients.update({
                where: {
                    id: clientId,
                },
                data: {
                    is_deleted: true,
                },
            });
            (0, response_1.successResponse)(res, "Client has been deleted", deleteClient);
        }
        catch (error) {
            next(error);
        }
    }
    async getPaymentMethod(req, res, next) {
        try {
            const payment_ref = Object.values(client_1.PaymentMethod);
            (0, response_1.successResponse)(res, "Success", payment_ref);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = ClientController;
