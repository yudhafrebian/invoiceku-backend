import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

export const signUpValidation = [
  body("first_name").notEmpty().withMessage("First Name is Required"),
  body("last_name").notEmpty().withMessage("Last Name is Required"),
  body("email").notEmpty().isEmail().withMessage("Email is Required"),
  body("password")
    .notEmpty()
    .isStrongPassword({
      minLength: 6,
      minUppercase: 1,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      "Min. 6 Character, 1 Uppercase, 1 Lowercase, 1 Number, 1 Symbol"
    ),
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

export const signInValidation = [
  body("email").notEmpty().isEmail().withMessage("Email is Required"),
  body("password").notEmpty().withMessage("Password is Required"),
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

export const forgotPasswordValidation = [
  body("email").notEmpty().isEmail().withMessage("Email is Required"),
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

export const resetPasswordValidation = [
  body("password")
    .notEmpty()
    .isStrongPassword({
      minLength: 6,
      minUppercase: 1,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      "Min. 6 Character, 1 Uppercase, 1 Lowercase, 1 Number, 1 Symbol"
    ),
];
