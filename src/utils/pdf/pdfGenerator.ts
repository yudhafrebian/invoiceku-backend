import { Response } from "express";
import { generateModernTemplate } from "./templates/modernTemplate";
import { generateMinimalistTemplate } from "./templates/minimalistTemplate";
import { generateClassicTemplate } from "./templates/classicTemplate";

export interface InvoiceItem {
  name_snapshot: string;
  quantity: number;
  price_snapshot: number;
}

export interface Invoice {
  invoice_number: string;
  client: { name: string };
  due_date: Date;
  start_date: string;
  invoice_items: InvoiceItem[];
  total: number;
  notes?: string;
  recurrence_type?: string;
  recurrence_interval?: number;
  template:string
}

export async function generateInvoicePDF(
  invoice: Invoice,
  res: Response,
  isDownload: boolean = false
) {
  switch (invoice.template) {
    case "Minimalist":
      return generateMinimalistTemplate(invoice, res, isDownload);
    case "Classic":
      return generateClassicTemplate(invoice, res, isDownload);
    case "Modern":
    default:
      return generateModernTemplate(invoice, res, isDownload);
  }
}
