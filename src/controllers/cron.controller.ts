import { NextFunction, Request, Response } from "express";
import { scheduledEmailLogic } from "../utils/scheduledEmailLogic";
import { successResponse } from "../utils/response";

class CronController {
  async runScheduleEmail(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const secret = req.query.secret;
      if (secret !== process.env.CRON_SECRET) {
        throw "Invalid secret";
      }

      const count = await scheduledEmailLogic();
      successResponse(res, "Email has been sent successfully", { count });
    } catch (error: any) {
      next(error);
    }
  }
}


export default CronController