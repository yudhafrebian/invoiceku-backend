import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const createProductValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("type").notEmpty().withMessage("Type is required"),
  body("unit").notEmpty().withMessage("Unit is required"),
  body("price").notEmpty().withMessage("Price is required"),
  (req:Request, res:Response, next:NextFunction): any => {
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

export const updateProductValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("type").notEmpty().withMessage("Type is required"),
  body("unit").notEmpty().withMessage("Unit is required"),
  body("price").notEmpty().withMessage("Price is required"),
  (req:Request, res:Response, next:NextFunction): any => {
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
