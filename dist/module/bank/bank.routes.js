"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bankRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const bank_controller_1 = tslib_1.__importDefault(require("./bank.controller"));
const checktoken_1 = tslib_1.__importDefault(require("../../middleware/checktoken"));
const router = (0, express_1.Router)();
exports.bankRouter = router
    .get('/bank', bank_controller_1.default.GET_ALL_BANK)
    .post('/admin/bank/create', checktoken_1.default, bank_controller_1.default.CREATE_BANK)
    .patch('/admin/bank/update', checktoken_1.default, bank_controller_1.default.UPDATE_BANK)
    .delete('/admin/bank/delete/:id', checktoken_1.default, bank_controller_1.default.DELETE_BANK);
