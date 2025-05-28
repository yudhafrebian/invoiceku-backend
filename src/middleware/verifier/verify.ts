import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

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
      const checkToken:string | JwtPayload = verify(token, process.env.TOKEN_KEY || "sercretKey");

      console.log(checkToken);
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
      if (res.locals.data.isVerified) {
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
