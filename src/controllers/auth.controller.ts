import { Request, Response, NextFunction } from "express";
import prisma from "../configs/prisma";
import {
  createResponse,
  errorResponse,
  successResponse,
} from "../utils/response";
import { hashPassword } from "../utils/hashPassword";
import { createToken } from "../utils/createToken";
import { sendVerifyEmail, transporter } from "../configs/nodemailer";
import { compare } from "bcrypt";

class AuthController {
  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { first_name, last_name, phone, email, password } = req.body;
      const isExist = await prisma.users.findUnique({
        where: {
          email,
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

      if (!account) {
        throw "Account not found";
      }

      const comparePassword = await compare(
        req.body.password,
        account.password_hash
      );
      if (!comparePassword) {
        throw "Invalid password";
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
          "1h"
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

      if (!account) {
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
}

export default AuthController;
