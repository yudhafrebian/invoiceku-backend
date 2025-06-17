"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRecurringInvoice = void 0;
const date_fns_1 = require("date-fns");
const prisma_1 = __importDefault(require("../configs/prisma"));
const handleRecurringInvoice = async () => {
    const now = new Date();
    let createdCount = 0;
    const recurringInvoices = await prisma_1.default.recurring_invoice.findMany({
        where: {
            is_active: true,
            is_deleted: false,
            next_run: {
                lte: now,
            },
        },
        include: {
            recurring_invoice_item: true,
        },
    });
    for (const recurring of recurringInvoices) {
        const { id, user_id, client_id, invoice_number, next_run, recurrence_type, recurrence_interval, duration, start_date, due_in_days, status, total, recurring_invoice_item, payment_method, notes } = recurring;
        const existingGenerated = await prisma_1.default.invoices.count({
            where: {
                invoice_number: {
                    startsWith: invoice_number,
                },
                user_id,
            },
        });
        if (duration !== null && duration !== undefined && existingGenerated >= duration) {
            await prisma_1.default.recurring_invoice.update({
                where: { id },
                data: { is_active: false },
            });
            continue;
        }
        const dueDate = (0, date_fns_1.addDays)(new Date(next_run), due_in_days);
        const recurringInvoice = await prisma_1.default.recurring_invoice.create({
            data: {
                user_id,
                client_id,
                invoice_number: `${invoice_number}-${existingGenerated + 1}`,
                start_date: next_run,
                due_date: dueDate,
                notes,
                status,
                total,
                payment_method: payment_method,
                due_in_days,
                recurrence_type,
                next_run,
            },
        });
        await prisma_1.default.recurring_invoice_item.createMany({
            data: recurring_invoice_item.map((item) => ({
                recurring_invoice_id: recurringInvoice.id,
                product_id: item.product_id,
                name_snapshot: item.name_snapshot,
                price_snapshot: item.price_snapshot,
                quantity: item.quantity,
                total: item.total,
            })),
        });
        createdCount++;
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
            },
        });
    }
    return createdCount;
};
exports.handleRecurringInvoice = handleRecurringInvoice;
