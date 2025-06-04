import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { successResponse } from "../utils/response";
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
      console.log(req.body);
      const { first_name, last_name, phone, email } = req.body;

      if (!req.file) {
        throw "File not found";
      }

      const upload = await cloudUpload(req.file);

      const userProfile = await prisma.user_profiles.findFirst({
        where: { user_id: userId },
      });

      if (!userProfile) {
        throw new Error("User profile not found");
      }

      const updateUser = await prisma.users.update({
        where: {
          id: userId,
        },
        data: {
          email,
        },
        select: {
          email: true,
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
          profile_img: upload.secure_url,
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
}

export default UserController;
