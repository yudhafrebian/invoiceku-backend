"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
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
            console.log("Verify", res.locals.data);
            if (res.locals.data.is_verified) {
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
