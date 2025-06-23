"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const recurring_router_1 = __importDefault(require("./routers/recurring.router"));
const dashboard_router_1 = __importDefault(require("./routers/dashboard.router"));
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
            origin: [
                "http://localhost:3000",
                "https://invoiceku-purwadhika.vercel.app",
            ],
            methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
            credentials: true,
        }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.json());
    }
    route() {
        const authRouter = new auth_router_1.default();
        const userRouter = new user_router_1.default();
        const productRouter = new product_router_1.default();
        const clientRouter = new client_router_1.default();
        const invoiceRouter = new invoice_router_1.default();
        const transactionRouter = new transaction_router_1.default();
        const recurringRouter = new recurring_router_1.default();
        const dashboardRouter = new dashboard_router_1.default();
        this.app.get("/", (req, res) => {
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
            console.log("Connected to DB");
            this.app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
            await Promise.resolve().then(() => __importStar(require("./cronJob"))).then(() => console.log("CronJob started"))
                .catch((err) => console.error("Failed to start CronJob:", err));
        }
        catch (error) {
            console.error("Server failed to start:", error);
            process.exit(1);
        }
    }
}
exports.default = App;
