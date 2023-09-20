"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = require("express");
const room_controller_1 = tslib_1.__importDefault(require("./room.controller"));
const router = (0, express_1.Router)();
exports.roomRouter = router
    .post('/admin/room/create', room_controller_1.default.CREATE_ROOM)
    .patch('/admin/room/update/:id', room_controller_1.default.UPDATE_ROOM)
    .delete('/admin/room/delete/:id', room_controller_1.default.DELETE_ROOM);
