"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordService = exports.sendResetLinkService = exports.sendVerifyLinkService = exports.forgotPasswordService = exports.verifyEmailService = exports.keepLoginService = exports.loginService = exports.createUserService = void 0;
const bcrypt_1 = require("bcrypt");
const prisma_1 = __importDefault(require("../configs/prisma"));
const createToken_1 = require("../utils/createToken");
const sendEmail_1 = require("../utils/email/sendEmail");
const hashPassword_1 = require("../utils/hashPassword");
const sendEmail_2 = require("../utils/email/sendEmail");
const createUserService = async ({ first_name, last_name, phone, email, password, }) => {
    const isExist = await prisma_1.default.users.findFirst({
        where: {
            email,
            is_deleted: false,
        },
    });
    if (isExist) {
        throw new Error(`User with email ${email} already exist`);
    }
    const newPassword = await (0, hashPassword_1.hashPassword)(password);
    const createAuth = await prisma_1.default.users.create({
        data: {
            email,
            password_hash: newPassword,
        },
    });
    const rawPhone = String(phone);
    const normalizedPhone = rawPhone.startsWith("62")
        ? rawPhone
        : `62${rawPhone}`;
    const createUser = await prisma_1.default.user_profiles.create({
        data: {
            first_name,
            last_name,
            phone: normalizedPhone,
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
    return {
        user: createUser,
        auth: createAuth,
    };
};
exports.createUserService = createUserService;
const loginService = async (email, password) => {
    const account = await prisma_1.default.users.findUnique({
        where: { email },
    });
    if (!account || account.is_deleted) {
        throw new Error("Invalid email or password");
    }
    const isMatch = await (0, bcrypt_1.compare)(password, account.password_hash);
    if (!isMatch) {
        throw new Error("Invalid email or password");
    }
    const user = await prisma_1.default.user_profiles.findFirst({
        where: { user_id: account.id },
    });
    if (!user) {
        throw new Error("User not found");
    }
    const token = (0, createToken_1.createToken)({
        id: account.id,
        is_verified: account.is_verified,
    }, "24h");
    return {
        first_name: user.first_name,
        last_name: user.last_name,
        email: account.email,
        is_verified: account.is_verified,
        phone: user.phone,
        profile_img: user.profile_img,
        token,
    };
};
exports.loginService = loginService;
const keepLoginService = async (userId) => {
    const account = await prisma_1.default.users.findUnique({
        where: { id: userId },
    });
    if (!account || account.is_deleted) {
        throw new Error("Account not found");
    }
    const user = await prisma_1.default.user_profiles.findFirst({
        where: { user_id: account.id },
    });
    if (!user) {
        throw new Error("User not found");
    }
    const token = (0, createToken_1.createToken)({
        id: account.id,
        is_verified: account.is_verified,
    }, "1h");
    return {
        first_name: user.first_name,
        last_name: user.last_name,
        email: account.email,
        is_verified: account.is_verified,
        phone: user.phone,
        profile_img: user.profile_img,
        token,
    };
};
exports.keepLoginService = keepLoginService;
const verifyEmailService = async (userId) => {
    const user = await prisma_1.default.users.findUnique({
        where: { id: userId },
    });
    if (!user || user.is_deleted) {
        throw new Error("User not found");
    }
    await prisma_1.default.users.update({
        where: { id: userId },
        data: { is_verified: true },
    });
};
exports.verifyEmailService = verifyEmailService;
const forgotPasswordService = async (email) => {
    const account = await prisma_1.default.users.findUnique({
        where: { email },
    });
    if (!account || account.is_deleted) {
        throw new Error("Account not found");
    }
    const token = (0, createToken_1.createToken)({
        id: account.id,
        password: account.password_hash,
    });
    await (0, sendEmail_2.sendResetLinkEmail)(email, "Reset Password", null, {
        email,
        token,
    });
};
exports.forgotPasswordService = forgotPasswordService;
const sendVerifyLinkService = async (userId, email) => {
    const user = await prisma_1.default.users.findFirst({
        where: {
            id: userId,
            is_deleted: false,
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    const token = (0, createToken_1.createToken)({
        id: user.id,
    });
    await (0, sendEmail_1.sendVerifyEmail)(email, "Verify Email", null, {
        email,
        token,
    });
};
exports.sendVerifyLinkService = sendVerifyLinkService;
const sendResetLinkService = async (userId, email) => {
    const user = await prisma_1.default.users.findFirst({
        where: {
            id: userId,
            is_deleted: false,
        },
    });
    if (!user) {
        throw new Error("User not found");
    }
    const token = (0, createToken_1.createToken)({
        id: user.id,
    });
    await (0, sendEmail_2.sendResetLinkEmail)(email, "Reset Password", null, {
        email,
        token,
    });
};
exports.sendResetLinkService = sendResetLinkService;
const resetPasswordService = async (userId, password) => {
    const user = await prisma_1.default.users.findUnique({
        where: { id: userId },
    });
    if (!user || user.is_deleted) {
        throw new Error("User not found");
    }
    const newPassword = await (0, hashPassword_1.hashPassword)(password);
    await prisma_1.default.users.update({
        where: { id: userId },
        data: { password_hash: newPassword },
    });
};
exports.resetPasswordService = resetPasswordService;
