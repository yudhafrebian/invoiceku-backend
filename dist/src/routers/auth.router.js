"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/validation/auth");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const verify_1 = __importDefault(require("../middleware/verifier/verify"));
class AuthRouter {
    constructor() {
        this.route = (0, express_1.Router)();
        this.authController = new auth_controller_1.default();
        this.verify = new verify_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.route.post("/signup", auth_1.signUpValidation, this.authController.createUser);
        this.route.post("/signin", auth_1.signInValidation, this.authController.login);
        this.route.post("/forgot-password", auth_1.forgotPasswordValidation, this.authController.forgotPassword);
        this.route.use(this.verify.verifyToken);
        this.route.patch("/verify", this.authController.verifyEmail);
        this.route.patch("/reset-password", this.authController.resetPassword);
        this.route.get("/keep-login", this.authController.keepLogin);
    }
    getRouter() {
        return this.route;
    }
}
exports.default = AuthRouter;
