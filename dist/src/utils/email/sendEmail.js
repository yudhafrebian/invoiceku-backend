"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendInvoiceEmail = exports.sendResetLinkEmail = exports.sendVerifyEmail = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const nodemailer_1 = require("../../configs/nodemailer");
const sendVerifyEmail = async (emailTo, subject, content, data) => {
    try {
        const templatePath = path_1.default.join(__dirname, "../../templates/verify.hbs");
        const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
        const templateCompile = handlebars_1.default.compile(templateSource);
        const generateHtml = templateCompile(data);
        await nodemailer_1.transporter.sendMail({
            from: process.env.MAIL_SENDER,
            to: emailTo,
            subject,
            html: content || generateHtml,
        });
    }
    catch (error) {
        throw error;
    }
};
exports.sendVerifyEmail = sendVerifyEmail;
const sendResetLinkEmail = async (emailTo, subject, content, data) => {
    try {
        const templatePath = path_1.default.join(__dirname, "../../templates/resetLink.hbs");
        const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
        const templateCompile = handlebars_1.default.compile(templateSource);
        const generateHtml = templateCompile(data);
        await nodemailer_1.transporter.sendMail({
            from: process.env.MAIL_SENDER,
            to: emailTo,
            subject,
            html: content || generateHtml,
        });
    }
    catch (error) {
        throw error;
    }
};
exports.sendResetLinkEmail = sendResetLinkEmail;
const sendInvoiceEmail = async (emailTo, subject, content, data, pdfBuffer) => {
    try {
        const templatePath = path_1.default.join(__dirname, "../../templates/invoice.hbs");
        const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
        const templateCompile = handlebars_1.default.compile(templateSource);
        const generateHtml = templateCompile(data);
        await nodemailer_1.transporter.sendMail({
            from: process.env.MAIL_SENDER,
            to: emailTo,
            subject,
            html: content || generateHtml,
            attachments: pdfBuffer ? [{ filename: `invoice-${data?.name}.pdf`, content: pdfBuffer, contentType: "application/pdf" }] : [],
        });
    }
    catch (error) {
        throw error;
    }
};
exports.sendInvoiceEmail = sendInvoiceEmail;
