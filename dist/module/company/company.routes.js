"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const company_controller_1 = tslib_1.__importDefault(require("./company.controller"));
const checktoken_1 = tslib_1.__importDefault(require("../../middleware/checktoken"));
const router = (0, express_1.Router)();
exports.companyRouter = router
    .get('/company', company_controller_1.default.GET_COMPANY)
    .post('/admin/company/create', checktoken_1.default, company_controller_1.default.CREATE_COMPANY)
    .patch('/admin/company/update/:id', checktoken_1.default, company_controller_1.default.UPDATE_COMPANY)
    .delete('/admin/company/delete/:id', checktoken_1.default, company_controller_1.default.DELETE_COMPANY);
