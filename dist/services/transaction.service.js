"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaymentProofService = exports.createTransactionService = void 0;
const cloudinary_1 = require("../configs/cloudinary");
const prisma_1 = __importDefault(require("../configs/prisma"));
const sendEmail_1 = require("../utils/email/sendEmail");
const createTransactionService = async (invoiceNumber, file) => {
    const invoice = await prisma_1.default.invoices.findFirst({
        where: { invoice_number: invoiceNumber },
        include: {
            invoice_items: true,
            clients: true,
            users: true,
        },
    });
    if (!invoice)
        throw "Invoice not found";
    if (!file)
        throw "Payment proof is required";
    const upload = await (0, cloudinary_1.cloudUpload)(file);
    const paymentProofImage = upload.secure_url;
    const userProfile = await prisma_1.default.user_profiles.findFirst({
        where: { user_id: invoice.user_id },
    });
    if (!userProfile)
        throw "User profile not found";
    await (0, sendEmail_1.sendStatusEmail)(invoice.users.email, "Payment Status Update", null, {
        name: `${userProfile.first_name} ${userProfile.last_name}`,
        invoice_number: invoice.invoice_number,
        client_name: invoice.clients.name,
        template: "payment-confirmating",
        status: "Confirmating",
    });
    const transaction = await prisma_1.default.transaction.create({
        data: {
            invoice_id: invoice.id,
            payment_method: invoice.payment_method,
            payment_proof: paymentProofImage,
        },
    });
    await prisma_1.default.invoices.update({
        where: { id: invoice.id },
        data: { status: "Confirmating" },
    });
    return transaction;
};
exports.createTransactionService = createTransactionService;
const getPaymentProofService = async (invoiceNumber) => {
    const invoice = await prisma_1.default.invoices.findFirst({
        where: { invoice_number: invoiceNumber },
        include: {
            invoice_items: true,
            clients: true,
            users: true,
        },
    });
    if (!invoice) {
        throw "Invoice not found";
    }
    const transaction = await prisma_1.default.transaction.findFirst({
        where: { invoice_id: invoice.id },
    });
    if (!transaction) {
        throw "Payment proof not found";
    }
    return transaction;
};
exports.getPaymentProofService = getPaymentProofService;
