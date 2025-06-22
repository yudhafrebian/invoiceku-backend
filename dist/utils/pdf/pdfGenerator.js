"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateInvoicePDF = generateInvoicePDF;
const modernTemplate_1 = require("./templates/modernTemplate");
const minimalistTemplate_1 = require("./templates/minimalistTemplate");
const classicTemplate_1 = require("./templates/classicTemplate");
async function generateInvoicePDF(invoice, res, isDownload = false) {
    switch (invoice.template) {
        case "Minimalist":
            return (0, minimalistTemplate_1.generateMinimalistTemplate)(invoice, res, isDownload);
        case "Classic":
            return (0, classicTemplate_1.generateClassicTemplate)(invoice, res, isDownload);
        case "Modern":
        default:
            return (0, modernTemplate_1.generateModernTemplate)(invoice, res, isDownload);
    }
}
