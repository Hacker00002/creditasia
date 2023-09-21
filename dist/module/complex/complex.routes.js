"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complexRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const complex_controller_1 = tslib_1.__importDefault(require("./complex.controller"));
const checktoken_1 = tslib_1.__importDefault(require("../../middleware/checktoken"));
const router = (0, express_1.Router)();
exports.complexRouter = router
    .get('/complex', complex_controller_1.default.GET_COMPLEX)
    .get('/complex/:roomid', complex_controller_1.default.GET_COMPLEX_WITH_ID)
    .post('/admin/complex/create', checktoken_1.default, complex_controller_1.default.CREATE_COMPLEX)
    .patch('/admin/complex/update/:id', checktoken_1.default, complex_controller_1.default.UPDATE_COMPLEX)
    .delete('/admin/complex/delete/:id', checktoken_1.default, complex_controller_1.default.DELETE_COMPLEX);
