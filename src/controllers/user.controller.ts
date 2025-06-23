import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";
import { cloudUpload } from "../configs/cloudinary";

class UserController {
  async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const user = await prisma.users.findUnique({
        where: {
          id: userId,
        },
        select: {
          email: true,
          is_verified: true,
        },
      });
      const user_profile = await prisma.user_profiles.findFirst({
        where: {
          user_id: userId,
        },
      });
      successResponse(res, "Success", { user, user_profile });
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
  
      let profileImage: string | undefined;
  
      if (req.file) {
        const upload = await cloudUpload(req.file);
        profileImage = upload.secure_url;
      }
  
      const userProfile = await prisma.user_profiles.findFirst({
        where: { user_id: userId },
      });
  
      if (!userProfile) {
        throw "User profile not found";
      }
  
      const currentUser = await prisma.users.findUnique({
        where: { id: userId },
      });
  
      if (!currentUser) {
        throw "User not found";
      }
  
      if (email !== currentUser.email) {
        const checkEmail = await prisma.users.findUnique({
          where: { email },
        });
  
        if (checkEmail) {
          throw `Email ${email} already exists`;
        }
      }
  
      const updateUser = await prisma.users.update({
        where: {
          id: userId,
        },
        data: {
          email,
          ...(email !== currentUser.email && { is_verified: false }),
        },
        select: {
          email: true,
          is_verified: true,
        },
      });
  
      const updateUserProfile = await prisma.user_profiles.update({
        where: {
          id: userProfile.id,
        },
        data: {
          first_name,
          last_name,
          phone,
          ...(profileImage && { profile_img: profileImage }),
        },
      });
  
      successResponse(res, "Profile has been updated", {
        updateUser,
        updateUserProfile,
      });
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

      const userPaymentMethod = await prisma.user_payment_method.findMany({
        where: {
          user_id: userId,
        },
      });

      successResponse(res, "Success", userPaymentMethod);
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
      const { payment_method, account_name, account_number } = req.body;
      console.log(req.body);

      const isExist = await prisma.user_payment_method.findFirst({
        where: {
          user_id: userId,
          payment_method,
        },
      });

      if (isExist) {
        throw `Payment method ${req.body.payment_method} already exist`;
      }

      let paymentMethodImage: string | undefined;

      if (req.file) {
        const upload = await cloudUpload(req.file);
        paymentMethodImage = upload.secure_url;
      }

      const create = await prisma.user_payment_method.create({
        data: {
          user_id: userId,
          account_name,
          account_number,
          payment_method,
          ...(paymentMethodImage && { qris_image_url: paymentMethodImage }),
        },
      });

      createResponse(res, "Your payment method has been created", create);
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
      const paymentMethod = await prisma.user_payment_method.findUnique({
        where: { id },
      });

      if (!paymentMethod) {
        throw "Payment method not found";
      }

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

      const current = await prisma.user_payment_method.findUnique({
        where: { id },
      });

      if (!current) {
        throw "Payment method not found";
      }

      const { payment_method, account_name, account_number } = req.body;

      let paymentMethodImage: string | undefined;

      if (req.file) {
        const upload = await cloudUpload(req.file);
        paymentMethodImage = upload.secure_url;
      }

      const update = await prisma.user_payment_method.update({
        where: { id },
        data: {
          account_name,
          account_number,
          payment_method,
          ...(paymentMethodImage && { qris_image_url: paymentMethodImage }),
        },
      });

      successResponse(res, "Payment method has been updated", update);
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

      const current = await prisma.user_payment_method.findUnique({
        where: { id },
      });

      if (!current) {
        res.status(404).json({ message: "Payment method not found" });
        return;
      }

      const switchStatus = await prisma.user_payment_method.update({
        where: { id },
        data: {
          is_active: !current.is_active,
        },
      });

      successResponse(res, "Payment method has been updated", switchStatus);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
