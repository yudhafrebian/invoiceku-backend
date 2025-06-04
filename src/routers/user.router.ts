import { Router } from "express";
import Verify from "../middleware/verifier/verify";
import UserController from "../controllers/user.controller";
import { uploaderMemory } from "../middleware/uploader";

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
    this.route.patch("/update-profile", uploaderMemory().single("profile_img"), this.userController.updateUser);
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default userRouter;
