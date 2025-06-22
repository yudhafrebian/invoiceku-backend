import { Response } from "express";
import { Invoice } from "../pdfGenerator";
import { fillColor } from "pdfkit";

export async function generateModernTemplate(
  invoice: Invoice,
  res: Response,
  isDownload: boolean = false
) {
  const PDFDocument = require("pdfkit-table");
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

  doc.image("src/public/invoiceku-logo.png", { width: 80 });
  doc.moveDown();
  doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke();
  doc.moveDown();
  doc.fontSize(12).fillColor("#000");
  doc.text(`Invoice Number: ${invoice.invoice_number}`);
  doc.text(`Client: ${invoice.client.name}`);
  doc.text(
    `Invoice Date: ${new Date(invoice.start_date).toLocaleDateString("id-ID")}`
  );
  if (invoice.recurrence_type && invoice.recurrence_interval) {
    doc.text(`Recurring Type: ${invoice.recurrence_type}`);
    doc.text(
      `Recurring: Every ${
        invoice.recurrence_interval
      } ${invoice.recurrence_type.toLowerCase()}(s)`
    );
  }

  doc.text(
    `Due Date: ${new Date(invoice.due_date).toLocaleDateString("id-ID")}`
  );
  doc.moveDown();

  doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke();
  doc.moveDown();
  doc.moveDown();

  const tableData = {
    headers: [
      { label: "Item", property: "item", align: "left", width: 200, options: { fillColor: "#2b2b2b" } },
      { label: "Qty", property: "qty", align: "right", width: 50, options: { fillColor: "#2b2b2b" } },
      { label: "Price", property: "price", align: "right", width: 125, options: { fillColor: "#2b2b2b" } },
      { label: "Total", property: "total", align: "right", width: 125, options: { headerColor: "#2b2b2b" } },
    ],
    datas: invoice.invoice_items.map((item) => ({
      item: item.name_snapshot,
      qty: item.quantity,
      price: `Rp  ${item.price_snapshot.toLocaleString("id-ID")}`,
      total: `Rp ${(item.quantity * item.price_snapshot).toLocaleString("id-ID")}`,
      options: { separator: true },
    })),
  };
  
  doc.table(tableData, {
    prepareHeader: () => {
      doc.font("Helvetica-Bold").fontSize(12).fillColor("white"); // text color putih
    },
    prepareRow: (row: any, i: number) => {
      doc.font("Helvetica").fontSize(11).fillColor("black"); // reset warna ke hitam
    },
    padding: 5,
  });
  

  doc.moveDown();
  doc
    .font("Helvetica-Bold")
    .fontSize(12)
    .text(`Total: Rp ${invoice.total.toLocaleString("id-ID")}`, {
      align: "right",
    });

  doc.moveDown(2);
  doc.fontSize(10).font("Helvetica").fillColor("#555");
  doc.text(`Note: ${invoice.notes || "Thank you for your business!"}`);
  doc.text(`Generated on: ${new Date().toLocaleDateString("id-ID")}`);

  doc.end();
}
