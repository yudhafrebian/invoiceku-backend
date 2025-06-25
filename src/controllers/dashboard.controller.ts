import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";
import { getSummaryService } from "../services/dashboard.service";

class DashboardController {
  async getSummary(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userId = res.locals.data.id;
  
      const summary = await getSummaryService(userId);
  
      successResponse(res, "Success", summary);
    } catch (error) {
      next(error);
    }
  }
}


export default DashboardController;