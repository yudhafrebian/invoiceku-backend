import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const invoiceValidation = [
    body("client_id").notEmpty().withMessage("Client ID is required"),
    body("invoice_items").notEmpty().withMessage("Invoice Items is required"),
    body("total").notEmpty().withMessage("Total is required"),
    body("due_date").notEmpty().withMessage("Due Date is required"),
    body("start_date").notEmpty().withMessage("Start Date is required"),
    body("payment_method").notEmpty().withMessage("Payment Method is required"),
    body("invoice_number").notEmpty().withMessage("Invoice Number is required"),
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