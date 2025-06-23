import { Router } from "express";
import {
  forgotPasswordValidation,
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
    this.route.post("/forgot-password",forgotPasswordValidation, this.authController.forgotPassword);
    this.route.use(this.verify.verifyToken);
    this.route.patch("/verify", this.authController.verifyEmail);
    this.route.post("/send-verify-email", this.authController.sendVerifyLink);
    this.route.post("/send-reset-email", this.authController.sendResetLink);
    this.route.patch("/reset-password", this.authController.resetPassword);
    this.route.get("/keep-login", this.authController.keepLogin);
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default AuthRouter;
