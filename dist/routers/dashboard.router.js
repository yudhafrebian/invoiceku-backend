"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = __importDefault(require("../middleware/verifier/verify"));
const dashboard_controller_1 = __importDefault(require("../controllers/dashboard.controller"));
class DashboardRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.verify = new verify_1.default();
        this.DashboardController = new dashboard_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.use(this.verify.verifyToken);
        this.route.get("/summary", this.DashboardController.getSummary);
    }
    getRouter() {
        return this.route;
    }
}
exports.default = DashboardRouter;
