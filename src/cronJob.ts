import cron from "node-cron";
import axios from "axios";

const BACKEND_URL = process.env.BASE_URL || "http://localhost:4000";

cron.schedule("*/2 * * * *", async () => {
  try {
    console.log("Cron running: sending scheduled email invoice...");
    const response = await axios.post(`${BACKEND_URL}/invoice/send-email-auto`);
    console.log("Cron success:", response.data);
  } catch (error: any) {
    console.error("Cron error:", error.response?.data || error.message);
  }
});
