"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../utils/response");
const client_1 = require("../../prisma/generated/client");
const recurring_service_1 = require("../services/recurring.service");
class RecurringController {
    async createRecurringInvoice(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const body = req.body;
            const result = await (0, recurring_service_1.createRecurringInvoiceService)({
                userId,
                ...body,
            });
            (0, response_1.createResponse)(res, "Recurring invoice created successfully", result);
        }
        catch (error) {
            next(error);
        }
    }
    async softDeleteRecurringInvoice(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const invoiceNumber = req.params.invoice_number;
            const result = await (0, recurring_service_1.softDeleteRecurringInvoiceService)({
                userId,
                invoiceNumber,
            });
            (0, response_1.successResponse)(res, "Invoice has been deleted", { deletedInvoice: result });
        }
        catch (error) {
            next(error);
        }
    }
    async getAllRecurringInvoice(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search;
            const payment = req.query.payment;
            const type = req.query.type;
            const status = req.query.status;
            const sort = req.query.sort;
            const result = await (0, recurring_service_1.getAllRecurringInvoiceService)({
                userId,
                page,
                limit,
                search,
                payment,
                type,
                status,
                sort,
            });
            (0, response_1.successResponse)(res, "Success", result);
        }
        catch (error) {
            next(error);
        }
    }
    async getRecurringInvoiceChildren(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const recurringInvoiceNumber = req.params.recurring_invoice_number;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search;
            const payment = req.query.payment;
            const status = req.query.status;
            const sort = req.query.sort;
            const result = await (0, recurring_service_1.getRecurringInvoiceChildrenService)({
                userId,
                recurringInvoiceNumber,
                page,
                limit,
                search,
                payment,
                status,
                sort,
            });
            (0, response_1.successResponse)(res, "Success", result, 200);
        }
        catch (error) {
            next(error);
        }
    }
    async previewRecurringInvoicePDF(req, res, next) {
        try {
            await (0, recurring_service_1.previewRecurringInvoicePDFService)(req.body, res);
        }
        catch (error) {
            next(error);
        }
    }
    async DetailRecurringInvoice(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            await (0, recurring_service_1.getRecurringInvoiceDetailService)(invoiceNumber, res);
        }
        catch (error) {
            next(error);
        }
    }
    async sendRecurringInvoiceEmail(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            await (0, recurring_service_1.sendRecurringInvoiceEmailService)(invoiceNumber);
            (0, response_1.successResponse)(res, "Email sent successfully");
        }
        catch (error) {
            next(error);
        }
    }
    async detailPayment(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const result = await (0, recurring_service_1.getRecurringInvoiceDetailPayment)(invoiceNumber);
            (0, response_1.successResponse)(res, "Success", result);
        }
        catch (error) {
            next(error);
        }
    }
    async downloadPdf(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            await (0, recurring_service_1.downloadRecurringInvoicePdf)(invoiceNumber, res);
        }
        catch (error) {
            next(error);
        }
    }
    async recurringType(req, res, next) {
        try {
            const recurringType = Object.values(client_1.Recurrence);
            (0, response_1.successResponse)(res, "Success", recurringType);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = RecurringController;
