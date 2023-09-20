"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const admin_model_1 = tslib_1.__importDefault(require("../../model/admin.model"));
const jwt_helper_1 = tslib_1.__importDefault(require("../../helper/jwt.helper"));
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
exports.default = {
    SIGN_IN_ADMIN: async (req, res) => {
        const { admin_email, admin_password } = req.body;
        try {
            const admin = await admin_model_1.default.findOne({ admin_email });
            if (!admin) {
                return res.status(404).json({ message: `${admin_email} email not found` });
            }
            const hash = await bcrypt_1.default.compare(admin_password, admin?.admin_password);
            if (!hash) {
                return res.status(404).json({ message: 'password is invalid' });
            }
            const accesToken = jwt_helper_1.default.sign({ admin_id: admin?.id });
            return res.status(404).json({ message: 'Admin successfully entered', accesToken });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
    GET_ADMIN: async (_, res) => {
        try {
            const admin = await admin_model_1.default.find();
            return res.status(404).json({ message: 'Admin successfully fetched', admin });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
};
