import { Router } from "express";
import Verify from "../middleware/verifier/verify";
import CronController from "../controllers/cron.controller";

class CronRouter {
    private route: Router;
    private verify: Verify;
    private CronController: CronController;
    constructor() {
        this.route = Router();
        this.verify = new Verify();
        this.CronController = new CronController();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.route.get("/send-schedule-email", this.CronController.runScheduleEmail);
    }

    public getRouter(): Router {
        return this.route;
    }
}

export default CronRouter;