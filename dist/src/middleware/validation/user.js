"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPaymentValidation = void 0;
const express_validator_1 = require("express-validator");
exports.userPaymentValidation = [
    (0, express_validator_1.body)("payment_method").notEmpty().withMessage("Payment Method is Required"),
    (0, express_validator_1.body)("account_name").notEmpty().withMessage("Account Name is Required"),
    (0, express_validator_1.body)("account_number").notEmpty().withMessage("Account Number is Required"),
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
