"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const company_controller_1 = tslib_1.__importDefault(require("./company.controller"));
const router = (0, express_1.Router)();
exports.companyRouter = router
    .get('/admin/company', company_controller_1.default.GET_COMPANY)
    .post('/admin/company/create', company_controller_1.default.CREATE_COMPANY)
    .patch('/admin/company/update/:id', company_controller_1.default.UPDATE_COMPANY)
    .delete('/admin/company/delete/:id', company_controller_1.default.DELETE_COMPANY);
