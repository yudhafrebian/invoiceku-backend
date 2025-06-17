"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const auth_router_1 = __importDefault(require("./routers/auth.router"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const product_router_1 = __importDefault(require("./routers/product.router"));
const client_router_1 = __importDefault(require("./routers/client.router"));
const invoice_router_1 = __importDefault(require("./routers/invoice.router"));
const transaction_router_1 = __importDefault(require("./routers/transaction.router"));
const prisma_1 = __importDefault(require("./configs/prisma"));
// import "./cronJob";
const PORT = process.env.PORT || 4000;
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.configure();
        this.route();
        this.errorHandler();
    }
    configure() {
        this.app.use((0, cors_1.default)({
            origin: ["http://localhost:3000", "https://invoiceku.vercel.app"],
            methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
            credentials: true,
        }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
            res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            res.header("Access-Control-Allow-Credentials", "true");
            if (req.method === "OPTIONS") {
                res.sendStatus(200);
                return;
            }
            next();
        });
    }
    route() {
        const authRouter = new auth_router_1.default();
        const userRouter = new user_router_1.default();
        const productRouter = new product_router_1.default();
        const clientRouter = new client_router_1.default();
        const invoiceRouter = new invoice_router_1.default();
        const transactionRouter = new transaction_router_1.default();
        this.app.get("/", (req, res) => {
            res.status(200).send("BASE API");
        });
        this.app.get("/healthz", (req, res) => {
            res.status(200).json({ status: "ok" });
        });
        this.app.use("/auth", authRouter.getRouter());
        this.app.use("/user", userRouter.getRouter());
        this.app.use("/product", productRouter.getRouter());
        this.app.use("/client", clientRouter.getRouter());
        this.app.use("/invoice", invoiceRouter.getRouter());
        this.app.use("/transaction", transactionRouter.getRouter());
    }
    errorHandler() {
        this.app.use((error, req, res, next) => {
            console.log(error);
            res.status(500).send({
                success: false,
                message: "Server Error",
                error,
            });
        });
    }
    async start() {
        try {
            await prisma_1.default.$connect();
            console.log("✅ Connected to DB");
            // Mulai listen setelah DB connect
            this.app.listen(PORT, () => {
                console.log(`🚀 Server is running on port ${PORT}`);
            });
            // Import cronJob setelah DB dan server sudah ready
            // await import("./cronJob")
            //   .then(() => console.log("✅ CronJob started"))
            //   .catch((err) => console.error("❌ Failed to start CronJob:", err));
        }
        catch (error) {
            console.error("❌ Server failed to start:", error);
            process.exit(1);
        }
    }
}
exports.default = App;
