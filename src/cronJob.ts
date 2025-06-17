import cron from "node-cron";
import { scheduledEmailLogic } from "./utils/scheduledEmailLogic";

cron.schedule("*/10 * * * *", async () => {
  try {
    console.log("Cron running: sending scheduled email invoice...");
    const count = await scheduledEmailLogic();
    console.log(`Cron success: Sent ${count} invoice(s)`);
  } catch (error: any) {
    console.error("Cron error:", error.message);
  }
});
