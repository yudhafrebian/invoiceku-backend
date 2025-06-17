import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const recurringInvoiceValidation = [
  body("client_id")
    .notEmpty()
    .withMessage("Client ID is required")
    .isInt()
    .withMessage("Client ID must be an integer"),

  body("invoice_items")
    .isArray({ min: 1 })
    .withMessage("Invoice Items must be a non-empty array"),

  body("total")
    .notEmpty()
    .withMessage("Total is required")
    .isInt({ min: 0 })
    .withMessage("Total must be a non-negative integer"),

  body("status").notEmpty().withMessage("Status is required"),

  body("due_in_days")
    .notEmpty()
    .withMessage("Due in days is required")
    .isInt({ min: 1 })
    .withMessage("Due in days must be a positive integer"),

  body("start_date")
    .notEmpty()
    .withMessage("Start Date is required")
    .isISO8601()
    .withMessage("Start Date must be a valid ISO 8601 date"),

  body("payment_method").notEmpty().withMessage("Payment Method is required"),

  body("invoice_number").notEmpty().withMessage("Invoice Number is required"),

  body("recurrence_type")
    .notEmpty()
    .withMessage("Recurrence Type is required")
    .isIn(["Daily", "Weekly", "Monthly"])
    .withMessage("Recurrence Type must be Daily, Weekly, or Monthly"),

  body("recurrence_interval")
    .notEmpty()
    .withMessage("Recurrence Interval is required")
    .isInt({ min: 1 })
    .withMessage("Recurrence Interval must be a positive integer"),

  body("duration")
    .notEmpty()
    .withMessage("Duration is required")
    .isInt({ min: 1 })
    .withMessage("Duration must be a positive integer"),

  (req: Request, res: Response, next: NextFunction): any => {
    const errorValidation = validationResult(req);
    if (!errorValidation.isEmpty()) {
      return res.status(400).send({
        success: false,
        error: errorValidation.array(),
      });
    }
    next();
  },
];
