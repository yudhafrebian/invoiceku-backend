"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../configs/prisma"));
const response_1 = require("../utils/response");
const client_1 = require("../../prisma/generated/client");
const pdfGenerator_1 = require("../utils/pdf/pdfGenerator");
const pdfGeneratorBuffer_1 = require("../utils/pdf/pdfGeneratorBuffer");
const sendEmail_1 = require("../utils/email/sendEmail");
const createToken_1 = require("../utils/createToken");
const scheduledEmailLogic_1 = require("../utils/scheduledEmailLogic");
const dayjs_1 = __importDefault(require("dayjs"));
const jsonwebtoken_1 = require("jsonwebtoken");
class InvoiceController {
    async getAllInvoice(req, res, next) {
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
            const invoice = await prisma_1.default.invoices.findMany({
                where: whereClause,
                orderBy: orderByClause,
                take: limit,
                skip,
                include: {
                    clients: true,
                },
            });
            const total = await prisma_1.default.invoices.count({
                where: whereClause,
            });
            (0, response_1.successResponse)(res, "Success", {
                invoice,
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
    async createInvoice(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { client_id, start_date, due_date, invoice_number, status, notes, total, is_deleted, invoice_items, payment_method, } = req.body;
            const userPaymentMethod = await prisma_1.default.user_payment_method.count({
                where: {
                    user_id: userId,
                    is_active: true,
                },
            });
            const userPaymentMethodData = await prisma_1.default.user_payment_method.findFirst({
                where: {
                    user_id: userId,
                    is_active: true,
                    payment_method: payment_method,
                },
            });
            if (!userPaymentMethodData) {
                throw `You have not activated the selected payment method: ${payment_method}`;
            }
            if (userPaymentMethod === 0) {
                throw "You need to add payment method atleast one to create invoice";
            }
            const isExist = await prisma_1.default.invoices.findFirst({
                where: {
                    invoice_number,
                    user_id: userId,
                    is_deleted: false,
                },
            });
            if (isExist) {
                throw "Invoice number already exist";
            }
            const createInvoice = await prisma_1.default.invoices.create({
                data: {
                    user_id: userId,
                    client_id,
                    start_date,
                    due_date,
                    invoice_number,
                    status: status,
                    notes,
                    total,
                    payment_method: payment_method,
                    is_deleted,
                },
            });
            const createInvoiceItems = await prisma_1.default.invoice_items.createMany({
                data: invoice_items.map((item) => ({
                    invoice_id: createInvoice.id,
                    product_id: item.product_id,
                    name_snapshot: item.name_snapshot,
                    price_snapshot: item.price_snapshot,
                    quantity: item.quantity,
                    total: item.total,
                })),
            });
            const today = (0, dayjs_1.default)().format("YYYY-MM-DD");
            const startDateFormatted = (0, dayjs_1.default)(start_date).format("YYYY-MM-DD");
            if (today === startDateFormatted) {
                const user = await prisma_1.default.users.findUnique({ where: { id: userId } });
                const userProfile = await prisma_1.default.user_profiles.findFirst({
                    where: { user_id: userId },
                });
                const client = await prisma_1.default.clients.findUnique({
                    where: { id: client_id },
                });
                if (user && userProfile && client) {
                    const token = (0, createToken_1.createToken)({
                        id: client.id,
                        email: client.email,
                    }, "30d");
                    const pdfBuffer = await (0, pdfGeneratorBuffer_1.generateInvoicePDFBuffer)({
                        invoice_number: invoice_number,
                        client: { name: client.name },
                        due_date: due_date,
                        start_date: start_date,
                        invoice_items,
                        total,
                        notes: notes || undefined,
                    });
                    await (0, sendEmail_1.sendInvoiceEmail)(client.email, `Invoice Payment - ${userProfile.first_name} ${userProfile.last_name}`, null, {
                        name: userProfile.first_name,
                        client_name: client.name,
                        invoice_number: invoice_number,
                        token,
                        isRecurring: false,
                    }, pdfBuffer);
                }
            }
            (0, response_1.createResponse)(res, "Invoice has been created", createInvoice);
        }
        catch (error) {
            next(error);
        }
    }
    async updateInvoiceStatus(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const status = req.body.status;
            const invoice = await prisma_1.default.invoices.findFirst({
                where: { invoice_number: invoiceNumber },
                include: {
                    clients: true,
                    users: true,
                    invoice_items: true,
                },
            });
            if (!invoice) {
                throw "Invoice not found";
            }
            const userProfile = await prisma_1.default.user_profiles.findFirst({
                where: {
                    user_id: invoice.users.id,
                },
            });
            if (!userProfile) {
                throw "User profile not found";
            }
            const updateStatus = await prisma_1.default.invoices.update({
                where: {
                    id: invoice.id,
                    invoice_number: invoiceNumber,
                },
                data: {
                    status: status,
                },
            });
            const sendEmailToClient = await (0, sendEmail_1.sendStatusEmail)(invoice.clients.email, "Payment Status Updated", null, {
                name: `${userProfile.first_name} ${userProfile.last_name}`,
                invoice_number: invoice.invoice_number,
                client_name: invoice.clients.name,
                template: "payment-paid-client",
                status: status,
            });
            const sendEmailToUser = await (0, sendEmail_1.sendStatusEmail)(invoice.users.email, "Payment Status Updated", null, {
                name: `${userProfile.first_name} ${userProfile.last_name}`,
                invoice_number: invoice.invoice_number,
                client_name: invoice.clients.name,
                template: "payment-paid-user",
                status: status,
            });
            (0, response_1.successResponse)(res, "Status has been updated successfully", updateStatus);
        }
        catch (error) {
            next(error);
        }
    }
    async scheduledEmailInvoice(req, res, next) {
        try {
            await (0, scheduledEmailLogic_1.scheduledEmailLogic)();
            (0, response_1.successResponse)(res, "Email has been sent successfully");
        }
        catch (error) {
            next(error);
        }
    }
    async previewInvoicePDF(req, res, next) {
        try {
            const { client_id, invoice_date, due_date, invoice_items, notes, start_date, invoice_number, } = req.body;
            const total = invoice_items.reduce((acc, item) => acc + item.quantity * item.price_snapshot, 0);
            const clientData = await prisma_1.default.clients.findUnique({
                where: { id: client_id },
            });
            const invoiceData = {
                invoice_number,
                client_id,
                invoice_date,
                due_date,
                start_date,
                invoice_items,
                notes,
                client: { name: clientData?.name || "Unknown Client" },
                total,
            };
            (0, pdfGenerator_1.generateInvoicePDF)(invoiceData, res, false);
        }
        catch (error) {
            next(error);
        }
    }
    async detailPayment(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const token = req.query.tkn;
            console.log("token", token);
            if (!token)
                throw "Token not found";
            const decoded = (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_KEY);
            console.log("decoded", decoded);
            const invoice = await prisma_1.default.invoices.findFirst({
                where: {
                    invoice_number: invoiceNumber,
                    client_id: decoded.id,
                },
                include: {
                    invoice_items: true,
                    clients: true,
                    users: true,
                },
            });
            if (!invoice) {
                throw "Invoice not found";
            }
            const userPaymentMethod = await prisma_1.default.user_payment_method.findFirst({
                where: {
                    user_id: invoice.user_id,
                    payment_method: invoice.payment_method,
                },
            });
            (0, response_1.successResponse)(res, "Success", {
                invoice,
                userPaymentMethod,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async DetailInvoice(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const invoice = await prisma_1.default.invoices.findFirst({
                where: { invoice_number: invoiceNumber },
                include: {
                    invoice_items: true,
                    clients: true,
                    recurring_invoice: true,
                },
            });
            if (!invoice) {
                throw "Invoice not found";
            }
            (0, pdfGenerator_1.generateInvoicePDF)({
                invoice_number: invoice.invoice_number,
                client: { name: invoice.clients.name },
                due_date: invoice.due_date,
                start_date: invoice.start_date.toISOString(),
                invoice_items: invoice.invoice_items,
                total: invoice.total,
                notes: invoice.notes || undefined,
                recurrence_interval: invoice.recurring_invoice?.recurrence_interval,
                recurrence_type: invoice.recurring_invoice?.recurrence_type,
            }, res, false);
        }
        catch (error) {
            next(error);
        }
    }
    async downloadPdf(req, res, next) {
        try {
            const invoiceId = parseInt(req.params.id);
            const invoice = await prisma_1.default.invoices.findUnique({
                where: { id: invoiceId },
                include: {
                    invoice_items: true,
                    clients: true,
                    recurring_invoice: true,
                },
            });
            if (!invoice) {
                throw "Invoice not found";
            }
            (0, pdfGenerator_1.generateInvoicePDF)({
                invoice_number: invoice.invoice_number,
                client: { name: invoice.clients.name },
                due_date: invoice.due_date,
                start_date: invoice.start_date.toISOString(),
                invoice_items: invoice.invoice_items,
                total: invoice.total,
                notes: invoice.notes || undefined,
                recurrence_interval: invoice.recurring_invoice?.recurrence_interval,
                recurrence_type: invoice.recurring_invoice?.recurrence_type,
            }, res, true);
        }
        catch (error) {
            next(error);
        }
    }
    async sendInvoiceEmail(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const userId = res.locals.data.id;
            const invoice = await prisma_1.default.invoices.findFirst({
                where: {
                    invoice_number: invoiceNumber,
                    user_id: userId,
                },
                include: {
                    invoice_items: true,
                    clients: true,
                    recurring_invoice: true,
                },
            });
            if (!invoice) {
                throw "Invoice not found";
            }
            const user = await prisma_1.default.users.findUnique({
                where: { id: invoice.user_id },
            });
            if (!user) {
                throw "User not found";
            }
            const userProfile = await prisma_1.default.user_profiles.findFirst({
                where: { user_id: user.id },
            });
            if (!userProfile) {
                throw "User profile not found";
            }
            const token = (0, createToken_1.createToken)({
                id: invoice.client_id,
                email: invoice.clients.email,
                invoice_number: invoice.invoice_number,
            }, "30d");
            const pdfBuffer = await (0, pdfGeneratorBuffer_1.generateInvoicePDFBuffer)({
                invoice_number: invoice.invoice_number,
                client: { name: invoice.clients.name },
                due_date: invoice.due_date,
                start_date: invoice.start_date,
                invoice_items: invoice.invoice_items,
                total: invoice.total,
                notes: invoice.notes || undefined,
                recurrence_interval: invoice.recurring_invoice?.recurrence_interval,
                recurrence_type: invoice.recurring_invoice?.recurrence_type,
            });
            await (0, sendEmail_1.sendInvoiceEmail)(invoice.clients.email, `Invoice Payment - ${userProfile.first_name} ${userProfile.last_name}`, null, {
                name: userProfile.first_name,
                client_name: invoice.clients.name,
                invoice_number: invoice.invoice_number,
                token,
                isRecurring: invoice.recurrence_invoice_id !== null ? true : false,
            }, pdfBuffer);
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
}
exports.default = InvoiceController;
