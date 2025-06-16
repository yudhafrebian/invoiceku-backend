"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../configs/prisma"));
const response_1 = require("../utils/response");
const hashPassword_1 = require("../utils/hashPassword");
const createToken_1 = require("../utils/createToken");
const sendEmail_1 = require("../utils/email/sendEmail");
const bcrypt_1 = require("bcrypt");
class AuthController {
    async createUser(req, res, next) {
        try {
            const { first_name, last_name, phone, email, password } = req.body;
            const isExist = await prisma_1.default.users.findUnique({
                where: {
                    email,
                },
            });
            if (isExist) {
                (0, response_1.errorResponse)(res, `User with email ${email} already exist`, 400);
            }
            const newPassword = await (0, hashPassword_1.hashPassword)(password);
            const createAuth = await prisma_1.default.users.create({
                data: {
                    email,
                    password_hash: newPassword,
                },
            });
            const createUser = await prisma_1.default.user_profiles.create({
                data: {
                    first_name,
                    last_name,
                    phone,
                    user_id: createAuth.id,
                },
            });
            const token = (0, createToken_1.createToken)({
                id: createAuth.id,
                password: createAuth.password_hash,
            });
            await (0, sendEmail_1.sendVerifyEmail)(email, "Verify Email", null, {
                email,
                token,
            });
            (0, response_1.createResponse)(res, "Account created successfully", {
                user: createUser,
                auth: createAuth,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async login(req, res, next) {
        try {
            const account = await prisma_1.default.users.findUnique({
                where: {
                    email: req.body.email,
                },
            });
            if (!account) {
                throw "Invalid email or password";
            }
            const comparePassword = await (0, bcrypt_1.compare)(req.body.password, account.password_hash);
            if (!comparePassword) {
                throw "Invalid email or password";
            }
            const user = await prisma_1.default.user_profiles.findFirst({
                where: {
                    user_id: account.id,
                },
            });
            if (!user) {
                throw "User not found";
            }
            (0, response_1.successResponse)(res, "Login success", {
                first_name: user.first_name,
                last_name: user.last_name,
                email: account.email,
                is_verified: account.is_verified,
                phone: user.phone,
                profile_img: user.profile_img,
                token: (0, createToken_1.createToken)({
                    id: account.id,
                    is_verified: account.is_verified,
                }, "24h"),
            });
        }
        catch (error) {
            next(error);
        }
    }
    async keepLogin(req, res, next) {
        try {
            const account = await prisma_1.default.users.findUnique({
                where: {
                    id: res.locals.data.id,
                },
            });
            if (!account) {
                throw "Account not found";
            }
            const user = await prisma_1.default.user_profiles.findFirst({
                where: {
                    user_id: account.id,
                },
            });
            if (!user) {
                throw "User not found";
            }
            (0, response_1.successResponse)(res, "Keep login success", {
                first_name: user.first_name,
                last_name: user.last_name,
                email: account.email,
                is_verified: account.is_verified,
                phone: user.phone,
                profile_img: user.profile_img,
                token: (0, createToken_1.createToken)({
                    id: account.id,
                    is_verified: account.is_verified,
                }, "1h"),
            });
        }
        catch (error) {
            next(error);
        }
    }
    async verifyEmail(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const verify = await prisma_1.default.users.update({
                where: {
                    id: userId,
                },
                data: {
                    is_verified: true,
                },
            });
            (0, response_1.successResponse)(res, "Your email has been verified");
        }
        catch (error) {
            next(error);
        }
    }
    async forgotPassword(req, res, next) {
        try {
            const { email } = req.body;
            const account = await prisma_1.default.users.findUnique({
                where: {
                    email,
                },
            });
            if (!account) {
                throw "Account not found";
            }
            const token = (0, createToken_1.createToken)({
                id: account.id,
                password: account.password_hash,
            });
            await (0, sendEmail_1.sendResetLinkEmail)(email, "Reset Password", null, {
                email,
                token,
            });
            (0, response_1.successResponse)(res, "Please check your email");
        }
        catch (error) {
            next(error);
        }
    }
    async resetPassword(req, res, next) {
        try {
            const { password } = req.body;
            const userId = res.locals.data.id;
            const newPassword = await (0, hashPassword_1.hashPassword)(password);
            const account = await prisma_1.default.users.update({
                where: {
                    id: userId,
                },
                data: {
                    password_hash: newPassword,
                },
            });
            (0, response_1.successResponse)(res, "Password has been reset");
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = AuthController;
