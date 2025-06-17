"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../utils/response");
const prisma_1 = __importDefault(require("../configs/prisma"));
class RecurringController {
    async createRecurringInvoice(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { client_id, invoice_number, start_date, notes, recurrence_type, recurrence_interval, duration, due_in_days, total, payment_method, invoice_items, } = req.body;
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
                    recurring_invoice_item: {
                        create: invoice_items.map((item) => ({
                            product_id: item.product_id,
                            name_snapshot: item.name_snapshot,
                            price_snapshot: item.price_snapshot,
                            quantity: item.quantity,
                            total: item.total,
                        })),
                    },
                },
            });
            (0, response_1.createResponse)(res, "Recurring invoice created successfully", created);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = RecurringController;
