import { Router } from "express";
import Verify from "../middleware/verifier/verify";
import { recurringInvoiceValidation } from "../middleware/validation/recurring-invoice";
import RecurringController from "../controllers/recurring.controller";

class RecurringRouter {
  private route: Router;
  private verify: Verify;
  private RecurringController: RecurringController;
  constructor() {
    this.route = Router();
    this.verify = new Verify();
    this.RecurringController = new RecurringController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.route.get("/recurring-type", this.RecurringController.recurringType);
    this.route.post("/preview", this.RecurringController.previewRecurringInvoicePDF);
    this.route.get("/detail/:invoice_number", this.RecurringController.DetailRecurringInvoice);
    this.route.get("/download/:invoice_number", this.RecurringController.downloadPdf);
    this.route.use(this.verify.verifyToken);
    this.route.get("/all", this.RecurringController.getAllRecurringInvoice);
    this.route.get("/all/children/:invoice_number", this.RecurringController.getRecurringInvoiceChildren);
    this.route.get("/detail-payment/:invoice_number", this.RecurringController.detailPayment);
    this.route.post("/send-email/:invoice_number", this.RecurringController.sendRecurringInvoiceEmail);
    this.route.use(this.verify.verifyStatus);
    this.route.post(
      "/create",
      recurringInvoiceValidation,
      this.RecurringController.createRecurringInvoice
    );
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default RecurringRouter;
