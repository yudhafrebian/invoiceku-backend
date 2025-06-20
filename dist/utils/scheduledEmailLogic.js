"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.markOverdueInvoices = exports.scheduledEmailLogic = void 0;
const prisma_1 = __importDefault(require("../configs/prisma"));
const pdfGeneratorBuffer_1 = require("../utils/pdf/pdfGeneratorBuffer");
const sendEmail_1 = require("../utils/email/sendEmail");
const createToken_1 = require("../utils/createToken");
const scheduledEmailLogic = async () => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    const invoices = await prisma_1.default.invoices.findMany({
        where: {
            start_date: {
                gte: new Date(formattedDate + "T00:00:00.000Z"),
                lte: new Date(formattedDate + "T23:59:59.999Z"),
            },
            is_deleted: false,
        },
        include: {
            invoice_items: true,
            clients: true,
        },
    });
    for (const invoice of invoices) {
        const user = await prisma_1.default.users.findUnique({
            where: { id: invoice.user_id },
        });
        if (!user)
            continue;
        const userProfile = await prisma_1.default.user_profiles.findFirst({
            where: { user_id: user.id },
        });
        if (!userProfile)
            continue;
        const token = (0, createToken_1.createToken)({
            id: invoice.client_id,
            email: invoice.clients.email,
        }, "30d");
        const pdfBuffer = await (0, pdfGeneratorBuffer_1.generateInvoicePDFBuffer)({
            invoice_number: invoice.invoice_number,
            client: { name: invoice.clients.name },
            due_date: invoice.due_date,
            start_date: invoice.start_date,
            invoice_items: invoice.invoice_items,
            total: invoice.total,
            notes: invoice.notes || undefined,
        });
        await (0, sendEmail_1.sendInvoiceEmail)(invoice.clients.email, `Invoice Payment - ${userProfile.first_name} ${userProfile.last_name}`, null, {
            name: userProfile.first_name,
            client_name: invoice.clients.name,
            invoice_number: invoice.invoice_number,
            token,
            isRecurring: false
        }, pdfBuffer);
    }
    return invoices.length;
};
exports.scheduledEmailLogic = scheduledEmailLogic;
const markOverdueInvoices = async () => {
    const now = new Date();
    console.log("now", now);
    const overdueInvoices = await prisma_1.default.invoices.findMany({
        where: {
            due_date: {
                lt: now,
            },
            status: "Pending",
            is_deleted: false,
        },
        include: {
            clients: true,
            invoice_items: true,
            users: true
        },
    });
    for (const invoice of overdueInvoices) {
        await prisma_1.default.invoices.update({
            where: { id: invoice.id },
            data: {
                status: "Overdue",
            },
        });
        const user = await prisma_1.default.users.findUnique({
            where: { id: invoice.user_id },
        });
        if (!user)
            continue;
        const userProfile = await prisma_1.default.user_profiles.findFirst({
            where: { user_id: user.id },
        });
        if (!userProfile)
            continue;
        const token = (0, createToken_1.createToken)({ id: invoice.clients.id, email: invoice.clients.email }, "30d");
        const pdfBuffer = await (0, pdfGeneratorBuffer_1.generateInvoicePDFBuffer)({
            invoice_number: invoice.invoice_number,
            client: { name: invoice.clients.name },
            due_date: invoice.due_date,
            start_date: invoice.start_date,
            invoice_items: invoice.invoice_items,
            total: invoice.total,
            notes: invoice.notes || undefined,
        });
        await (0, sendEmail_1.sendOverdueInvoiceEmail)(invoice.clients.email, `Overdue Invoice - ${userProfile.first_name} ${userProfile.last_name}`, null, {
            name: userProfile.first_name,
            client_name: invoice.clients.name,
            invoice_number: invoice.invoice_number,
            token,
        }, pdfBuffer);
    }
    return overdueInvoices.length;
};
exports.markOverdueInvoices = markOverdueInvoices;
