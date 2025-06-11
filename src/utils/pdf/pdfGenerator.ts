import PDFDocument from "pdfkit";
import { Response } from "express";

interface InvoiceItem {
  name_snapshot: string;
  quantity: number;
  price_snapshot: number;
}

interface Invoice {
  invoice_number: string;
  client: {
    name: string;
  };
  due_date: string;
  invoice_items: InvoiceItem[];
  total: number;
}

export function generateInvoicePDF(invoice: Invoice, res: Response) {

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `inline; filename=invoice-${invoice.invoice_number}.pdf`
  );

  const doc = new PDFDocument();
  doc.pipe(res);

  doc.fontSize(20).text(`Invoice #${invoice.invoice_number}`);
  doc.moveDown();
  doc.text(`Client: ${invoice.client.name}`);
  doc.text(`Due Date: ${invoice.due_date}`);
  doc.moveDown();

  invoice.invoice_items.forEach((item) => {
    doc.text(
      `${item.name_snapshot} - ${item.quantity} x Rp${item.price_snapshot}`
    );
  });

  doc.moveDown();
  doc.text(`Total: Rp${invoice.total}`);
  doc.end();
}
