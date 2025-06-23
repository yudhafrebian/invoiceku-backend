import { Response } from "express";
import { Invoice } from "../pdfGenerator";

export async function generateModernTemplate(
  invoice: Invoice,
) {
  const PDFDocument = require("pdfkit-table");
  const doc = new PDFDocument({ margin: 50, size: "A4" });
  const buffers: Buffer[] = [];
  doc.on("data", buffers.push.bind(buffers));

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
      {
        label: "Item",
        property: "item",
        width: 200,
        headerColor: "#222",
        headerOpacity: 1,
        align: "left",
        divider: {
          horizontal: { disabled: false, width: 1, opacity: 1 },
          header: { disabled: false, width: 1, opacity: 1 },
          vertical: { disabled: false, width: 0.5, opacity: 0.5 },
        },
      },
      {
        label: "Qty",
        property: "qty",
        width: 50,
        headerColor: "#222",
        headerOpacity: 1,
        align: "right",
        divider: {
          horizontal: { disabled: false, width: 1, opacity: 1 },
          header: { disabled: false, width: 1, opacity: 1 },
          vertical: { disabled: false, width: 0.5, opacity: 0.5 },
        },
      },
      {
        label: "Price",
        property: "price",
        width: 125,
        headerColor: "#222",
        headerOpacity: 1,
        align: "right",
        divider: {
          horizontal: { disabled: false, width: 2, opacity: 1 },
          header: { disabled: false, width: 2, opacity: 1 },
          vertical: { disabled: false, width: 0.5, opacity: 0.5 },
        },
      },
      {
        label: "Total",
        property: "total",
        width: 125,
        headerColor: "#222",
        headerOpacity: 1,
        align: "right",
        divider: {
          horizontal: { disabled: false, width: 1, opacity: 1 },
          header: { disabled: false, width: 1, opacity: 1 },
          vertical: { disabled: false, width: 0.5, opacity: 0.5 },
        },
      },
    ],
    datas: invoice.invoice_items.map((item) => ({
      item: item.name_snapshot,
      qty: item.quantity.toString(),
      price: `Rp ${item.price_snapshot.toLocaleString("id-ID")}`,
      total: `Rp ${(item.quantity * item.price_snapshot).toLocaleString(
        "id-ID"
      )}`,
    })),
  };

  doc.table(tableData, {
    prepareHeader: () =>
      doc.font("Helvetica-Bold").fontSize(12).fillColor("white"),
    prepareRow: () => doc.font("Helvetica").fontSize(11).fillColor("black"),
    padding: 6,
    columnSpacing: 5,
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
  return new Promise((resolve) => {
    doc.on("end", () => resolve(Buffer.concat(buffers)));
  });
}
