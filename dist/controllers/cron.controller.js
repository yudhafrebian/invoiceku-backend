"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scheduledEmailLogic_1 = require("../utils/scheduledEmailLogic");
const response_1 = require("../utils/response");
class CronController {
    async runScheduleEmail(req, res, next) {
        try {
            const secret = req.query.secret;
            if (secret !== process.env.CRON_SECRET) {
                throw "Invalid secret";
            }
            const count = await (0, scheduledEmailLogic_1.scheduledEmailLogic)();
            (0, response_1.successResponse)(res, "Email has been sent successfully", { count });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = CronController;
