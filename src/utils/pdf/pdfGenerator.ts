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
  start_date: Date;
  invoice_items: InvoiceItem[];
  total: number;
  notes?: string;
  recurrence_type?: string;
  recurrence_interval?: number;
  template: string;
}

export async function generateInvoicePDF(
  invoice: Invoice,
  res?: Response,
  isDownload: boolean = false
): Promise<Buffer | undefined> {
  let buffer: Buffer;

  switch (invoice.template) {
    case "Minimalist":
      buffer = (await generateMinimalistTemplate(invoice)) as Buffer;
      break;
    case "Classic":
      buffer = (await generateClassicTemplate(invoice)) as Buffer;
      break;
    case "Modern":
    default:
      buffer = (await generateModernTemplate(invoice)) as Buffer;
      break;
  }

  if (res) {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `${isDownload ? "attachment" : "inline"}; filename=invoice-${
        invoice.invoice_number
      }.pdf`
    );
    res.send(buffer);
  } else {
    return buffer;
  }
}
