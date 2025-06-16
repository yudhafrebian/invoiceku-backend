"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordValidation = exports.forgotPasswordValidation = exports.signInValidation = exports.signUpValidation = void 0;
const express_validator_1 = require("express-validator");
exports.signUpValidation = [
    (0, express_validator_1.body)("first_name").notEmpty().withMessage("First Name is Required"),
    (0, express_validator_1.body)("last_name").notEmpty().withMessage("Last Name is Required"),
    (0, express_validator_1.body)("email").notEmpty().isEmail().withMessage("Email is Required"),
    (0, express_validator_1.body)("password")
        .notEmpty()
        .isStrongPassword({
        minLength: 6,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
        .withMessage("Min. 6 Character, 1 Uppercase, 1 Lowercase, 1 Number, 1 Symbol"),
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
exports.signInValidation = [
    (0, express_validator_1.body)("email").notEmpty().isEmail().withMessage("Email is Required"),
    (0, express_validator_1.body)("password").notEmpty().withMessage("Password is Required"),
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
exports.forgotPasswordValidation = [
    (0, express_validator_1.body)("email").notEmpty().isEmail().withMessage("Email is Required"),
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
exports.resetPasswordValidation = [
    (0, express_validator_1.body)("password")
        .notEmpty()
        .isStrongPassword({
        minLength: 6,
        minUppercase: 1,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
        .withMessage("Min. 6 Character, 1 Uppercase, 1 Lowercase, 1 Number, 1 Symbol"),
];
