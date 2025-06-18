"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceValidation = void 0;
const express_validator_1 = require("express-validator");
exports.invoiceValidation = [
    (0, express_validator_1.body)("client_id").notEmpty().withMessage("Client ID is required"),
    (0, express_validator_1.body)("invoice_items").notEmpty().withMessage("Invoice Items is required"),
    (0, express_validator_1.body)("total").notEmpty().withMessage("Total is required"),
    (0, express_validator_1.body)("due_date").notEmpty().withMessage("Due Date is required"),
    (0, express_validator_1.body)("start_date").notEmpty().withMessage("Start Date is required"),
    (0, express_validator_1.body)("payment_method").notEmpty().withMessage("Payment Method is required"),
    (0, express_validator_1.body)("invoice_number").notEmpty().withMessage("Invoice Number is required"),
    (req, res, next) => {
        const errorValidation = (0, express_validator_1.validationResult)(req);
        if (!errorValidation.isEmpty()) {
            return res.status(400).send({
                success: false,
                error: errorValidation,
            });
        }
        next();
    },
];
