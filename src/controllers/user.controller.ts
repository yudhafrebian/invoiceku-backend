import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { successResponse } from "../utils/response";

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
}

export default UserController;
