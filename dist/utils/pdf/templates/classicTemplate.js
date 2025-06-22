"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateClassicTemplate = generateClassicTemplate;
const pdfkit_table_1 = __importDefault(require("pdfkit-table"));
async function generateClassicTemplate(invoice, res, isDownload = false) {
    const doc = new pdfkit_table_1.default({ margin: 50, size: "A4" });
    const buffers = [];
    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => {
        const pdfData = Buffer.concat(buffers);
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `${isDownload ? "attachment" : "inline"}; filename=invoice-${invoice.client.name}-${invoice.invoice_number}.pdf`);
        res.send(pdfData);
    });
    doc.font("Times-Roman").fontSize(12).fillColor("#000");
    doc.text("INVOICE", { align: "center" });
    doc.moveDown();
    doc.text(`Invoice Number : ${invoice.invoice_number}`);
    doc.text(`Client         : ${invoice.client.name}`);
    doc.text(`Invoice Date    : ${new Date(invoice.start_date).toLocaleDateString("id-ID")}`);
    doc.text(`Due Date        : ${new Date(invoice.due_date).toLocaleDateString("id-ID")}`);
    if (invoice.recurrence_type && invoice.recurrence_interval) {
        doc.text(`Recurring Type : ${invoice.recurrence_type}`);
        doc.text(`Interval        : Every ${invoice.recurrence_interval} ${invoice.recurrence_type.toLowerCase()}(s)`);
    }
    doc.moveDown();
    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke(); // garis pemisah
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
    doc.moveDown();
    doc.table(tableData, {
        prepareHeader: () => doc.font("Times-Bold").fontSize(11),
        prepareRow: () => doc.font("Times-Roman").fontSize(10),
        padding: [6],
    });
    doc.moveDown();
    doc.font("Times-Bold").text(`Total: Rp ${invoice.total.toLocaleString("id-ID")}`, {
        align: "right",
    });
    doc.moveDown(2);
    doc.font("Times-Roman").fontSize(10).fillColor("#333");
    doc.text(`Catatan: ${invoice.notes || "Harap bayar sebelum tanggal jatuh tempo."}`);
    doc.text(`Generated on: ${new Date().toLocaleDateString("id-ID")}`);
    doc.end();
}
