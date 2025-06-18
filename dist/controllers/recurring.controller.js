"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../utils/response");
const prisma_1 = __importDefault(require("../configs/prisma"));
const client_1 = require("../../prisma/generated/client");
const pdfGenerator_1 = require("../utils/pdf/pdfGenerator");
class RecurringController {
    async createRecurringInvoice(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { client_id, invoice_number, start_date, notes, recurrence_type, recurrence_interval, duration, due_in_days, total, payment_method, recurring_invoice_items, } = req.body;
            const startDate = new Date(start_date);
            const dueDate = new Date(startDate);
            dueDate.setDate(dueDate.getDate() + due_in_days);
            const nextRun = new Date(startDate);
            const created = await prisma_1.default.recurring_invoice.create({
                data: {
                    user_id: userId,
                    client_id,
                    invoice_number,
                    start_date: startDate,
                    due_date: dueDate,
                    notes,
                    recurrence_type,
                    recurrence_interval,
                    duration,
                    payment_method: payment_method,
                    due_in_days,
                    total,
                    next_run: nextRun,
                },
            });
            const recurring_invoice_item = await prisma_1.default.recurring_invoice_item.createMany({
                data: recurring_invoice_items.map((item) => ({
                    recurring_invoice_id: created.id,
                    product_id: item.product_id,
                    name_snapshot: item.name_snapshot,
                    price_snapshot: item.price_snapshot,
                    quantity: item.quantity,
                    total: item.total,
                })),
            });
            (0, response_1.createResponse)(res, "Recurring invoice created successfully", created);
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
            const skip = (page - 1) * limit;
            const search = req.query.search;
            const payment = req.query.payment;
            const status = req.query.status;
            const sort = req.query.sort;
            let orderByClause = { created_at: "asc" };
            if (sort === "invoice_number_asc")
                orderByClause = { invoice_number: "asc" };
            else if (sort === "invoice_number_desc")
                orderByClause = { invoice_number: "desc" };
            else if (sort === "client_name_asc")
                orderByClause = { clients: { name: "asc" } };
            else if (sort === "client_name_desc")
                orderByClause = { clients: { name: "desc" } };
            else if (sort === "start_date_asc")
                orderByClause = { start_date: "asc" };
            else if (sort === "start_date_desc")
                orderByClause = { start_date: "desc" };
            else if (sort === "due_date_asc")
                orderByClause = { due_date: "asc" };
            else if (sort === "due_date_desc")
                orderByClause = { due_date: "desc" };
            else if (sort === "total_asc")
                orderByClause = { total: "asc" };
            else if (sort === "total_desc")
                orderByClause = { total: "desc" };
            const whereClause = {
                user_id: userId,
                is_deleted: false,
            };
            if (search) {
                whereClause.OR = [
                    { invoice_number: { contains: search, mode: "insensitive" } },
                    { clients: { name: { contains: search, mode: "insensitive" } } },
                ];
            }
            if (payment) {
                whereClause.payment_method = payment;
            }
            if (status) {
                whereClause.status = status;
            }
            const recurringInvoice = await prisma_1.default.recurring_invoice.findMany({
                where: whereClause,
                orderBy: orderByClause,
                take: limit,
                skip,
                include: {
                    users: true,
                    clients: true,
                    recurring_invoice_item: true,
                },
            });
            const total = await prisma_1.default.recurring_invoice.count({
                where: whereClause,
            });
            (0, response_1.successResponse)(res, "Success", {
                recurringInvoice,
                pagination: {
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit),
                    totalItems: total,
                },
            }, 200);
        }
        catch (error) {
            next(error);
        }
    }
    async previewRecurringInvoicePDF(req, res, next) {
        try {
            const { client_id, invoice_number, start_date, due_date, recurring_invoice_items, notes, recurrence_type, recurrence_interval, } = req.body;
            console.log("Received body for previewRecurringInvoicePDF:", req.body);
            const total = recurring_invoice_items.reduce((acc, item) => acc + item.quantity * item.price_snapshot, 0);
            const clientData = await prisma_1.default.clients.findUnique({
                where: { id: client_id },
            });
            const invoiceData = {
                invoice_number,
                client: { name: clientData?.name || "Unknown Client" },
                start_date,
                due_date,
                invoice_items: recurring_invoice_items,
                total,
                notes,
                recurrence_type,
                recurrence_interval,
            };
            (0, pdfGenerator_1.generateInvoicePDF)(invoiceData, res, false);
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
