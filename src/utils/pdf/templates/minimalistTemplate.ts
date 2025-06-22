import PDFDocument from "pdfkit-table";
import { Response } from "express";
import { Invoice } from "../pdfGenerator";

export async function generateMinimalistTemplate(
  invoice: Invoice,
  res: Response,
  isDownload: boolean = false
) {
  const doc = new PDFDocument({ margin: 40, size: "A4" });
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

  // Header clean
  doc.font("Helvetica").fontSize(12).fillColor("#000");
  doc.image("src/public/invoiceku-logo.png", 40, 40, { width: 50 });

  doc.moveDown(2);
  doc.text(`Invoice ` ).text(`:#${invoice.invoice_number}`, 60);
  doc.text(`Client `).text(`: ${invoice.client.name}`, 60);
  doc.text(
    `Invoice Date `,
    { continued: true },
  ).text(
      `${new Date(invoice.start_date).toLocaleDateString("id-ID")}`,60
  );
  doc.text(
    `Due Date `,
    { continued: true },
  ).text(
      `${new Date(invoice.due_date).toLocaleDateString("id-ID")}`,60
  );

  if (invoice.recurrence_type && invoice.recurrence_interval) {
    doc.text(`Recurring Type `, { continued: true }).text(`:${invoice.recurrence_type}`, 60);
    doc.text(
      `Recurring Every `,
      { continued: true },
    ).text(
        `${invoice.recurrence_interval} ${invoice.recurrence_type.toLowerCase()}(s)`,60
    );
  }

  doc.moveDown(1.5);

  // Table
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
              .fillColor("#fff")
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
}
