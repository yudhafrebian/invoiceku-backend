"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const scheduledEmailLogic_1 = require("./utils/scheduledEmailLogic");
const handleRecurringInvoice_1 = require("./utils/handleRecurringInvoice");
node_cron_1.default.schedule("51 1 * * *", async () => {
    try {
        console.log("Cron running: sending scheduled emails, marking overdue, handling recurring...");
        const countEmails = await (0, scheduledEmailLogic_1.scheduledEmailLogic)();
        const countOverdue = await (0, scheduledEmailLogic_1.markOverdueInvoices)();
        const countRecurring = await (0, handleRecurringInvoice_1.handleRecurringInvoice)();
        console.log(`Emails sent: ${countEmails}`);
        console.log(`Overdue marked: ${countOverdue}`);
        console.log(`Recurring invoices created: ${countRecurring}`);
    }
    catch (error) {
        console.error("Cron error:", error.message);
    }
});
