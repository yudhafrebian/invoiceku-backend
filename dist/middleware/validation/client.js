"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientValidation = exports.createClientValidation = void 0;
const express_validator_1 = require("express-validator");
exports.createClientValidation = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name is required"),
    (0, express_validator_1.body)("email").notEmpty().isEmail().withMessage("Email is Required"),
    (0, express_validator_1.body)("phone").notEmpty().withMessage("Phone is Required"),
    (0, express_validator_1.body)("address").notEmpty().withMessage("Address is Required"),
    (req, res, next) => {
        const errorValidation = (0, express_validator_1.validationResult)(req);
        if (!errorValidation.isEmpty()) {
            return res.status(400).send({
                success: false,
                error: errorValidation,
            });
        }
        next();
    }
];
exports.updateClientValidation = [
    (0, express_validator_1.body)("name").notEmpty().withMessage("Name is required"),
    (0, express_validator_1.body)("email").notEmpty().isEmail().withMessage("Email is Required"),
    (0, express_validator_1.body)("phone").notEmpty().withMessage("Phone is Required"),
    (0, express_validator_1.body)("address").notEmpty().withMessage("Address is Required"),
    (0, express_validator_1.body)("payment_ref").notEmpty().withMessage("Payment Reference is Required"),
    (req, res, next) => {
        const errorValidation = (0, express_validator_1.validationResult)(req);
        if (!errorValidation.isEmpty()) {
            return res.status(400).send({
                success: false,
                error: errorValidation,
            });
        }
        next();
    }
];
