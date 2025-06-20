"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRecurringInvoice = void 0;
const date_fns_1 = require("date-fns");
const prisma_1 = __importDefault(require("../configs/prisma"));
const sendEmail_1 = require("./email/sendEmail");
const createToken_1 = require("./createToken");
const pdfGeneratorBuffer_1 = require("./pdf/pdfGeneratorBuffer");
const handleRecurringInvoice = async () => {
    const zone = "Asia/Jakarta";
    const todayString = new Intl.DateTimeFormat("en-CA", {
        timeZone: zone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(new Date());
    const formattedStart = new Date(`${todayString}T00:00:00.000Z`);
    const formattedEnd = new Date(`${todayString}T23:59:59.999Z`);
    let createdCount = 0;
    const recurringInvoices = await prisma_1.default.recurring_invoice.findMany({
        where: {
            is_active: true,
            is_deleted: false,
            next_run: {
                gte: formattedStart,
                lte: formattedEnd,
            },
        },
        include: {
            recurring_invoice_item: true,
            clients: true,
            users: true,
        },
    });
    for (const recurring of recurringInvoices) {
        const { id, user_id, client_id, invoice_number, next_run, recurrence_type, recurrence_interval, duration, due_in_days, status, total, recurring_invoice_item, payment_method, notes, } = recurring;
        if (duration !== null &&
            duration !== undefined &&
            recurring.occurrences_done >= duration) {
            await prisma_1.default.recurring_invoice.update({
                where: { id },
                data: { is_active: false },
            });
            continue;
        }
        const dueDate = (0, date_fns_1.addDays)(new Date(next_run), due_in_days);
        const newInvoiceNumber = `${invoice_number}-${recurring.occurrences_done + 1}`;
        const existing = await prisma_1.default.invoices.findFirst({
            where: { invoice_number: newInvoiceNumber },
        });
        if (existing) {
            console.warn(`Invoice ${newInvoiceNumber} sudah ada, skip`);
            continue;
        }
        let invoice;
        try {
            invoice = await prisma_1.default.invoices.create({
                data: {
                    user_id,
                    client_id,
                    invoice_number: newInvoiceNumber,
                    start_date: next_run,
                    due_date: dueDate,
                    total,
                    notes,
                    status,
                    payment_method: payment_method,
                    recurrence_invoice_id: id,
                },
            });
        }
        catch (err) {
            console.error("Gagal membuat invoice:", err);
            continue;
        }
        await prisma_1.default.invoice_items.createMany({
            data: recurring_invoice_item.map((item) => ({
                invoice_id: invoice.id,
                product_id: item.product_id,
                name_snapshot: item.name_snapshot,
                price_snapshot: item.price_snapshot,
                quantity: item.quantity,
                total: item.total,
            })),
        });
        let newNextRun;
        switch (recurrence_type) {
            case "Daily":
                newNextRun = (0, date_fns_1.addDays)(next_run, recurrence_interval);
                break;
            case "Weekly":
                newNextRun = (0, date_fns_1.addWeeks)(next_run, recurrence_interval);
                break;
            case "Monthly":
                newNextRun = (0, date_fns_1.addMonths)(next_run, recurrence_interval);
                break;
            default:
                newNextRun = (0, date_fns_1.addDays)(next_run, 7);
        }
        await prisma_1.default.recurring_invoice.update({
            where: { id },
            data: {
                next_run: newNextRun,
                occurrences_done: { increment: 1 },
            },
        });
        const token = (0, createToken_1.createToken)({
            id: recurring.clients.id,
            email: recurring.clients.email,
        }, "30d");
        const userProfile = await prisma_1.default.user_profiles.findFirst({
            where: { user_id },
        });
        if (!userProfile)
            continue;
        const pdfBuffer = await (0, pdfGeneratorBuffer_1.generateInvoicePDFBuffer)({
            invoice_number: invoice.invoice_number,
            client: { name: recurring.clients.name },
            due_date: dueDate,
            start_date: invoice.start_date,
            invoice_items: recurring_invoice_item,
            total: invoice.total,
            notes: invoice.notes || undefined,
            recurrence_interval,
            recurrence_type,
        });
        await (0, sendEmail_1.sendInvoiceEmail)(recurring.clients.email, `Invoice ${invoice.invoice_number}`, null, {
            name: userProfile.first_name,
            client_name: recurring.clients.name,
            invoice_number: invoice.invoice_number,
            token,
            isRecurring: true,
        }, pdfBuffer);
        createdCount++;
    }
    return createdCount;
};
exports.handleRecurringInvoice = handleRecurringInvoice;
