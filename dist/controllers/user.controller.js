"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../utils/response");
const user_service_1 = require("../services/user.service");
class UserController {
    async getUser(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const data = await (0, user_service_1.getUserService)(userId);
            (0, response_1.successResponse)(res, "Success", data);
        }
        catch (error) {
            next(error);
        }
    }
    async updateUser(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { first_name, last_name, phone, email } = req.body;
            const result = await (0, user_service_1.updateUserService)(userId, {
                first_name,
                last_name,
                phone,
                email,
                file: req.file,
            });
            (0, response_1.successResponse)(res, "Profile has been updated", result);
        }
        catch (error) {
            next(error);
        }
    }
    async userPaymentMethod(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const methods = await (0, user_service_1.getUserPaymentMethodsService)(userId);
            (0, response_1.successResponse)(res, "Success", methods);
        }
        catch (error) {
            next(error);
        }
    }
    async createPaymentMethod(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const { account_name, account_number, payment_method } = req.body;
            const created = await (0, user_service_1.createPaymentMethodService)({
                user_id: userId,
                account_name,
                account_number,
                payment_method,
                file: req.file,
            });
            (0, response_1.createResponse)(res, "Your payment method has been created", created);
        }
        catch (error) {
            next(error);
        }
    }
    async getSinglePaymentMethod(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const paymentMethod = await (0, user_service_1.getSinglePaymentMethodService)(id);
            (0, response_1.successResponse)(res, "Success", paymentMethod);
        }
        catch (error) {
            next(error);
        }
    }
    async updatePaymentMethod(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const { payment_method, account_name, account_number } = req.body;
            const updated = await (0, user_service_1.updatePaymentMethodService)(id, {
                payment_method,
                account_name,
                account_number,
                file: req.file,
            });
            (0, response_1.successResponse)(res, "Payment method has been updated", updated);
        }
        catch (error) {
            next(error);
        }
    }
    async paymentMethodSwitchStatus(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const updated = await (0, user_service_1.switchPaymentMethodStatusService)(id);
            (0, response_1.successResponse)(res, "Payment method has been updated", updated);
        }
        catch (error) {
            if (error === "Payment method not found") {
                (0, response_1.errorResponse)(res, error);
            }
            else {
                next(error);
            }
        }
    }
    async deleteUser(req, res, next) {
        try {
            const userId = res.locals.data.id;
            const deletedUser = await (0, user_service_1.deleteUserService)(userId);
            (0, response_1.successResponse)(res, "User has been deleted", deletedUser);
        }
        catch (error) {
            next(error);
        }
    }
    ;
}
exports.default = UserController;
