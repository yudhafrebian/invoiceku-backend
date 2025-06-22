import { Router } from "express";
import Verify from "../middleware/verifier/verify";
import InvoiceController from "../controllers/invoice.controller";
import { invoiceValidation } from "../middleware/validation/invoice";


class InvoiceRouter {
    private route:Router
    private verify:Verify
    private InvoiceController: InvoiceController

    constructor(){
        this.route = Router();
        this.verify = new Verify();
        this.InvoiceController = new InvoiceController();
        this.initializeRoutes();
    }

    private initializeRoutes():void{
        this.route.post("/preview", this.InvoiceController.previewInvoicePDF)
        this.route.post("/send-email-auto", this.InvoiceController.scheduledEmailInvoice);
        this.route.get("/status", this.InvoiceController.getInvoiceStatus);
        this.route.get("/template-style", this.InvoiceController.getTemplates);
        this.route.get("/download/:id", this.InvoiceController.downloadPdf);
        this.route.get("/detail/:invoice_number", this.InvoiceController.DetailInvoice);
        this.route.use(this.verify.verifyToken);
        this.route.get("/all-invoice", this.InvoiceController.getAllInvoice);
        this.route.get("/detail-payment/:invoice_number", this.InvoiceController.detailPayment);
        this.route.post("/send-email-payment/:invoice_number", this.InvoiceController.sendInvoiceEmail);
        this.route.patch("/update-status/:invoice_number", this.InvoiceController.updateInvoiceStatus);
        this.route.use(this.verify.verifyStatus)
        this.route.post("/create-invoice", invoiceValidation, this.InvoiceController.createInvoice);
    }
    public getRouter():Router{
        return this.route;
    }
}

export default InvoiceRouter