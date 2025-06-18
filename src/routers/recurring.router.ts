import { Router } from "express";
import Verify from "../middleware/verifier/verify";
import CronController from "../controllers/recurring.controller";
import { recurringInvoiceValidation } from "../middleware/validation/recurring-invoice";

class RecurringRouter {
  private route: Router;
  private verify: Verify;
  private CronController: CronController;
  constructor() {
    this.route = Router();
    this.verify = new Verify();
    this.CronController = new CronController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.route.get("/recurring-type", this.CronController.recurringType);
    this.route.use(this.verify.verifyToken);
    this.route.get("/all", this.CronController.getAllRecurringInvoice);
    this.route.use(this.verify.verifyStatus);
    this.route.post(
      "/create",
      recurringInvoiceValidation,
      this.CronController.createRecurringInvoice
    );
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default RecurringRouter;
