"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const scheduledEmailLogic_1 = require("./utils/scheduledEmailLogic");
node_cron_1.default.schedule("*/10 * * * *", async () => {
    try {
        console.log("Cron running: sending scheduled email invoice...");
        const count = await (0, scheduledEmailLogic_1.scheduledEmailLogic)();
        console.log(`Cron success: Sent ${count} invoice(s)`);
    }
    catch (error) {
        console.error("Cron error:", error.message);
    }
});
