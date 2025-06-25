"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../utils/response");
const client_1 = require("../../prisma/generated/client");
const invoice_service_1 = require("../services/invoice.service");
class InvoiceController {
    async getAllInvoice(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search;
            const payment = req.query.payment;
            const status = req.query.status;
            const sort = req.query.sort;
            const result = await (0, invoice_service_1.getAllInvoiceService)({
                userId,
                page,
                limit,
                search,
                payment,
                status,
                sort,
            });
            (0, response_1.successResponse)(res, "Success", result);
        }
        catch (error) {
            next(error);
        }
    }
    async createInvoice(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { client_id, start_date, due_date, invoice_number, status, notes, total, payment_method, template, invoice_items, } = req.body;
            const result = await (0, invoice_service_1.createInvoiceService)({
                userId,
                client_id,
                start_date,
                due_date,
                invoice_number,
                status,
                notes,
                total,
                payment_method,
                template,
                invoice_items,
            });
            (0, response_1.createResponse)(res, "Invoice has been created", result);
        }
        catch (error) {
            if (typeof error === "string") {
                (0, response_1.errorResponse)(res, error, 400);
            }
            else {
                next(error);
            }
        }
    }
    async updateInvoiceStatus(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const { status } = req.body;
            const result = await (0, invoice_service_1.updateInvoiceStatusService)(invoiceNumber, status);
            (0, response_1.successResponse)(res, "Status has been updated successfully", result);
        }
        catch (error) {
            if (typeof error.message === "string") {
                (0, response_1.errorResponse)(res, error.message, 404);
            }
            else {
                next(error);
            }
        }
    }
    async softDeleteInvoice(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const invoiceNumber = req.params.invoice_number;
            const result = await (0, invoice_service_1.softDeleteInvoiceService)(userId, invoiceNumber);
            (0, response_1.successResponse)(res, "Invoice has been deleted", {
                deletedInvoice: result,
            });
        }
        catch (error) {
            if (typeof error.message === "string") {
                (0, response_1.errorResponse)(res, error.message, 404);
            }
            else {
                next(error);
            }
        }
    }
    async previewInvoicePDF(req, res, next) {
        try {
            await (0, invoice_service_1.previewInvoicePDFService)(req.body, res);
        }
        catch (error) {
            next(error);
        }
    }
    async detailPayment(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const token = req.query.tkn;
            const result = await (0, invoice_service_1.getInvoiceDetailForPaymentService)(invoiceNumber, token);
            (0, response_1.successResponse)(res, "Success", result);
        }
        catch (error) {
            if (typeof error.message === "string") {
                (0, response_1.errorResponse)(res, error.message, 400);
            }
            else {
                next(error);
            }
        }
    }
    async DetailInvoice(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            await (0, invoice_service_1.getInvoiceDetailService)(invoiceNumber, res);
        }
        catch (error) {
            next(error);
        }
    }
    async downloadPdf(req, res, next) {
        try {
            const invoiceId = parseInt(req.params.id);
            await (0, invoice_service_1.downloadInvoicePDFService)(invoiceId, res);
        }
        catch (error) {
            next(error);
        }
    }
    async sendInvoiceEmail(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const userId = res.locals.data.id;
            await (0, invoice_service_1.sendInvoiceEmailService)(invoiceNumber, userId);
            (0, response_1.successResponse)(res, "Email sent successfully");
        }
        catch (error) {
            next(error);
        }
    }
    async getInvoiceStatus(req, res, next) {
        try {
            const status = Object.values(client_1.Status);
            (0, response_1.successResponse)(res, "Success", status);
        }
        catch (error) {
            next(error);
        }
    }
    async getTemplates(req, res, next) {
        try {
            const templates = Object.values(client_1.TemplateStyle);
            (0, response_1.successResponse)(res, "Success", templates);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = InvoiceController;
