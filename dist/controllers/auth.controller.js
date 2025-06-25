"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../utils/response");
const auth_service_1 = require("../services/auth.service");
class AuthController {
    async createUser(req, res, next) {
        try {
            const { first_name, last_name, phone, email, password } = req.body;
            const result = await (0, auth_service_1.createUserService)({
                first_name,
                last_name,
                phone,
                email,
                password,
            });
            (0, response_1.createResponse)(res, "Account created successfully", result);
        }
        catch (error) {
            if (error.message.includes("already exist")) {
                (0, response_1.errorResponse)(res, error.message, 400);
            }
            else {
                next(error);
            }
        }
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const result = await (0, auth_service_1.loginService)(email, password);
            (0, response_1.successResponse)(res, "Login success", result);
        }
        catch (error) {
            if (error.message === "Invalid email or password" ||
                error.message === "User not found") {
                (0, response_1.errorResponse)(res, error.message, 401);
            }
            else {
                next(error);
            }
        }
    }
    async keepLogin(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const result = await (0, auth_service_1.keepLoginService)(userId);
            (0, response_1.successResponse)(res, "Keep login success", result);
        }
        catch (error) {
            if (error.message === "Account not found" ||
                error.message === "User not found") {
                (0, response_1.errorResponse)(res, error.message, 404);
            }
            else {
                next(error);
            }
        }
    }
    async verifyEmail(req, res, next) {
        try {
            const userId = res.locals.data.id;
            await (0, auth_service_1.verifyEmailService)(userId);
            (0, response_1.successResponse)(res, "Your email has been verified");
        }
        catch (error) {
            if (error.message === "User not found") {
                (0, response_1.errorResponse)(res, error.message, 404);
            }
            else {
                next(error);
            }
        }
    }
    async forgotPassword(req, res, next) {
        try {
            const { email } = req.body;
            await (0, auth_service_1.forgotPasswordService)(email);
            (0, response_1.successResponse)(res, "Please check your email");
        }
        catch (error) {
            if (error.message === "Account not found") {
                (0, response_1.errorResponse)(res, error.message, 404);
            }
            else {
                next(error);
            }
        }
    }
    async sendVerifyLink(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { email } = req.body;
            await (0, auth_service_1.sendVerifyLinkService)(userId, email);
            (0, response_1.successResponse)(res, "Please check your email");
        }
        catch (error) {
            if (error.message === "User not found") {
                (0, response_1.errorResponse)(res, error.message, 404);
            }
            else {
                next(error);
            }
        }
    }
    async sendResetLink(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { email } = req.body;
            await (0, auth_service_1.sendResetLinkService)(userId, email);
            (0, response_1.successResponse)(res, "Please check your email");
        }
        catch (error) {
            if (error.message === "User not found") {
                (0, response_1.errorResponse)(res, error.message, 404);
            }
            else {
                next(error);
            }
        }
    }
    async resetPassword(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { password } = req.body;
            await (0, auth_service_1.resetPasswordService)(userId, password);
            (0, response_1.successResponse)(res, "Password has been reset");
        }
        catch (error) {
            if (error.message === "User not found") {
                (0, response_1.errorResponse)(res, error.message, 404);
            }
            else {
                next(error);
            }
        }
    }
}
exports.default = AuthController;
