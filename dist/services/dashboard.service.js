"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummaryService = void 0;
const prisma_1 = __importDefault(require("../configs/prisma"));
const getSummaryService = async (userId) => {
    const [totalInvoice, paidInvoice, pendingInvoice, confirmatingInvoice, rejectedInvoice, overdueInvoice, clients, products, invoices,] = await Promise.all([
        prisma_1.default.invoices.count({
            where: { user_id: userId },
        }),
        prisma_1.default.invoices.count({
            where: { user_id: userId, status: "Paid" },
        }),
        prisma_1.default.invoices.count({
            where: { user_id: userId, status: "Pending" },
        }),
        prisma_1.default.invoices.count({
            where: { user_id: userId, status: "Confirmating" },
        }),
        prisma_1.default.invoices.count({
            where: { user_id: userId, status: "Rejected" },
        }),
        prisma_1.default.invoices.count({
            where: { user_id: userId, status: "Overdue" },
        }),
        prisma_1.default.clients.findMany({
            where: { user_id: userId, is_deleted: false },
            take: 5,
        }),
        prisma_1.default.products_services.findMany({
            where: { user_id: userId, is_deleted: false },
            take: 5,
        }),
        prisma_1.default.invoices.findMany({
            where: { user_id: userId },
            include: { clients: true },
            take: 5,
        }),
    ]);
    return {
        invoiceSummary: {
            totalInvoice,
            paidInvoice,
            pendingInvoice,
            confirmatingInvoice,
            rejectedInvoice,
            overdueInvoice,
        },
        clients,
        products,
        invoices,
    };
};
exports.getSummaryService = getSummaryService;
