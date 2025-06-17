import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { transporter } from "../../configs/nodemailer";
import { generateInvoicePDF } from "../pdf/pdfGenerator";

export const sendVerifyEmail = async (
  emailTo: string,
  subject: string,
  content?: string | null,
  data?: { email: string; token: string }
) => {
  try {
    const templatePath = path.join(__dirname, "../../templates/verify.hbs");
    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const templateCompile = handlebars.compile(templateSource);
    const generateHtml = templateCompile(data);

    await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: emailTo,
      subject,
      html: content || generateHtml,
    });
  } catch (error) {
    throw error;
  }
};

export const sendResetLinkEmail = async (
  emailTo: string,
  subject: string,
  content?: string | null,
  data?: { email: string; token: string }
) => {
  try {
    const templatePath = path.join(__dirname, "../../templates/resetLink.hbs");
    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const templateCompile = handlebars.compile(templateSource);
    const generateHtml = templateCompile(data);

    await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: emailTo,
      subject,
      html: content || generateHtml,
    });
  } catch (error) {
    throw error;
  }
};

export const sendInvoiceEmail = async (
  emailTo: string,
  subject: string,
  content?: string | null,
  data?: { name: string; invoice_number: string, token: string },
  pdfBuffer?: Buffer
) => {
  try {
    const templatePath = path.join(__dirname, "../../templates/invoice.hbs");
    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const templateCompile = handlebars.compile(templateSource);
    const generateHtml = templateCompile(data);


    await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: emailTo,
      subject,
      html: content || generateHtml,
      attachments: pdfBuffer ? [{ filename: `invoice-${data?.name}.pdf`, content: pdfBuffer, contentType: "application/pdf" }] : [],
    });
  } catch (error) {
    throw error;
  }
};

export const sendStatusEmail = async (
  emailTo: string,
  subject: string,
  content?: string | null,
  data?: { name: string; invoice_number: string, client_name: string, status: string },
  pdfBuffer?: Buffer
) => {
  try {
    const templatePath = path.join(__dirname, "../../templates/payment-confirmating.hbs");
    const templateSource = fs.readFileSync(templatePath, "utf-8");
    const templateCompile = handlebars.compile(templateSource);
    const generateHtml = templateCompile(data);


    await transporter.sendMail({
      from: process.env.MAIL_SENDER,
      to: emailTo,
      subject,
      html: content || generateHtml,
      attachments: pdfBuffer ? [{ filename: `invoice-${data?.name}.pdf`, content: pdfBuffer, contentType: "application/pdf" }] : [],
    });
  } catch (error) {
    throw error;
  }
};


