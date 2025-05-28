import { Router } from "express";
import {
  signInValidation,
  signUpValidation,
} from "../middleware/validation/auth";
import AuthController from "../controllers/auth.controller";
import Verify from "../middleware/verifier/verify";

class AuthRouter {
  private route: Router;
  private authController: AuthController;
  private verify: Verify;
  constructor() {
    this.route = Router();
    this.authController = new AuthController();
    this.verify = new Verify();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.route.post(
      "/signup",
      signUpValidation,
      this.authController.createUser
    );
    this.route.post("/signin", signInValidation, this.authController.login);
    this.route.get("/verify", this.authController.verifyEmail);
    this.route.get(
      "/keep-login",
      this.verify.verifyToken,
      this.authController.keepLogin
    );
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default AuthRouter;
