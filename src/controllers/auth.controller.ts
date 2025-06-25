import { Request, Response, NextFunction } from "express";
import {
  createResponse,
  errorResponse,
  successResponse,
} from "../utils/response";
import { createUserService, forgotPasswordService, keepLoginService, loginService, resetPasswordService, sendResetLinkService, sendVerifyLinkService, verifyEmailService } from "../services/auth.service";

class AuthController {
  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { first_name, last_name, phone, email, password } = req.body;

      const result = await createUserService({
        first_name,
        last_name,
        phone,
        email,
        password,
      });

      createResponse(res, "Account created successfully", result);
    } catch (error: any) {
      if (error.message.includes("already exist")) {
        errorResponse(res, error.message, 400);
      } else {
        next(error);
      }
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      const result = await loginService(email, password);

      successResponse(res, "Login success", result);
    } catch (error: any) {
      if (
        error.message === "Invalid email or password" ||
        error.message === "User not found"
      ) {
        errorResponse(res, error.message, 401);
      } else {
        next(error);
      }
    }
  }

  async keepLogin(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
  
      const result = await keepLoginService(userId);
  
      successResponse(res, "Keep login success", result);
    } catch (error: any) {
      if (
        error.message === "Account not found" ||
        error.message === "User not found"
      ) {
        errorResponse(res, error.message, 404);
      } else {
        next(error);
      }
    }
  }

  async verifyEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
  
      await verifyEmailService(userId);
  
      successResponse(res, "Your email has been verified");
    } catch (error: any) {
      if (error.message === "User not found") {
        errorResponse(res, error.message, 404);
      } else {
        next(error);
      }
    }
  }

  async forgotPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { email } = req.body;
  
      await forgotPasswordService(email);
  
      successResponse(res, "Please check your email");
    } catch (error: any) {
      if (error.message === "Account not found") {
        errorResponse(res, error.message, 404);
      } else {
        next(error);
      }
    }
  }

  async sendVerifyLink(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const { email } = req.body;
  
      await sendVerifyLinkService(userId, email);
  
      successResponse(res, "Please check your email");
    } catch (error: any) {
      if (error.message === "User not found") {
        errorResponse(res, error.message, 404);
      } else {
        next(error);
      }
    }
  }

  async sendResetLink(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const { email } = req.body;
  
      await sendResetLinkService(userId, email);
  
      successResponse(res, "Please check your email");
    } catch (error: any) {
      if (error.message === "User not found") {
        errorResponse(res, error.message, 404);
      } else {
        next(error);
      }
    }
  }

  async resetPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const { password } = req.body;
  
      await resetPasswordService(userId, password);
  
      successResponse(res, "Password has been reset");
    } catch (error: any) {
      if (error.message === "User not found") {
        errorResponse(res, error.message, 404);
      } else {
        next(error);
      }
    }
  }
}

export default AuthController;
