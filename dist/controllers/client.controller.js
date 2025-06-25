"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../utils/response");
const client_1 = require("../../prisma/generated/client");
const client_service_1 = require("../services/client.service");
class ClientController {
    async getAllClient(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search;
            const payment = req.query.payment;
            const sort = req.query.sort;
            const result = await (0, client_service_1.getAllClientService)({
                userId,
                page,
                limit,
                search,
                payment,
                sort,
            });
            (0, response_1.successResponse)(res, "Success", result);
        }
        catch (error) {
            next(error);
        }
    }
    async getSingleClient(req, res, next) {
        try {
            const clientId = parseInt(req.params.id);
            const client = await (0, client_service_1.getSingleClientService)(clientId);
            (0, response_1.successResponse)(res, "Success", { client });
        }
        catch (error) {
            if (error.message === "Client not found") {
                (0, response_1.errorResponse)(res, error.message, 404);
            }
            else {
                next(error);
            }
        }
    }
    async createClient(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { name, email, phone, address, payment_ref } = req.body;
            const result = await (0, client_service_1.createClientService)({
                userId,
                name,
                email,
                phone,
                address,
                payment_ref,
            });
            (0, response_1.createResponse)(res, "Client has been created", result);
        }
        catch (error) {
            next(error);
        }
    }
    async updateClient(req, res, next) {
        try {
            const clientId = parseInt(req.params.id);
            const { name, email, phone, address } = req.body;
            const result = await (0, client_service_1.updateClientService)({
                clientId,
                name,
                email,
                phone,
                address,
            });
            (0, response_1.successResponse)(res, "Client has been updated", result);
        }
        catch (error) {
            if (error.message === "Client not found") {
                (0, response_1.errorResponse)(res, error.message, 404);
            }
            else {
                next(error);
            }
        }
    }
    async deleteClient(req, res, next) {
        try {
            const clientId = parseInt(req.params.id);
            const result = await (0, client_service_1.deleteClientService)(clientId);
            (0, response_1.successResponse)(res, "Client has been deleted", result);
        }
        catch (error) {
            if (error.message === "Client not found or already deleted") {
                (0, response_1.errorResponse)(res, error.message, 404);
            }
            else {
                next(error);
            }
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
