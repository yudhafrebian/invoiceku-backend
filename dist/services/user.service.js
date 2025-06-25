"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.switchPaymentMethodStatusService = exports.updatePaymentMethodService = exports.getSinglePaymentMethodService = exports.createPaymentMethodService = exports.getUserPaymentMethodsService = exports.updateUserService = exports.getUserService = void 0;
const cloudinary_1 = require("../configs/cloudinary");
const prisma_1 = __importDefault(require("../configs/prisma"));
const getUserService = async (userId) => {
    const user = await prisma_1.default.users.findFirst({
        where: {
            id: userId,
            is_deleted: false,
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
    return { user, user_profile };
};
exports.getUserService = getUserService;
const updateUserService = async (userId, data) => {
    const { first_name, last_name, phone, email, file } = data;
    let profileImage;
    if (file) {
        const upload = await (0, cloudinary_1.cloudUpload)(file);
        profileImage = upload.secure_url;
    }
    const userProfile = await prisma_1.default.user_profiles.findFirst({
        where: { user_id: userId },
    });
    if (!userProfile) {
        throw "User profile not found";
    }
    const currentUser = await prisma_1.default.users.findFirst({
        where: { id: userId, is_deleted: false },
    });
    if (!currentUser) {
        throw "User not found";
    }
    if (email !== currentUser.email) {
        const checkEmail = await prisma_1.default.users.findFirst({
            where: { email, is_deleted: false },
        });
        if (checkEmail) {
            throw `Email ${email} already exists`;
        }
    }
    const updateUser = await prisma_1.default.users.update({
        where: { id: userId },
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
        where: { id: userProfile.id },
        data: {
            first_name,
            last_name,
            phone,
            ...(profileImage && { profile_img: profileImage }),
        },
    });
    return {
        updateUser,
        updateUserProfile,
    };
};
exports.updateUserService = updateUserService;
const getUserPaymentMethodsService = async (userId) => {
    const userPaymentMethod = await prisma_1.default.user_payment_method.findMany({
        where: { user_id: userId },
    });
    return userPaymentMethod;
};
exports.getUserPaymentMethodsService = getUserPaymentMethodsService;
const createPaymentMethodService = async (input) => {
    const { user_id, account_name, account_number, payment_method, file } = input;
    const isExist = await prisma_1.default.user_payment_method.findFirst({
        where: {
            user_id,
            payment_method,
        },
    });
    if (isExist) {
        throw `Payment method ${payment_method} already exists`;
    }
    let paymentMethodImage;
    if (file) {
        const upload = await (0, cloudinary_1.cloudUpload)(file);
        paymentMethodImage = upload.secure_url;
    }
    const created = await prisma_1.default.user_payment_method.create({
        data: {
            user_id,
            account_name,
            account_number,
            payment_method,
            ...(paymentMethodImage && { qris_image_url: paymentMethodImage }),
        },
    });
    return created;
};
exports.createPaymentMethodService = createPaymentMethodService;
const getSinglePaymentMethodService = async (id) => {
    const paymentMethod = await prisma_1.default.user_payment_method.findUnique({
        where: { id },
    });
    if (!paymentMethod) {
        throw "Payment method not found";
    }
    return paymentMethod;
};
exports.getSinglePaymentMethodService = getSinglePaymentMethodService;
const updatePaymentMethodService = async (id, data) => {
    const current = await prisma_1.default.user_payment_method.findUnique({
        where: { id },
    });
    if (!current) {
        throw "Payment method not found";
    }
    let paymentMethodImage;
    if (data.file) {
        const upload = await (0, cloudinary_1.cloudUpload)(data.file);
        paymentMethodImage = upload.secure_url;
    }
    const updated = await prisma_1.default.user_payment_method.update({
        where: { id },
        data: {
            payment_method: data.payment_method,
            account_name: data.account_name,
            account_number: data.account_number,
            ...(paymentMethodImage && { qris_image_url: paymentMethodImage }),
        },
    });
    return updated;
};
exports.updatePaymentMethodService = updatePaymentMethodService;
const switchPaymentMethodStatusService = async (id) => {
    const current = await prisma_1.default.user_payment_method.findUnique({
        where: { id },
    });
    if (!current) {
        throw "Payment method not found";
    }
    const updated = await prisma_1.default.user_payment_method.update({
        where: { id },
        data: {
            is_active: !current.is_active,
        },
    });
    return updated;
};
exports.switchPaymentMethodStatusService = switchPaymentMethodStatusService;
const deleteUserService = async (userId) => {
    const user = await prisma_1.default.users.findFirst({
        where: {
            id: userId,
            is_deleted: false,
        },
    });
    if (!user) {
        throw "User not found";
    }
    const deleted = await prisma_1.default.users.update({
        where: {
            id: userId,
        },
        data: {
            is_deleted: true,
        },
    });
    return deleted;
};
exports.deleteUserService = deleteUserService;
