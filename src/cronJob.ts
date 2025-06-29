import cron from "node-cron";
import { scheduledEmailLogic, markOverdueInvoices } from "./utils/scheduledEmailLogic";
import { handleRecurringInvoice } from "./utils/handleRecurringInvoice";

cron.schedule("06 1 * * *", async () => {
  try {
    console.log("Cron running: sending scheduled emails, marking overdue, handling recurring...");
    const countOverdue = await markOverdueInvoices();
    const countEmails = await scheduledEmailLogic();
    const countRecurring = await handleRecurringInvoice();

    console.log(`Emails sent: ${countEmails}`);
    console.log(`Overdue marked: ${countOverdue}`);
    console.log(`Recurring invoices created: ${countRecurring}`);
  } catch (error: any) {
    console.error("Cron error:", error.message);
  }
});
