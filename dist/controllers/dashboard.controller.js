"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../configs/prisma"));
const response_1 = require("../utils/response");
class DashboardController {
    async getSummary(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const totalInvoice = await prisma_1.default.invoices.count({
                where: {
                    user_id: userId,
                },
            });
            const paidInvoice = await prisma_1.default.invoices.count({
                where: {
                    user_id: userId,
                    status: "Paid",
                },
            });
            const pendingInvoice = await prisma_1.default.invoices.count({
                where: {
                    user_id: userId,
                    status: "Pending",
                },
            });
            const confirmatingInvoice = await prisma_1.default.invoices.count({
                where: {
                    user_id: userId,
                    status: "Confirmating",
                },
            });
            const rejectedInvoice = await prisma_1.default.invoices.count({
                where: {
                    user_id: userId,
                    status: "Rejected",
                },
            });
            const overdueInvoice = await prisma_1.default.invoices.count({
                where: {
                    user_id: userId,
                    status: "Overdue",
                },
            });
            const clients = await prisma_1.default.clients.findMany({
                where: {
                    user_id: userId,
                },
                take: 5,
            });
            const products = await prisma_1.default.products_services.findMany({
                where: {
                    user_id: userId,
                },
                take: 5,
            });
            const invoices = await prisma_1.default.invoices.findMany({
                where: {
                    user_id: userId,
                },
                take: 5,
            });
            (0, response_1.successResponse)(res, "Success", {
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
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = DashboardController;
