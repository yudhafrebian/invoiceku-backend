import { Router } from "express";
import Verify from "../middleware/verifier/verify";
import UserController from "../controllers/user.controller";

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
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default userRouter;
