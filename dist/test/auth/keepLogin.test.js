"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
const appTest = new app_1.default().app;
describe("Test Keep Login", () => {
    it("Should return status 200", async () => {
        const respone = (await (0, supertest_1.default)(appTest).get("/auth/keep-login"));
    });
});
