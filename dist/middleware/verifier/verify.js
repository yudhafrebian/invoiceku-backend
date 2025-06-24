"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = __importDefault(require("../../configs/prisma"));
class Verify {
    async verifyToken(req, res, next) {
        try {
            const token = req.header("Authorization")?.split(" ")[1];
            if (!token) {
                throw "Token not found";
            }
            const checkToken = (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_KEY || "sercretKey");
            res.locals.data = checkToken;
            next();
        }
        catch (error) {
            next(error);
        }
    }
    async verifyStatus(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const user = await prisma_1.default.users.findUnique({
                where: {
                    id: userId,
                },
            });
            if (!user) {
                throw "User not found";
            }
            if (res.locals.data.is_verified || user.is_verified) {
                next();
            }
            else {
                throw "Please Verify Your Account First";
            }
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = Verify;
