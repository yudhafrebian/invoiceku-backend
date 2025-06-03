import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";


export const createClientValidation = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").notEmpty().isEmail().withMessage("Email is Required"),
    body("phone").notEmpty().withMessage("Phone is Required"),
    body("address").notEmpty().withMessage("Address is Required"),
    (req:Request, res:Response, next:NextFunction):any => {
        const errorValidation = validationResult(req);
        if (!errorValidation.isEmpty()) {
            return res.status(400).send({
                success: false,
                error: errorValidation,
            });
        }
        next();
    }
];

export const updateClientValidation = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").notEmpty().isEmail().withMessage("Email is Required"),
    body("phone").notEmpty().withMessage("Phone is Required"),
    body("address").notEmpty().withMessage("Address is Required"),
    body("payment_ref").notEmpty().withMessage("Payment Reference is Required"),
    (req:Request, res:Response, next:NextFunction):any => {
        const errorValidation = validationResult(req);
        if (!errorValidation.isEmpty()) {
            return res.status(400).send({
                success: false,
                error: errorValidation,
            });
        }
        next();
    }
];