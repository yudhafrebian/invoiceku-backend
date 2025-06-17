import cron from "node-cron";
import { markOverdueInvoices, scheduledEmailLogic } from "./utils/scheduledEmailLogic";

cron.schedule("0 6 * * *", async () => {
  try {
    console.log("Cron running: sending scheduled email invoice...");
    const count = await scheduledEmailLogic();
    const countOverdue = await markOverdueInvoices()
    console.log(`Cron success: Sent ${count} invoice(s)`);
    console.log(`Cron success: Marked ${countOverdue} invoice(s) as Overdue`);
  } catch (error: any) {
    console.error("Cron error:", error.message);
  }
});
