"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const admin_controller_1 = tslib_1.__importDefault(require("./admin.controller"));
const checktoken_1 = tslib_1.__importDefault(require("../../middleware/checktoken"));
const router = (0, express_1.Router)();
exports.adminRouter = router
    .get('/admin', checktoken_1.default, admin_controller_1.default.GET_ADMIN)
    .post('/admin/signin', checktoken_1.default, admin_controller_1.default.SIGN_IN_ADMIN);
