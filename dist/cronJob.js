"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const axios_1 = __importDefault(require("axios"));
const BACKEND_URL = process.env.BASE_URL || "http://localhost:4000";
node_cron_1.default.schedule("0 23 * * *", async () => {
    try {
        console.log("Cron running: sending scheduled email invoice...");
        const response = await axios_1.default.post(`${BACKEND_URL}/invoice/send-email-auto`);
        console.log("Cron success:", response.data);
    }
    catch (error) {
        console.error("Cron error:", error.response?.data || error.message);
    }
});
