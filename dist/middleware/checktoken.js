"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const jsonwebtoken_1 = tslib_1.__importDefault(require("jsonwebtoken"));
const verifytoken = (req, res, next) => {
    const { admin_token } = req.headers;
    if (!admin_token) {
        return res.status(401).json({
            message: 'Admin token is required',
        });
    }
    jsonwebtoken_1.default.verify(admin_token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err instanceof jsonwebtoken_1.default.TokenExpiredError) {
            res.status(401).json({
                message: 'Admin token expired',
            });
            return;
        }
        if (err instanceof jsonwebtoken_1.default.JsonWebTokenError) {
            res.status(401).json({
                message: 'Invalid admin token',
            });
            return;
        }
        req.body.id = decoded.id;
        next();
    });
};
exports.default = verifytoken;
