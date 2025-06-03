import { Router } from "express";
import ClientController from "../controllers/client.controller";
import Verify from "../middleware/verifier/verify";
import { createClientValidation, updateClientValidation } from "../middleware/validation/client";


class ClientRouter{
    private route: Router;
    private clientController: ClientController;
    private verify: Verify
    constructor(){
        this.route = Router();
        this.clientController = new ClientController();
        this.verify = new Verify();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.route.get("/payment-method", this.clientController.getPaymentMethod)
        this.route.use(this.verify.verifyToken);
        this.route.get("/all-client", this.clientController.getAllClient);
        this.route.get("/single-client/:id", this.clientController.getSingleClient);
        this.route.post("/create-client", createClientValidation, this.clientController.createClient);
        this.route.patch("/update-client/:id", updateClientValidation, this.clientController.updateClient);
        this.route.patch("/delete-client/:id", this.clientController.deleteClient);
    }

    public getRouter(): Router {
        return this.route;
    }
}

export default ClientRouter