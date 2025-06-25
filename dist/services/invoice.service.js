"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendInvoiceEmailService = exports.downloadInvoicePDFService = exports.getInvoiceDetailService = exports.getInvoiceDetailForPaymentService = exports.previewInvoicePDFService = exports.softDeleteInvoiceService = exports.updateInvoiceStatusService = exports.createInvoiceService = exports.getAllInvoiceService = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const prisma_1 = __importDefault(require("../configs/prisma"));
const createToken_1 = require("../utils/createToken");
const sendEmail_1 = require("../utils/email/sendEmail");
const pdfGenerator_1 = require("../utils/pdf/pdfGenerator");
const jsonwebtoken_1 = require("jsonwebtoken");
const getAllInvoiceService = async ({ userId, page, limit, search, payment, status, sort, }) => {
    const skip = (page - 1) * limit;
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
    const [invoice, total] = await Promise.all([
        prisma_1.default.invoices.findMany({
            where: whereClause,
            orderBy: orderByClause,
            take: limit,
            skip,
            include: {
                clients: true,
            },
        }),
        prisma_1.default.invoices.count({
            where: whereClause,
        }),
    ]);
    return {
        invoice,
        pagination: {
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            totalItems: total,
        },
    };
};
exports.getAllInvoiceService = getAllInvoiceService;
const createInvoiceService = async ({ userId, client_id, start_date, due_date, invoice_number, status, notes, total, payment_method, template, invoice_items, }) => {
    const userPaymentMethodCount = await prisma_1.default.user_payment_method.count({
        where: {
            user_id: userId,
            is_active: true,
        },
    });
    if (userPaymentMethodCount === 0) {
        throw "You need to add at least one active payment method to create invoice";
    }
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
    const createdInvoice = await prisma_1.default.invoices.create({
        data: {
            user_id: userId,
            client_id,
            start_date: new Date(start_date),
            due_date: new Date(due_date),
            invoice_number,
            status: status,
            notes,
            total,
            payment_method: payment_method,
            is_deleted: false,
            template: template,
        },
    });
    await prisma_1.default.invoice_items.createMany({
        data: invoice_items.map((item) => ({
            invoice_id: createdInvoice.id,
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
        if (!user || user.is_deleted)
            throw "User not found";
        const userProfile = await prisma_1.default.user_profiles.findFirst({
            where: { user_id: userId },
        });
        const client = await prisma_1.default.clients.findUnique({
            where: { id: client_id },
        });
        if (userProfile && client) {
            const token = (0, createToken_1.createToken)({ id: client.id, email: client.email }, "30d");
            const pdfBuffer = await (0, pdfGenerator_1.generateInvoicePDF)({
                invoice_number,
                client: { name: client.name },
                due_date,
                start_date,
                invoice_items,
                total,
                notes: notes || undefined,
                template,
            });
            await (0, sendEmail_1.sendInvoiceEmail)(client.email, `Invoice Payment - ${userProfile.first_name} ${userProfile.last_name}`, null, {
                name: userProfile.first_name,
                client_name: client.name,
                invoice_number,
                token,
                isRecurring: false,
            }, pdfBuffer);
        }
    }
    return createdInvoice;
};
exports.createInvoiceService = createInvoiceService;
const updateInvoiceStatusService = async (invoiceNumber, status) => {
    const invoice = await prisma_1.default.invoices.findFirst({
        where: { invoice_number: invoiceNumber },
        include: {
            clients: true,
            users: true,
            invoice_items: true,
        },
    });
    if (!invoice) {
        throw new Error("Invoice not found");
    }
    const userProfile = await prisma_1.default.user_profiles.findFirst({
        where: {
            user_id: invoice.users.id,
        },
    });
    if (!userProfile) {
        throw new Error("User profile not found");
    }
    const updatedInvoice = await prisma_1.default.invoices.update({
        where: {
            id: invoice.id,
            invoice_number: invoiceNumber,
        },
        data: {
            status: status,
        },
    });
    await (0, sendEmail_1.sendStatusEmail)(invoice.clients.email, "Payment Status Updated", null, {
        name: `${userProfile.first_name} ${userProfile.last_name}`,
        invoice_number: invoice.invoice_number,
        client_name: invoice.clients.name,
        template: "payment-paid-client",
        status,
    });
    await (0, sendEmail_1.sendStatusEmail)(invoice.users.email, "Payment Status Updated", null, {
        name: `${userProfile.first_name} ${userProfile.last_name}`,
        invoice_number: invoice.invoice_number,
        client_name: invoice.clients.name,
        template: "payment-paid-user",
        status,
    });
    return updatedInvoice;
};
exports.updateInvoiceStatusService = updateInvoiceStatusService;
const softDeleteInvoiceService = async (userId, invoiceNumber) => {
    const invoice = await prisma_1.default.invoices.findFirst({
        where: {
            user_id: userId,
            invoice_number: invoiceNumber,
            is_deleted: false,
        },
    });
    if (!invoice) {
        throw new Error("Invoice not found");
    }
    const deletedInvoice = await prisma_1.default.invoices.update({
        where: { id: invoice.id },
        data: { is_deleted: true },
    });
    return deletedInvoice;
};
exports.softDeleteInvoiceService = softDeleteInvoiceService;
const previewInvoicePDFService = async (data, res) => {
    const { client_id, invoice_number, invoice_date, due_date, start_date, invoice_items, notes, template, } = data;
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
        template,
        client: { name: clientData?.name || "Unknown Client" },
        total,
    };
    await (0, pdfGenerator_1.generateInvoicePDF)(invoiceData, res, false);
};
exports.previewInvoicePDFService = previewInvoicePDFService;
const getInvoiceDetailForPaymentService = async (invoiceNumber, token) => {
    if (!token) {
        throw new Error("Token not found");
    }
    const decoded = (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_KEY);
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
        throw new Error("Invoice not found");
    }
    const userPaymentMethod = await prisma_1.default.user_payment_method.findFirst({
        where: {
            user_id: invoice.user_id,
            payment_method: invoice.payment_method,
        },
    });
    return { invoice, userPaymentMethod };
};
exports.getInvoiceDetailForPaymentService = getInvoiceDetailForPaymentService;
const getInvoiceDetailService = async (invoiceNumber, res) => {
    const invoice = await prisma_1.default.invoices.findFirst({
        where: { invoice_number: invoiceNumber },
        include: {
            invoice_items: true,
            clients: true,
            recurring_invoice: true,
        },
    });
    if (!invoice) {
        throw new Error("Invoice not found");
    }
    const invoiceData = {
        invoice_number: invoice.invoice_number,
        client: { name: invoice.clients.name },
        due_date: invoice.due_date,
        start_date: invoice.start_date,
        invoice_items: invoice.invoice_items,
        total: invoice.total,
        notes: invoice.notes || undefined,
        recurrence_interval: invoice.recurring_invoice?.recurrence_interval,
        recurrence_type: invoice.recurring_invoice?.recurrence_type,
        template: invoice.template,
    };
    await (0, pdfGenerator_1.generateInvoicePDF)(invoiceData, res, false);
};
exports.getInvoiceDetailService = getInvoiceDetailService;
const downloadInvoicePDFService = async (invoiceId, res) => {
    const invoice = await prisma_1.default.invoices.findUnique({
        where: { id: invoiceId },
        include: {
            invoice_items: true,
            clients: true,
            recurring_invoice: true,
        },
    });
    if (!invoice) {
        throw new Error("Invoice not found");
    }
    const invoiceData = {
        invoice_number: invoice.invoice_number,
        client: { name: invoice.clients.name },
        due_date: invoice.due_date,
        start_date: invoice.start_date,
        invoice_items: invoice.invoice_items,
        total: invoice.total,
        notes: invoice.notes || undefined,
        recurrence_interval: invoice.recurring_invoice?.recurrence_interval,
        recurrence_type: invoice.recurring_invoice?.recurrence_type,
        template: invoice.template,
    };
    await (0, pdfGenerator_1.generateInvoicePDF)(invoiceData, res, true);
};
exports.downloadInvoicePDFService = downloadInvoicePDFService;
const sendInvoiceEmailService = async (invoiceNumber, userId) => {
    const invoice = await prisma_1.default.invoices.findFirst({
        where: {
            invoice_number: invoiceNumber,
            user_id: userId,
            is_deleted: false,
        },
        include: {
            invoice_items: true,
            clients: true,
            recurring_invoice: true,
        },
    });
    if (!invoice)
        throw new Error("Invoice not found");
    const user = await prisma_1.default.users.findFirst({
        where: { id: invoice.user_id, is_deleted: false },
    });
    if (!user)
        throw new Error("User not found");
    const userProfile = await prisma_1.default.user_profiles.findFirst({
        where: { user_id: user.id },
    });
    if (!userProfile)
        throw new Error("User profile not found");
    const token = (0, createToken_1.createToken)({
        id: invoice.client_id,
        email: invoice.clients.email,
        invoice_number: invoice.invoice_number,
    }, "30d");
    const pdfBuffer = await (0, pdfGenerator_1.generateInvoicePDF)({
        invoice_number: invoice.invoice_number,
        client: { name: invoice.clients.name },
        due_date: invoice.due_date,
        start_date: invoice.start_date,
        invoice_items: invoice.invoice_items,
        total: invoice.total,
        notes: invoice.notes || undefined,
        recurrence_interval: invoice.recurring_invoice?.recurrence_interval,
        recurrence_type: invoice.recurring_invoice?.recurrence_type,
        template: invoice.template,
    });
    await (0, sendEmail_1.sendInvoiceEmail)(invoice.clients.email, `Invoice Payment - ${userProfile.first_name} ${userProfile.last_name}`, null, {
        name: userProfile.first_name,
        client_name: invoice.clients.name,
        invoice_number: invoice.invoice_number,
        token,
        isRecurring: invoice.recurrence_invoice_id !== null,
    }, pdfBuffer);
};
exports.sendInvoiceEmailService = sendInvoiceEmailService;
