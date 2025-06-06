import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { transporter } from "../../configs/nodemailer";

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
