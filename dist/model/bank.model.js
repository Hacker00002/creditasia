"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BankSchema = new mongoose_1.Schema({
    id: mongoose_1.Types.ObjectId,
    bank_name: String,
    bank_percent: Number,
    bank_kredit_amount: Number,
    bank_deposit_amount: Number,
}, {
    collection: 'bank',
    timestamps: true,
});
const BankModel = (0, mongoose_1.model)('BankModel', BankSchema);
exports.default = BankModel;
