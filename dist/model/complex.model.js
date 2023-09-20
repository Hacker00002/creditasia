"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ComplexSchema = new mongoose_1.Schema({
    id: mongoose_1.Types.ObjectId,
    complex_name: String,
    complex_description: String,
    company_id: {
        ref: 'CompanyModel',
        type: mongoose_1.Types.ObjectId,
    },
    room: [
        {
            ref: 'RoomModel',
            type: mongoose_1.Types.ObjectId,
        },
    ],
}, {
    collection: 'complex',
    timestamps: true,
});
const ComplexModel = (0, mongoose_1.model)('ComplexModel', ComplexSchema);
exports.default = ComplexModel;
