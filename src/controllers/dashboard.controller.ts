import { Request, Response, NextFunction } from "express";
import { successResponse } from "../utils/response";
import { getSummaryService } from "../services/dashboard.service";

export const getSummary = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = res.locals.data.id;

    const summary = await getSummaryService(userId);

    successResponse(res, "Success", summary);
  } catch (error) {
    next(error);
  }
};
