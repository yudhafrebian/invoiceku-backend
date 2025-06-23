"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInvoicePDF = generateInvoicePDF;
const modernTemplate_1 = require("./templates/modernTemplate");
const minimalistTemplate_1 = require("./templates/minimalistTemplate");
const classicTemplate_1 = require("./templates/classicTemplate");
async function generateInvoicePDF(invoice, res, isDownload = false) {
    let buffer;
    switch (invoice.template) {
        case "Minimalist":
            buffer = (await (0, minimalistTemplate_1.generateMinimalistTemplate)(invoice));
            break;
        case "Classic":
            buffer = (await (0, classicTemplate_1.generateClassicTemplate)(invoice));
            break;
        case "Modern":
        default:
            buffer = (await (0, modernTemplate_1.generateModernTemplate)(invoice));
            break;
    }
    if (res) {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `${isDownload ? "attachment" : "inline"}; filename=invoice-${invoice.invoice_number}.pdf`);
        res.send(buffer);
    }
    else {
        return buffer;
    }
}
