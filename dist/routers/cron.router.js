"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = __importDefault(require("../middleware/verifier/verify"));
const cron_controller_1 = __importDefault(require("../controllers/cron.controller"));
class CronRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.verify = new verify_1.default();
        this.CronController = new cron_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.get("/send-schedule-email", this.CronController.runScheduleEmail);
    }
    getRouter() {
        return this.route;
    }
}
exports.default = CronRouter;
