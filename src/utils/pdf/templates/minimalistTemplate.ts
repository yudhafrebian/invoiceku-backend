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

  doc.font("Helvetica").fontSize(12).fillColor("#000");

  doc.text("INVOICE", { align: "center" });
  doc.moveDown();
  doc.text(`Invoice #: ${invoice.invoice_number}`);
  doc.text(`Client: ${invoice.client.name}`);
  doc.text(
    `Invoice Date: ${new Date(invoice.start_date).toLocaleDateString("id-ID")}`
  );
  doc.text(
    `Due Date: ${new Date(invoice.due_date).toLocaleDateString("id-ID")}`
  );

  if (invoice.recurrence_type && invoice.recurrence_interval) {
    doc.text(`Recurring Type: ${invoice.recurrence_type}`);
    doc.text(
      `Recurring: Every ${invoice.recurrence_interval} ${invoice.recurrence_type.toLowerCase()}(s)`
    );
  }

  doc.moveDown();

  const tableData = {
    headers: ["Item", "Qty", "Price", "Total"],
    rows: invoice.invoice_items.map((item) => [
        item.name_snapshot,
        item.quantity.toString(),
        `Rp ${item.price_snapshot.toLocaleString("id-ID")}`,
        `Rp ${(item.quantity * item.price_snapshot).toLocaleString("id-ID")}`,
      ]),      
  };

  doc.table(tableData, {
    prepareHeader: () => doc.font("Helvetica-Bold").fontSize(11),
    prepareRow: (
        row?: any,
        indexColumn?: number,
        indexRow?: number,
        rectRow?: any,
        rectCell?: any
      ) => {
        doc.font("Helvetica").fontSize(10);
        return doc;
      },
      
    padding: [4],
    columnSpacing: 10,
    hideHeader: false,
    width: 500,
  });

  doc.moveDown();
  doc.font("Helvetica-Bold").text(`Total: Rp ${invoice.total.toLocaleString("id-ID")}`, {
    align: "right",
  });

  doc.moveDown(2);
  doc.font("Helvetica").fontSize(10).fillColor("#555");
  doc.text(`Note: ${invoice.notes || "Terima kasih telah bertransaksi."}`);
  doc.text(`Generated on: ${new Date().toLocaleDateString("id-ID")}`);

  doc.end();
}
