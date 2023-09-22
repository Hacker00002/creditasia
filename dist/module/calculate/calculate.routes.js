"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const calculate_controller_1 = tslib_1.__importDefault(require("./calculate.controller"));
const router = (0, express_1.Router)();
exports.calculateRouter = router
    .post('/calculate/:company_id/:complex_id/:room_id/:bank_id', calculate_controller_1.default.CREATE_CALCULATE);
