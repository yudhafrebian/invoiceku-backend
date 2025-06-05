import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const userPaymentValidation = [
    body("payment_method").notEmpty().withMessage("Payment Method is Required"),
    body("account_name").notEmpty().withMessage("Account Name is Required"),
    body("account_number").notEmpty().withMessage("Account Number is Required"),
    (req: Request, res: Response, next: NextFunction): any => {
        const errorValidation = validationResult(req);
        if (!errorValidation.isEmpty()) {
            return res.status(400).send({
                success: false,
                error: errorValidation,
            });
        }
        next();
    },
];