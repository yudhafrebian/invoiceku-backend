import PDFDocument from "pdfkit-table";
import { Response } from "express";
import { Invoice } from "../pdfGenerator";

export async function generateClassicTemplate(
  invoice: Invoice,
  res: Response,
  isDownload: boolean = false
) {
  const doc = new PDFDocument({ margin: 50, size: "A4" });
  const buffers: Buffer[] = [];

  doc.on("data", buffers.push.bind(buffers));
  doc.on("end", () => {
    const pdfData = Buffer.concat(buffers);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `${isDownload ? "attachment" : "inline"}; filename=invoice-${
        invoice.client.name
      }-${invoice.invoice_number}.pdf`
    );
    res.send(pdfData);
  });

  doc.rect(30, 53, 535, 95).stroke();
  doc.image("src/public/invoiceku-logo.png", 400, 85, { width: 140 });
  doc.font("Times-Bold").fontSize(16).text("INVOICE", 40, 65);
  doc
    .font("Times-Roman")
    .fontSize(10)
    .text(`Invoice Number: ${invoice.invoice_number}`, 40, 85)
    .text(`Client: ${invoice.client.name}`, 40, 100)
    .text(
      `Invoice Date: ${new Date(invoice.start_date).toLocaleDateString("id-ID")}`,
      40,
      115
    );

    doc.fontSize(10);
    doc.text(`Due Date: ${new Date(invoice.due_date).toLocaleDateString("id-ID")}`,40, 130);
    if (invoice.recurrence_type && invoice.recurrence_interval) {
      doc.text(`Recurring Type: ${invoice.recurrence_type}`, 40, 145);
      doc.text(
        `Interval: Every ${invoice.recurrence_interval} ${invoice.recurrence_type.toLowerCase()}(s)`,
        40,
        160
      );
    }
  doc.moveDown();
  doc.moveTo(30, doc.y).lineTo(545, doc.y).stroke();

  // Tabel invoice
  const tableData = {
    headers: [
      { label: "Item", property: "item", width: 200 },
      { label: "Qty", property: "qty", width: 50 },
      { label: "Price", property: "price", width: 125 },
      { label: "Total", property: "total", width: 125 },
    ],
    rows: invoice.invoice_items.map((item) => [
      item.name_snapshot,
      item.quantity.toString(),
      `Rp ${item.price_snapshot.toLocaleString("id-ID")}`,
      `Rp ${(item.quantity * item.price_snapshot).toLocaleString("id-ID")}`,
    ]),
  };

  doc.moveDown(2);
  doc.table(tableData, {
    prepareHeader: () => {
      return doc
              .font("Times-Bold")
              .fillColor("#fff")
              .fontSize(10)
              .fillColor("black");
    },
    prepareRow: () => doc.font("Times-Roman").fontSize(10).fillColor("black"),
    columnSpacing: 5,
    padding: [6],
  });

  // Garis dan total
  doc.moveDown();
  doc
    .font("Times-Bold")
    .fontSize(12)
    .text(`Total: Rp ${invoice.total.toLocaleString("id-ID")}`, {
      align: "right",
    });

  doc.moveDown(2);
  doc.font("Times-Roman").fontSize(10).fillColor("#333");
  doc.text(`Catatan: ${invoice.notes || "Thank you for your business!"}`);
  doc.text(`Generated on: ${new Date().toLocaleDateString("id-ID")}`);

  doc.end();
}
