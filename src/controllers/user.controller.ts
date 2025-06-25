import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, errorResponse, successResponse } from "../utils/response";
import { cloudUpload } from "../configs/cloudinary";
import { createPaymentMethodService, deleteUserService, getSinglePaymentMethodService, getUserPaymentMethodsService, getUserService, switchPaymentMethodStatusService, updatePaymentMethodService, updateUserService } from "../services/user.service";

class UserController {
  async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const data = await getUserService(userId);
      successResponse(res, "Success", data);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const { first_name, last_name, phone, email } = req.body;
  
      const result = await updateUserService(userId, {
        first_name,
        last_name,
        phone,
        email,
        file: req.file,
      });
  
      successResponse(res, "Profile has been updated", result);
    } catch (error) {
      next(error);
    }
  }
  

  async userPaymentMethod(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
  
      const methods = await getUserPaymentMethodsService(userId);
  
      successResponse(res, "Success", methods);
    } catch (error) {
      next(error);
    }
  }

  async createPaymentMethod(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const { account_name, account_number, payment_method } = req.body;
  
      const created = await createPaymentMethodService({
        user_id: userId,
        account_name,
        account_number,
        payment_method,
        file: req.file,
      });
  
      createResponse(res, "Your payment method has been created", created);
    } catch (error) {
      next(error);
    }
  }

  async getSinglePaymentMethod(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const paymentMethod = await getSinglePaymentMethodService(id);
      successResponse(res, "Success", paymentMethod);
    } catch (error) {
      next(error);
    }
  }

  async updatePaymentMethod(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const { payment_method, account_name, account_number } = req.body;
  
      const updated = await updatePaymentMethodService(id, {
        payment_method,
        account_name,
        account_number,
        file: req.file,
      });
  
      successResponse(res, "Payment method has been updated", updated);
    } catch (error) {
      next(error);
    }
  }

  async paymentMethodSwitchStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const updated = await switchPaymentMethodStatusService(id);
      successResponse(res, "Payment method has been updated", updated);
    } catch (error) {
      if (error === "Payment method not found") {
        errorResponse(res, error);
      } else {
        next(error);
      }
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction):Promise<void> {
    try {
      const userId = res.locals.data.id;
      const deletedUser = await deleteUserService(userId);
      successResponse(res, "User has been deleted", deletedUser);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
