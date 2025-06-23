import PDFDocument from "pdfkit-table";
import { Response } from "express";
import { Invoice } from "../pdfGenerator";

export async function generateMinimalistTemplate(
  invoice: Invoice,
) {
  const doc = new PDFDocument({ margin: 40, size: "A4" });
  const buffers: Buffer[] = [];
  doc.on("data", buffers.push.bind(buffers));

  const labelX = 40;
  const valueX = 130;
  let currentY = doc.y;

  const addRow = (label: string, value: string) => {
    doc.text(label, labelX, currentY);
    doc.text(`: ${value}`, valueX, currentY);
    currentY = doc.y + 4; 
  };

  

  // Header clean
  doc.font("Helvetica").fontSize(12).fillColor("#000");
  doc.image("src/public/invoiceku-logo.png", 450, 50, { width: 80 });

  doc.moveDown(2);
  addRow("Invoice", `#${invoice.invoice_number}`);
  addRow("Client", invoice.client.name);
  addRow(
    "Invoice Date",
    new Date(invoice.start_date).toLocaleDateString("id-ID")
  );
  addRow("Due Date", new Date(invoice.due_date).toLocaleDateString("id-ID"));

  if (invoice.recurrence_type && invoice.recurrence_interval) {
    addRow("Recurring Type", invoice.recurrence_type);
    addRow(
      "Recurring Every",
      `${
        invoice.recurrence_interval
      } ${invoice.recurrence_type.toLowerCase()}(s)`
    );
  }

doc.moveDown(1.5);
doc.x = 40; 

const tableData = {
  headers: [
    { label: "Item", property: "item", width: 215 },
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

doc.table(tableData, {
  prepareHeader: () => {
    return doc
      .font("Helvetica-Bold")
      .fontSize(10)
      .fillColor("black");
  },
  prepareRow: () => doc.font("Helvetica").fontSize(10).fillColor("black"),
  columnSpacing: 5,
  padding: [6],
});


  doc.moveDown();
  doc
    .font("Helvetica-Bold")
    .fontSize(11)
    .text(`Total: Rp ${invoice.total.toLocaleString("id-ID")}`, {
      align: "right",
    });

  doc.moveDown(2);
  doc.font("Helvetica").fontSize(10).fillColor("#555");
  doc.text(`Note: ${invoice.notes || "Thank you for your business!"}`);
  doc.text(`Generated on: ${new Date().toLocaleDateString("id-ID")}`);

  doc.end();
  return new Promise((resolve) => {
    doc.on("end", () => resolve(Buffer.concat(buffers)));
  });
}
