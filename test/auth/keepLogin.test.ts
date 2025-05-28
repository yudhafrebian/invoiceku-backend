import request from "supertest";
import App from "../../src/app";

const appTest = new App().app;

describe("Test Keep Login",() => {
    it("Should return status 200", async () => {
        const respone = (await request(appTest).get("/auth/keep-login"));
    })
})