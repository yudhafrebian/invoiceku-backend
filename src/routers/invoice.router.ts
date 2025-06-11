import { Router } from "express";
import Verify from "../middleware/verifier/verify";
import InvoiceController from "../controllers/invoice.controller";


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
        this.route.use(this.verify.verifyToken);
        this.route.get("/all-invoice", this.InvoiceController.getAllInvoice);
        this.route.use(this.verify.verifyStatus)
        this.route.post("/create-invoice", this.InvoiceController.createInvoice);
    }
    public getRouter():Router{
        return this.route;
    }
}

export default InvoiceRouter