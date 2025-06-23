import { Request, Response, NextFunction } from "express";
import prisma from "../configs/prisma";
import {
  createResponse,
  errorResponse,
  successResponse,
} from "../utils/response";
import { hashPassword } from "../utils/hashPassword";
import { createToken } from "../utils/createToken";
import { sendResetLinkEmail, sendVerifyEmail } from "../utils/email/sendEmail";
import { compare } from "bcrypt";

class AuthController {
  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { first_name, last_name, phone, email, password } = req.body;
      const isExist = await prisma.users.findFirst({
        where: {
          email,
          is_deleted: false,
        },
      });

      if (isExist) {
        errorResponse(res, `User with email ${email} already exist`, 400);
      }

      const newPassword = await hashPassword(password);
      const createAuth = await prisma.users.create({
        data: {
          email,
          password_hash: newPassword,
        },
      });
      const createUser = await prisma.user_profiles.create({
        data: {
          first_name,
          last_name,
          phone,
          user_id: createAuth.id,
        },
      });

      const token = createToken({
        id: createAuth.id,
        password: createAuth.password_hash,
      });

      await sendVerifyEmail(email, "Verify Email", null, {
        email,
        token,
      });

      createResponse(res, "Account created successfully", {
        user: createUser,
        auth: createAuth,
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const account = await prisma.users.findUnique({
        where: {
          email: req.body.email,
        },
      });

      if (!account || account.is_deleted) {
        throw "Invalid email or password";
      }

      const comparePassword = await compare(
        req.body.password,
        account.password_hash
      );
      if (!comparePassword) {
        throw "Invalid email or password";
      }

      const user = await prisma.user_profiles.findFirst({
        where: {
          user_id: account.id,
        },
      });

      if (!user) {
        throw "User not found";
      }

      successResponse(res, "Login success", {
        first_name: user.first_name,
        last_name: user.last_name,
        email: account.email,
        is_verified: account.is_verified,
        phone: user.phone,
        profile_img: user.profile_img,
        token: createToken(
          {
            id: account.id,
            is_verified: account.is_verified,
          },
          "24h"
        ),
      });
    } catch (error) {
      next(error);
    }
  }

  async keepLogin(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const account = await prisma.users.findUnique({
        where: {
          id: res.locals.data.id,
        },
      });

      if (!account || account.is_deleted) {
        throw "Account not found";
      }

      const user = await prisma.user_profiles.findFirst({
        where: {
          user_id: account.id,
        },
      });

      if (!user) {
        throw "User not found";
      }

      successResponse(res, "Keep login success", {
        first_name: user.first_name,
        last_name: user.last_name,
        email: account.email,
        is_verified: account.is_verified,
        phone: user.phone,
        profile_img: user.profile_img,
        token: createToken(
          {
            id: account.id,
            is_verified: account.is_verified,
          },
          "1h"
        ),
      });
    } catch (error) {
      next(error);
    }
  }

  async verifyEmail(
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
      });

      if (!user || user.is_deleted) {
        throw "User not found";
      }

      const verify = await prisma.users.update({
        where: {
          id: userId,
        },
        data: {
          is_verified: true,
        },
      });

      successResponse(res, "Your email has been verified");
    } catch (error) {
      next(error);
    }
  }

  async forgotPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { email } = req.body;
      const account = await prisma.users.findUnique({
        where: {
          email,
        },
      });

      if (!account || account.is_deleted) {
        throw "Account not found";
      }

      const token = createToken({
        id: account.id,
        password: account.password_hash,
      });

      await sendResetLinkEmail(email, "Reset Password", null, {
        email,
        token,
      });

      successResponse(res, "Please check your email");
    } catch (error) {
      next(error);
    }
  }

  async sendVerifyLink(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = res.locals.data.id;
      const { email } = req.body;

      const user = await prisma.users.findFirst({
        where: {
          id: userId,
          is_deleted: false,
        },
      })

      if (!user) {
        throw "User not found";
      }

      const token = createToken({
        id: user.id,
      });

      await sendVerifyEmail(
        email,
        "Verify Email",
        null,
        {
          email,
          token,
        }
      )

      successResponse(res, "Please check your email");
    } catch (error) {
      next(error);
    }
  }

  async resetPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { password } = req.body;
      const userId = res.locals.data.id;
      const newPassword = await hashPassword(password);

      const user = await prisma.users.findUnique({
        where: {
          id: userId,
        },
      })

      if (!user || user.is_deleted) {
        throw "User not found";
      }

      const account = await prisma.users.update({
        where: {
          id: userId,
        },
        data: {
          password_hash: newPassword,
        },
      });

      successResponse(res, "Password has been reset");
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
