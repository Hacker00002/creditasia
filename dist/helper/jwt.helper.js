"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const sign = (payload) => jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY);
const verify = (token) => jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
exports.default = {
    sign,
    verify,
};
