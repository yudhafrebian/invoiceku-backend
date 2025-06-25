import { Recurrence } from "../../prisma/generated/client";

export interface CreateRecurringInvoiceInput {
    userId: number;
    client_id: number;
    invoice_number: string;
    start_date: string;
    notes?: string;
    recurrence_type: Recurrence;
    recurrence_interval: number;
    duration: number;
    due_in_days: number;
    total: number;
    payment_method: string;
    template: string;
    recurring_invoice_items: {
      product_id: number;
      name_snapshot: string;
      price_snapshot: number;
      quantity: number;
      total: number;
    }[];
  }