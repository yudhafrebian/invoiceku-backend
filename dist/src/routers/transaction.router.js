"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = __importDefault(require("../middleware/verifier/verify"));
const transactions_controller_1 = __importDefault(require("../controllers/transactions.controller"));
const uploader_1 = require("../middleware/uploader");
class TransactionRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.verify = new verify_1.default();
        this.transactionController = new transactions_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.use(this.verify.verifyToken);
        this.route.post("/create-transaction/:invoice_number", (0, uploader_1.uploaderMemory)().single("payment_proof"), this.transactionController.createTransaction);
        this.route.get("/payment-proof/:invoice_number", this.transactionController.getPaymentProof);
    }
    getRouter() {
        return this.route;
    }
}
exports.default = TransactionRouter;
