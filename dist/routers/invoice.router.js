"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = __importDefault(require("../middleware/verifier/verify"));
const invoice_controller_1 = __importDefault(require("../controllers/invoice.controller"));
const invoice_1 = require("../middleware/validation/invoice");
class InvoiceRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.verify = new verify_1.default();
        this.InvoiceController = new invoice_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.post("/preview", this.InvoiceController.previewInvoicePDF);
        this.route.post("/send-email-auto", this.InvoiceController.scheduledEmailInvoice);
        this.route.get("/status", this.InvoiceController.getInvoiceStatus);
        this.route.get("/template-style", this.InvoiceController.getTemplates);
        this.route.get("/download/:id", this.InvoiceController.downloadPdf);
        this.route.get("/detail/:invoice_number", this.InvoiceController.DetailInvoice);
        this.route.use(this.verify.verifyToken);
        this.route.get("/all-invoice", this.InvoiceController.getAllInvoice);
        this.route.get("/detail-payment/:invoice_number", this.InvoiceController.detailPayment);
        this.route.post("/send-email-payment/:invoice_number", this.InvoiceController.sendInvoiceEmail);
        this.route.patch("/update-status/:invoice_number", this.InvoiceController.updateInvoiceStatus);
        this.route.use(this.verify.verifyStatus);
        this.route.post("/create-invoice", invoice_1.invoiceValidation, this.InvoiceController.createInvoice);
    }
    getRouter() {
        return this.route;
    }
}
exports.default = InvoiceRouter;
