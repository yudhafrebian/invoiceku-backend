import { Router } from "express";
import Verify from "../middleware/verifier/verify";
import TransactionController from "../controllers/transactions.controller";
import { uploaderMemory } from "../middleware/uploader";

class TransactionRouter {
  private route: Router;
  private verify: Verify;
  private transactionController: TransactionController;

  constructor() {
    this.route = Router();
    this.verify = new Verify();
    this.transactionController = new TransactionController();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.route.use(this.verify.verifyToken);
    this.route.post(
        "/create-transaction/:invoice_number",
        uploaderMemory().single("payment_proof"),
        this.transactionController.createTransaction
      );
      this.route.get("/payment-proof/:invoice_number", this.transactionController.getPaymentProof);
  }

  public getRouter(): Router {
    return this.route;
  }
}

export default TransactionRouter;