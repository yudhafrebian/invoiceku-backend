import request from "supertest";
import App from "../../src/app";

const appTest = new App().app;

describe("Test Sign In",() => {
    it("Should return status 200", async () => {
        const respone = await request(appTest).post("/auth/signin").send({
            email: "test@mail.com",
            password: "Test123."
        });
        expect(respone.status).toBe(200);
        expect(respone.body).toHaveProperty("message");
    })
})