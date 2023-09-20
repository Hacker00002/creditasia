"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AdminSchema = new mongoose_1.Schema({
    id: mongoose_1.Types.ObjectId,
    admin_name: String,
    admin_email: String,
    admin_phone: String,
    admin_address: String,
    admin_password: String,
}, {
    collection: 'admin',
    timestamps: true,
});
const AdminModel = (0, mongoose_1.model)('AdminModel', AdminSchema);
exports.default = AdminModel;
