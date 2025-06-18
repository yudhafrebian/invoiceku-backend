"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = __importDefault(require("../middleware/verifier/verify"));
const recurring_invoice_1 = require("../middleware/validation/recurring-invoice");
const recurring_controller_1 = __importDefault(require("../controllers/recurring.controller"));
class RecurringRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.verify = new verify_1.default();
        this.RecurringController = new recurring_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.get("/recurring-type", this.RecurringController.recurringType);
        this.route.post("/preview", this.RecurringController.previewRecurringInvoicePDF);
        this.route.get("/detail/:invoice_number", this.RecurringController.DetailRecurringInvoice);
        this.route.get("/download/:invoice_number", this.RecurringController.downloadPdf);
        this.route.use(this.verify.verifyToken);
        this.route.get("/all", this.RecurringController.getAllRecurringInvoice);
        this.route.get("/detail-payment/:invoice_number", this.RecurringController.detailPayment);
        this.route.post("/send-email/:invoice_number", this.RecurringController.sendRecurringInvoiceEmail);
        this.route.use(this.verify.verifyStatus);
        this.route.post("/create", recurring_invoice_1.recurringInvoiceValidation, this.RecurringController.createRecurringInvoice);
    }
    getRouter() {
        return this.route;
    }
}
exports.default = RecurringRouter;
