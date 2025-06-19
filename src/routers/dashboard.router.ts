import { Router } from "express";
import Verify from "../middleware/verifier/verify";
import DashboardController from "../controllers/dashboard.controller";

class DashboardRouter {
    private route:Router;
    private verify:Verify;
    private DashboardController: DashboardController;
    constructor(){
        this.route = Router();
        this.verify = new Verify();
        this.DashboardController = new DashboardController();
        this.initializeRoutes();
    }

    private initializeRoutes():void{
        this.route.use(this.verify.verifyToken);
        this.route.get("/summary", this.DashboardController.getSummary);
    }

    public getRouter():Router{
        return this.route;
    }
}

export default DashboardRouter;