"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = __importDefault(require("../middleware/verifier/verify"));
const recurring_controller_1 = __importDefault(require("../controllers/recurring.controller"));
const recurring_invoice_1 = require("../middleware/validation/recurring-invoice");
class RecurringRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.verify = new verify_1.default();
        this.CronController = new recurring_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.use(this.verify.verifyToken);
        this.route.get("/all", this.CronController.getAllRecurringInvoice);
        this.route.use(this.verify.verifyStatus);
        this.route.post("/create", recurring_invoice_1.recurringInvoiceValidation, this.CronController.createRecurringInvoice);
    }
    getRouter() {
        return this.route;
    }
}
exports.default = RecurringRouter;
