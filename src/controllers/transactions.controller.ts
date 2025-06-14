import { Response, Request, NextFunction } from "express";
import prisma from "../configs/prisma";
import { createResponse, successResponse } from "../utils/response";

class TransactionController {
    async createTransaction(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const userId = res.locals.data.id;
            const createTransaction = await prisma.transaction.create({
                data: {
                    user_id: userId,
                    ...req.body,
                },
            });
    
            createResponse(res, "Transaction has been created", createTransaction);
        } catch (error) {
            next(error);
        }
    }
}