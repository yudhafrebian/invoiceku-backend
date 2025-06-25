"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadRecurringInvoicePdf = exports.getRecurringInvoiceDetailPayment = exports.sendRecurringInvoiceEmailService = exports.getRecurringInvoiceDetailService = exports.previewRecurringInvoicePDFService = exports.getRecurringInvoiceChildrenService = exports.getAllRecurringInvoiceService = exports.softDeleteRecurringInvoiceService = exports.createRecurringInvoiceService = void 0;
const prisma_1 = __importDefault(require("../configs/prisma"));
const pdfGenerator_1 = require("../utils/pdf/pdfGenerator");
const createToken_1 = require("../utils/createToken");
const sendEmail_1 = require("../utils/email/sendEmail");
const createRecurringInvoiceService = async (input) => {
    const { userId, client_id, invoice_number, start_date, notes, recurrence_type, recurrence_interval, duration, due_in_days, total, payment_method, template, recurring_invoice_items, } = input;
    const isExist = await prisma_1.default.recurring_invoice.findFirst({
        where: {
            user_id: userId,
            invoice_number,
        },
    });
    if (isExist) {
        throw `Recurring invoice with invoice number ${invoice_number} already exist`;
    }
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
            template: template,
            due_in_days,
            total,
            next_run: nextRun,
        },
    });
    await prisma_1.default.recurring_invoice_item.createMany({
        data: recurring_invoice_items.map((item) => ({
            recurring_invoice_id: created.id,
            product_id: item.product_id,
            name_snapshot: item.name_snapshot,
            price_snapshot: item.price_snapshot,
            quantity: item.quantity,
            total: item.total,
        })),
    });
    return created;
};
exports.createRecurringInvoiceService = createRecurringInvoiceService;
const softDeleteRecurringInvoiceService = async ({ userId, invoiceNumber, }) => {
    const invoice = await prisma_1.default.recurring_invoice.findFirst({
        where: { user_id: userId, invoice_number: invoiceNumber },
    });
    if (!invoice) {
        throw "Invoice not found";
    }
    const deletedInvoice = await prisma_1.default.recurring_invoice.update({
        where: { id: invoice.id },
        data: { is_deleted: true },
    });
    return deletedInvoice;
};
exports.softDeleteRecurringInvoiceService = softDeleteRecurringInvoiceService;
const getAllRecurringInvoiceService = async ({ userId, page, limit, search, payment, type, status, sort, }) => {
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
    else if (sort === "recurrence_interval_asc")
        orderByClause = { recurrence_interval: "asc" };
    else if (sort === "recurrence_interval_desc")
        orderByClause = { recurrence_interval: "desc" };
    else if (sort === "duration_asc")
        orderByClause = { duration: "asc" };
    else if (sort === "duration_desc")
        orderByClause = { duration: "desc" };
    else if (sort === "due_in_days_asc")
        orderByClause = { due_in_days: "asc" };
    else if (sort === "due_in_days_desc")
        orderByClause = { due_in_days: "desc" };
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
    if (type) {
        whereClause.recurrence_type = type;
    }
    const [recurringInvoice, total] = await Promise.all([
        prisma_1.default.recurring_invoice.findMany({
            where: whereClause,
            orderBy: orderByClause,
            take: limit,
            skip,
            include: {
                users: true,
                clients: true,
                recurring_invoice_item: true,
            },
        }),
        prisma_1.default.recurring_invoice.count({
            where: whereClause,
        }),
    ]);
    return {
        recurringInvoice,
        pagination: {
            page,
            limit,
            totalPages: Math.ceil(total / limit),
            totalItems: total,
        },
    };
};
exports.getAllRecurringInvoiceService = getAllRecurringInvoiceService;
const getRecurringInvoiceChildrenService = async ({ userId, recurringInvoiceNumber, page, limit, search, payment, status, sort, }) => {
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
    const recurring = await prisma_1.default.recurring_invoice.findFirst({
        where: {
            invoice_number: recurringInvoiceNumber,
            user_id: userId,
            is_deleted: false,
        },
        select: { id: true },
    });
    if (!recurring) {
        throw "Recurring invoice not found";
    }
    const whereClause = {
        user_id: userId,
        recurrence_invoice_id: recurring.id,
        is_deleted: false,
    };
    if (search) {
        whereClause.OR = [
            { invoice_number: { contains: search, mode: "insensitive" } },
            { clients: { name: { contains: search, mode: "insensitive" } } },
        ];
    }
    if (payment)
        whereClause.payment_method = payment;
    if (status)
        whereClause.status = status;
    const [invoice, total] = await Promise.all([
        prisma_1.default.invoices.findMany({
            where: whereClause,
            orderBy: orderByClause,
            take: limit,
            skip,
            include: {
                users: true,
                clients: true,
                invoice_items: true,
            },
        }),
        prisma_1.default.invoices.count({ where: whereClause }),
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
exports.getRecurringInvoiceChildrenService = getRecurringInvoiceChildrenService;
const previewRecurringInvoicePDFService = async (data, res) => {
    const { client_id, invoice_number, start_date, recurring_invoice_items, notes, recurrence_type, recurrence_interval, due_in_days, template, } = data;
    const startDate = new Date(start_date);
    const dueDate = new Date(startDate);
    dueDate.setDate(dueDate.getDate() + due_in_days);
    const total = recurring_invoice_items.reduce((acc, item) => acc + item.quantity * item.price_snapshot, 0);
    const clientData = await prisma_1.default.clients.findUnique({
        where: { id: client_id },
    });
    const invoiceData = {
        invoice_number,
        client: { name: clientData?.name || "Unknown Client" },
        start_date: startDate,
        due_date: dueDate,
        invoice_items: recurring_invoice_items,
        total,
        notes,
        recurrence_type,
        recurrence_interval,
        template,
    };
    await (0, pdfGenerator_1.generateInvoicePDF)(invoiceData, res, false);
};
exports.previewRecurringInvoicePDFService = previewRecurringInvoicePDFService;
const getRecurringInvoiceDetailService = async (invoiceNumber, res) => {
    const invoice = await prisma_1.default.recurring_invoice.findFirst({
        where: { invoice_number: invoiceNumber },
        include: {
            recurring_invoice_item: true,
            clients: true,
        },
    });
    if (!invoice) {
        throw "Invoice not found";
    }
    const startDate = new Date(invoice.start_date);
    const dueDate = new Date(startDate);
    dueDate.setDate(dueDate.getDate() + invoice.due_in_days);
    return (0, pdfGenerator_1.generateInvoicePDF)({
        invoice_number: invoice.invoice_number,
        client: { name: invoice.clients.name },
        due_date: dueDate,
        start_date: startDate,
        invoice_items: invoice.recurring_invoice_item,
        total: invoice.total,
        notes: invoice.notes || undefined,
        recurrence_type: invoice.recurrence_type,
        recurrence_interval: invoice.recurrence_interval,
        template: invoice.template,
    }, res, false);
};
exports.getRecurringInvoiceDetailService = getRecurringInvoiceDetailService;
const sendRecurringInvoiceEmailService = async (invoiceNumber) => {
    const invoice = await prisma_1.default.recurring_invoice.findFirst({
        where: { invoice_number: invoiceNumber, is_deleted: false },
        include: {
            recurring_invoice_item: true,
            clients: true,
        },
    });
    if (!invoice)
        throw "Invoice not found";
    const user = await prisma_1.default.users.findFirst({
        where: { id: invoice.user_id, is_deleted: false },
    });
    if (!user)
        throw "User not found";
    const userProfile = await prisma_1.default.user_profiles.findFirst({
        where: { user_id: user.id },
    });
    if (!userProfile)
        throw "User profile not found";
    const startDate = new Date(invoice.start_date);
    const dueDate = new Date(startDate);
    dueDate.setDate(dueDate.getDate() + invoice.due_in_days);
    const token = (0, createToken_1.createToken)({
        id: invoice.client_id,
        email: invoice.clients.email,
        invoice_number: invoice.invoice_number,
    }, "30d");
    const pdfBuffer = await (0, pdfGenerator_1.generateInvoicePDF)({
        invoice_number: invoice.invoice_number,
        client: { name: invoice.clients.name },
        due_date: dueDate,
        start_date: startDate,
        invoice_items: invoice.recurring_invoice_item,
        total: invoice.total,
        notes: invoice.notes || undefined,
        recurrence_type: invoice.recurrence_type,
        recurrence_interval: invoice.recurrence_interval,
        template: invoice.template,
    });
    await (0, sendEmail_1.sendInvoiceEmail)(invoice.clients.email, `Invoice Payment - ${userProfile.first_name} ${userProfile.last_name}`, null, {
        name: userProfile.first_name,
        client_name: invoice.clients.name,
        invoice_number: invoice.invoice_number,
        token,
        isRecurring: true,
    }, pdfBuffer);
};
exports.sendRecurringInvoiceEmailService = sendRecurringInvoiceEmailService;
const getRecurringInvoiceDetailPayment = async (invoiceNumber) => {
    const invoice = await prisma_1.default.recurring_invoice.findFirst({
        where: { invoice_number: invoiceNumber },
        include: {
            recurring_invoice_item: true,
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
    return {
        invoice,
        userPaymentMethod,
    };
};
exports.getRecurringInvoiceDetailPayment = getRecurringInvoiceDetailPayment;
const downloadRecurringInvoicePdf = async (invoiceNumber, res) => {
    const invoice = await prisma_1.default.recurring_invoice.findFirst({
        where: { invoice_number: invoiceNumber },
        include: {
            recurring_invoice_item: true,
            clients: true,
        },
    });
    if (!invoice) {
        throw "Invoice not found";
    }
    const startDate = new Date(invoice.start_date);
    const dueDate = new Date(startDate);
    dueDate.setDate(dueDate.getDate() + invoice.due_in_days);
    await (0, pdfGenerator_1.generateInvoicePDF)({
        invoice_number: invoice.invoice_number,
        client: { name: invoice.clients.name },
        due_date: dueDate,
        start_date: invoice.start_date,
        invoice_items: invoice.recurring_invoice_item,
        total: invoice.total,
        notes: invoice.notes || undefined,
        recurrence_type: invoice.recurrence_type,
        recurrence_interval: invoice.recurrence_interval,
        template: invoice.template,
    }, res, true);
};
exports.downloadRecurringInvoicePdf = downloadRecurringInvoicePdf;
