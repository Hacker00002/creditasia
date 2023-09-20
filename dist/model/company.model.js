"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CompanySchema = new mongoose_1.Schema({
    id: mongoose_1.Types.ObjectId,
    company_name: String,
    company_person_name: String,
    company_description: String,
    complex: [
        {
            ref: 'ComplexModel',
            type: mongoose_1.Types.ObjectId,
        },
    ],
}, {
    collection: 'company',
    timestamps: true,
});
const CompanyModel = (0, mongoose_1.model)('CompanyModel', CompanySchema);
exports.default = CompanyModel;
