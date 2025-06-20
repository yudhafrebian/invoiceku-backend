import cron from "node-cron";
import { scheduledEmailLogic, markOverdueInvoices } from "./utils/scheduledEmailLogic";
import { handleRecurringInvoice } from "./utils/handleRecurringInvoice";

cron.schedule("51 1 * * *", async () => {
  try {
    console.log("Cron running: sending scheduled emails, marking overdue, handling recurring...");
    const countEmails = await scheduledEmailLogic();
    const countOverdue = await markOverdueInvoices();
    const countRecurring = await handleRecurringInvoice();

    console.log(`Emails sent: ${countEmails}`);
    console.log(`Overdue marked: ${countOverdue}`);
    console.log(`Recurring invoices created: ${countRecurring}`);
  } catch (error: any) {
    console.error("Cron error:", error.message);
  }
});
