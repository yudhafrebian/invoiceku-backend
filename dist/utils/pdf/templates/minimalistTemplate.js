"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMinimalistTemplate = generateMinimalistTemplate;
const pdfkit_table_1 = __importDefault(require("pdfkit-table"));
async function generateMinimalistTemplate(invoice, res, isDownload = false) {
    const doc = new pdfkit_table_1.default({ margin: 40, size: "A4" });
    const buffers = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
        const pdfData = Buffer.concat(buffers);
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `${isDownload ? "attachment" : "inline"}; filename=invoice-${invoice.client.name}-${invoice.invoice_number}.pdf`);
        res.send(pdfData);
    });
    // Header clean
    doc.font("Helvetica").fontSize(12).fillColor("#000");
    doc.image("src/public/invoiceku-logo.png", 40, 40, { width: 50 });
    doc.moveDown(2);
    doc.text(`Invoice #: ${invoice.invoice_number}`, { continued: true }).text(``, 350);
    doc.text(`Client: ${invoice.client.name}`);
    doc.text(`Invoice Date: ${new Date(invoice.start_date).toLocaleDateString("id-ID")}`);
    doc.text(`Due Date: ${new Date(invoice.due_date).toLocaleDateString("id-ID")}`);
    if (invoice.recurrence_type && invoice.recurrence_interval) {
        doc.text(`Recurring Type: ${invoice.recurrence_type}`);
        doc.text(`Recurring Every ${invoice.recurrence_interval} ${invoice.recurrence_type.toLowerCase()}(s)`);
    }
    doc.moveDown(1.5);
    // Table
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
        prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => {
            doc.font("Helvetica").fontSize(10).fillColor("#111");
            return doc;
        },
        padding: [4],
        columnSpacing: 12,
        hideHeader: false,
        width: 500,
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
    doc.text(`Note: ${invoice.notes || "Terima kasih telah bertransaksi."}`);
    doc.text(`Generated on: ${new Date().toLocaleDateString("id-ID")}`);
    doc.end();
}
