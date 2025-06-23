"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../configs/prisma"));
const response_1 = require("../utils/response");
const cloudinary_1 = require("../configs/cloudinary");
class UserController {
    async getUser(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const user = await prisma_1.default.users.findUnique({
                where: {
                    id: userId,
                },
                select: {
                    email: true,
                    is_verified: true,
                },
            });
            const user_profile = await prisma_1.default.user_profiles.findFirst({
                where: {
                    user_id: userId,
                },
            });
            (0, response_1.successResponse)(res, "Success", { user, user_profile });
        }
        catch (error) {
            next(error);
        }
    }
    async updateUser(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { first_name, last_name, phone, email } = req.body;
            let profileImage;
            if (req.file) {
                const upload = await (0, cloudinary_1.cloudUpload)(req.file);
                profileImage = upload.secure_url;
            }
            const userProfile = await prisma_1.default.user_profiles.findFirst({
                where: { user_id: userId },
            });
            if (!userProfile) {
                throw "User profile not found";
            }
            const currentUser = await prisma_1.default.users.findUnique({
                where: { id: userId },
            });
            if (!currentUser) {
                throw "User not found";
            }
            if (email !== currentUser.email) {
                const checkEmail = await prisma_1.default.users.findUnique({
                    where: { email },
                });
                if (checkEmail) {
                    throw `Email ${email} already exists`;
                }
            }
            const updateUser = await prisma_1.default.users.update({
                where: {
                    id: userId,
                },
                data: {
                    email,
                    ...(email !== currentUser.email && { is_verified: false }),
                },
                select: {
                    email: true,
                    is_verified: true,
                },
            });
            const updateUserProfile = await prisma_1.default.user_profiles.update({
                where: {
                    id: userProfile.id,
                },
                data: {
                    first_name,
                    last_name,
                    phone,
                    ...(profileImage && { profile_img: profileImage }),
                },
            });
            (0, response_1.successResponse)(res, "Profile has been updated", {
                updateUser,
                updateUserProfile,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async userPaymentMethod(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const userPaymentMethod = await prisma_1.default.user_payment_method.findMany({
                where: {
                    user_id: userId,
                },
            });
            (0, response_1.successResponse)(res, "Success", userPaymentMethod);
        }
        catch (error) {
            next(error);
        }
    }
    async createPaymentMethod(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { payment_method, account_name, account_number } = req.body;
            console.log(req.body);
            const isExist = await prisma_1.default.user_payment_method.findFirst({
                where: {
                    user_id: userId,
                    payment_method,
                },
            });
            if (isExist) {
                throw `Payment method ${req.body.payment_method} already exist`;
            }
            let paymentMethodImage;
            if (req.file) {
                const upload = await (0, cloudinary_1.cloudUpload)(req.file);
                paymentMethodImage = upload.secure_url;
            }
            const create = await prisma_1.default.user_payment_method.create({
                data: {
                    user_id: userId,
                    account_name,
                    account_number,
                    payment_method,
                    ...(paymentMethodImage && { qris_image_url: paymentMethodImage }),
                },
            });
            (0, response_1.createResponse)(res, "Your payment method has been created", create);
        }
        catch (error) {
            next(error);
        }
    }
    async getSinglePaymentMethod(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const paymentMethod = await prisma_1.default.user_payment_method.findUnique({
                where: { id },
            });
            if (!paymentMethod) {
                throw "Payment method not found";
            }
            (0, response_1.successResponse)(res, "Success", paymentMethod);
        }
        catch (error) {
            next(error);
        }
    }
    async updatePaymentMethod(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const current = await prisma_1.default.user_payment_method.findUnique({
                where: { id },
            });
            if (!current) {
                throw "Payment method not found";
            }
            const { payment_method, account_name, account_number } = req.body;
            let paymentMethodImage;
            if (req.file) {
                const upload = await (0, cloudinary_1.cloudUpload)(req.file);
                paymentMethodImage = upload.secure_url;
            }
            const update = await prisma_1.default.user_payment_method.update({
                where: { id },
                data: {
                    account_name,
                    account_number,
                    payment_method,
                    ...(paymentMethodImage && { qris_image_url: paymentMethodImage }),
                },
            });
            (0, response_1.successResponse)(res, "Payment method has been updated", update);
        }
        catch (error) {
            next(error);
        }
    }
    async paymentMethodSwitchStatus(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const current = await prisma_1.default.user_payment_method.findUnique({
                where: { id },
            });
            if (!current) {
                res.status(404).json({ message: "Payment method not found" });
                return;
            }
            const switchStatus = await prisma_1.default.user_payment_method.update({
                where: { id },
                data: {
                    is_active: !current.is_active,
                },
            });
            (0, response_1.successResponse)(res, "Payment method has been updated", switchStatus);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = UserController;
