import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { Request, Response, NextFunction, Application } from "express";
import AuthRouter from "./routers/auth.router";
import UserRouter from "./routers/user.router";
import ProductRouter from "./routers/product.router";
import ClientRouter from "./routers/client.router";
import InvoiceRouter from "./routers/invoice.router";
import TransactionRouter from "./routers/transaction.router";
import prisma from "./configs/prisma";
import RecurringRouter from "./routers/recurring.router";
import DashboardRouter from "./routers/dashboard.router";

const PORT = process.env.PORT || 4000;

class App {
  app: Application;

  constructor() {
    this.app = express();
    this.configure();
    this.route();
    this.errorHandler();
  }

  private configure(): void {
    this.app.use(
      cors({
        origin: [
          "http://localhost:3000",
          "https://invoiceku-purwadhika.vercel.app",
        ],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        credentials: true,
      })
    );

    this.app.use(express.urlencoded({ extended: true }));

    this.app.use(express.json());
  }

  private route(): void {
    const authRouter = new AuthRouter();
    const userRouter = new UserRouter();
    const productRouter = new ProductRouter();
    const clientRouter = new ClientRouter();
    const invoiceRouter = new InvoiceRouter();
    const transactionRouter = new TransactionRouter();
    const recurringRouter = new RecurringRouter();
    const dashboardRouter = new DashboardRouter();
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).send("BASE API");
    });
    this.app.use("/dashboard", dashboardRouter.getRouter());
    this.app.use("/recurring-invoice", recurringRouter.getRouter());
    this.app.use("/auth", authRouter.getRouter());
    this.app.use("/user", userRouter.getRouter());
    this.app.use("/product", productRouter.getRouter());
    this.app.use("/client", clientRouter.getRouter());
    this.app.use("/invoice", invoiceRouter.getRouter());
    this.app.use("/transaction", transactionRouter.getRouter());
  }

  private errorHandler(): void {
    this.app.use(
      (error: any, req: Request, res: Response, next: NextFunction) => {
        console.log(error);
        res.status(500).send({
          success: false,
          message: "Server Error",
          error,
        });
      }
    );
  }

  public async start(): Promise<void> {
    try {
      await prisma.$connect();
      console.log("✅ Connected to DB");

      this.app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
      });

      await import("./cronJob")
        .then(() => console.log("✅ CronJob started"))
        .catch((err) => console.error("❌ Failed to start CronJob:", err));
    } catch (error) {
      console.error("❌ Server failed to start:", error);
      process.exit(1);
    }
  }
}

export default App;
