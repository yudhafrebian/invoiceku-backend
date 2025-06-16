"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../configs/prisma"));
const response_1 = require("../utils/response");
const cloudinary_1 = require("../configs/cloudinary");
class TransactionController {
    async createTransaction(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const invoice = await prisma_1.default.invoices.findUnique({
                where: { invoice_number: invoiceNumber },
                include: {
                    invoice_items: true,
                    clients: true,
                    users: true
                },
            });
            let paymentProofImage;
            if (req.file) {
                const upload = await (0, cloudinary_1.cloudUpload)(req.file);
                paymentProofImage = upload.secure_url;
            }
            if (!paymentProofImage) {
                throw "Payment proof is required";
            }
            if (!invoice) {
                throw "Invoice not found";
            }
            const createTransaction = await prisma_1.default.transaction.create({
                data: {
                    invoice_id: invoice.id,
                    payment_method: invoice.payment_method,
                    payment_proof: paymentProofImage
                }
            });
            const updateInvoiceStatus = await prisma_1.default.invoices.update({
                where: { id: invoice.id },
                data: {
                    status: "Confirmating"
                }
            });
            (0, response_1.createResponse)(res, "Transaction has been created", createTransaction);
        }
        catch (error) {
            next(error);
        }
    }
    async getPaymentProof(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const invoice = await prisma_1.default.invoices.findUnique({
                where: { invoice_number: invoiceNumber },
                include: {
                    invoice_items: true,
                    clients: true,
                    users: true
                },
            });
            if (!invoice) {
                throw "Invoice not found";
            }
            const transaction = await prisma_1.default.transaction.findFirst({
                where: { invoice_id: invoice.id }
            });
            if (!transaction) {
                throw "Payment proof not found";
            }
            (0, response_1.successResponse)(res, "Success", transaction);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = TransactionController;
