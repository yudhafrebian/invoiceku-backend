"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = __importDefault(require("../middleware/verifier/verify"));
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const product_1 = require("../middleware/validation/product");
class ProductRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.verify = new verify_1.default();
        this.productController = new product_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.get("/unit-product", this.productController.getUnitProduct);
        this.route.get("/type-product", this.productController.getTypeProduct);
        this.route.use(this.verify.verifyToken);
        this.route.get("/all-product", this.productController.getAllProduct);
        this.route.get("/single-product/:id", this.productController.getSingleProduct);
        this.route.post("/create-product", product_1.createProductValidation, this.productController.createProduct);
        this.route.patch("/update-product/:id", product_1.updateProductValidation, this.productController.updateProduct);
        this.route.patch("/delete-product/:id", this.productController.deleteProduct);
    }
    getRouter() {
        return this.route;
    }
}
exports.default = ProductRouter;
