"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recurringInvoiceValidation = void 0;
const express_validator_1 = require("express-validator");
exports.recurringInvoiceValidation = [
    (0, express_validator_1.body)("client_id")
        .notEmpty()
        .withMessage("Client ID is required")
        .isInt()
        .withMessage("Client ID must be an integer"),
    (0, express_validator_1.body)("recurring_invoice_items")
        .isArray({ min: 1 })
        .withMessage("Invoice Items must be a non-empty array"),
    (0, express_validator_1.body)("total")
        .notEmpty()
        .withMessage("Total is required")
        .isInt({ min: 0 })
        .withMessage("Total must be a non-negative integer"),
    (0, express_validator_1.body)("due_in_days")
        .notEmpty()
        .withMessage("Due in days is required")
        .isInt({ min: 1 })
        .withMessage("Due in days must be a positive integer"),
    (0, express_validator_1.body)("start_date")
        .notEmpty()
        .withMessage("Start Date is required")
        .isISO8601()
        .withMessage("Start Date must be a valid ISO 8601 date"),
    (0, express_validator_1.body)("payment_method").notEmpty().withMessage("Payment Method is required"),
    (0, express_validator_1.body)("invoice_number").notEmpty().withMessage("Invoice Number is required"),
    (0, express_validator_1.body)("recurrence_type")
        .notEmpty()
        .withMessage("Recurrence Type is required")
        .isIn(["Daily", "Weekly", "Monthly"])
        .withMessage("Recurrence Type must be Daily, Weekly, or Monthly"),
    (0, express_validator_1.body)("recurrence_interval")
        .notEmpty()
        .withMessage("Recurrence Interval is required")
        .isInt({ min: 1 })
        .withMessage("Recurrence Interval must be a positive integer"),
    (0, express_validator_1.body)("duration")
        .notEmpty()
        .withMessage("Duration is required")
        .isInt({ min: 1 })
        .withMessage("Duration must be a positive integer"),
    (req, res, next) => {
        const errorValidation = (0, express_validator_1.validationResult)(req);
        if (!errorValidation.isEmpty()) {
            return res.status(400).send({
                success: false,
                error: errorValidation.array(),
            });
        }
        next();
    },
];
