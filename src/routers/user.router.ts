import { Router } from "express";
import Verify from "../middleware/verifier/verify";
import UserController from "../controllers/user.controller";
import { uploaderMemory } from "../middleware/uploader";
import { userPaymentValidation } from "../middleware/validation/user";

class userRouter {
  private route: Router;
  private verify: Verify;
  private userController: UserController;
  constructor() {
    this.route = Router();
    this.verify = new Verify();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.route.use(this.verify.verifyToken);
    this.route.get("/profile", this.userController.getUser);
    this.route.get("/payment-method", this.userController.userPaymentMethod);
    this.route.get(
      "/payment-method/:id",
      this.userController.getSinglePaymentMethod
    );
    this.route.post(
      "/create-payment-method",
      uploaderMemory().single("qris_image_url"),
      userPaymentValidation,
      this.userController.createPaymentMethod
    );
    this.route.patch(
      "/update-profile",
      uploaderMemory().single("profile_img"),
      this.userController.updateUser
    );
    this.route.patch(
      "/switch-status/:id",
      this.userController.paymentMethodSwitchStatus
    );
    this.route.patch(
      "/update-payment-method/:id",
      uploaderMemory().single("qris_image_url"),
      userPaymentValidation,
      this.userController.updatePaymentMethod
    );
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default userRouter;
