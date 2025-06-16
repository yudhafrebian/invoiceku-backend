"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_controller_1 = __importDefault(require("../controllers/client.controller"));
const verify_1 = __importDefault(require("../middleware/verifier/verify"));
const client_1 = require("../middleware/validation/client");
class ClientRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.clientController = new client_controller_1.default();
        this.verify = new verify_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.get("/payment-method", this.clientController.getPaymentMethod);
        this.route.use(this.verify.verifyToken);
        this.route.get("/all-client", this.clientController.getAllClient);
        this.route.get("/single-client/:id", this.clientController.getSingleClient);
        this.route.post("/create-client", client_1.createClientValidation, this.clientController.createClient);
        this.route.patch("/update-client/:id", client_1.updateClientValidation, this.clientController.updateClient);
        this.route.patch("/delete-client/:id", this.clientController.deleteClient);
    }
    getRouter() {
        return this.route;
    }
}
exports.default = ClientRouter;
