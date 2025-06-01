import { Router } from "express";
import Verify from "../middleware/verifier/verify";
import ProductController from "../controllers/product.controller";

class ProductRouter {
    private route: Router
    private verify: Verify;
    private productController: ProductController;
    constructor(){
        this.route = Router();
        this.verify = new Verify()
        this.productController = new ProductController();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.route.get("/unit-product", this.productController.getUnitProduct );
        this.route.get("/type-product", this.productController.getTypeProduct );
        this.route.use(this.verify.verifyToken)
        this.route.get("/all-product", this.productController.getAllProduct )
        this.route.post("/create-product", this.productController.createProduct )
    }

    public getRouter(): Router {
        return this.route;
    }
}

export default ProductRouter;