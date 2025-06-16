"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_1 = __importDefault(require("../middleware/verifier/verify"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const uploader_1 = require("../middleware/uploader");
const user_1 = require("../middleware/validation/user");
class userRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.verify = new verify_1.default();
        this.userController = new user_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.use(this.verify.verifyToken);
        this.route.get("/profile", this.userController.getUser);
        this.route.get("/payment-method", this.userController.userPaymentMethod);
        this.route.get("/payment-method/:id", this.userController.getSinglePaymentMethod);
        this.route.post("/create-payment-method", (0, uploader_1.uploaderMemory)().single("qris_image_url"), user_1.userPaymentValidation, this.userController.createPaymentMethod);
        this.route.patch("/update-profile", (0, uploader_1.uploaderMemory)().single("profile_img"), this.userController.updateUser);
        this.route.patch("/switch-status/:id", this.userController.paymentMethodSwitchStatus);
        this.route.patch("/update-payment-method/:id", (0, uploader_1.uploaderMemory)().single("qris_image_url"), user_1.userPaymentValidation, this.userController.updatePaymentMethod);
    }
    getRouter() {
        return this.route;
    }
}
exports.default = userRouter;
