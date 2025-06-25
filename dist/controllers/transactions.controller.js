"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../utils/response");
const transaction_service_1 = require("../services/transaction.service");
class TransactionController {
    async createTransaction(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const file = req.file;
            const transaction = await (0, transaction_service_1.createTransactionService)(invoiceNumber, file);
            (0, response_1.createResponse)(res, "Transaction has been created", transaction);
        }
        catch (error) {
            next(error);
        }
    }
    async getPaymentProof(req, res, next) {
        try {
            const invoiceNumber = req.params.invoice_number;
            const transaction = await (0, transaction_service_1.getPaymentProofService)(invoiceNumber);
            (0, response_1.successResponse)(res, "Success", transaction);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = TransactionController;
