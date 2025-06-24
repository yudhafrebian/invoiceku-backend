import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import prisma from "../../configs/prisma";

class Verify {
  async verifyToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const token = req.header("Authorization")?.split(" ")[1];
      if (!token) {
        throw "Token not found";
      }
      const checkToken: string | JwtPayload = verify(
        token,
        process.env.TOKEN_KEY || "sercretKey"
      );
      res.locals.data = checkToken;
      next();
    } catch (error) {
      next(error);
    }
  }

  async verifyStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> {
    try {
      const userId = res.locals.data.id;
      const user = await prisma.users.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        throw "User not found";
      }

      if (res.locals.data.is_verified || user.is_verified) {
        next();
      } else {
        throw "Please Verify Your Account First";
      }
    } catch (error) {
      next(error);
    }
  }
}

export default Verify;
