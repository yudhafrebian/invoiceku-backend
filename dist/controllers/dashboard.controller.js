"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSummary = void 0;
const response_1 = require("../utils/response");
const dashboard_service_1 = require("../services/dashboard.service");
const getSummary = async (req, res, next) => {
    try {
        const userId = res.locals.data.id;
        const summary = await (0, dashboard_service_1.getSummaryService)(userId);
        (0, response_1.successResponse)(res, "Success", summary);
    }
    catch (error) {
        next(error);
    }
};
exports.getSummary = getSummary;
