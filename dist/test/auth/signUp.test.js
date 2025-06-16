"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../src/app"));
const appTest = new app_1.default().app;
it("Should return status 201 and a success message", async () => {
    const response = await (0, supertest_1.default)(appTest).post("/auth/signup").send({
        first_name: "test",
        last_name: "test",
        phone: "081234567890",
        email: "test@mail.com",
        password: "Test123.",
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("message");
}, 10000);
describe("Sign Up - Bad Case", () => {
    it("Should return 400 for invalid email", async () => {
        const response = await (0, supertest_1.default)(appTest).post("/auth/signup").send({
            first_name: "test",
            last_name: "test",
            phone: "081234567890",
            email: "invalid-email",
            password: "Test123.",
        });
        expect(response.status).toBe(400);
    });
    it("Should return 400 for weak password", async () => {
        const response = await (0, supertest_1.default)(appTest).post("/auth/signup").send({
            first_name: "test",
            last_name: "test",
            phone: "081234567890",
            email: "test@mail.com",
            password: "123",
        });
        expect(response.status).toBe(400);
    });
    it("Should return 400 for missing fields", async () => {
        const response = await (0, supertest_1.default)(appTest).post("/auth/signup").send({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            phone: "",
        });
        expect(response.status).toBe(400);
    });
});
