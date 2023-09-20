"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MortgageSchema = new mongoose_1.Schema({
    id: mongoose_1.Types.ObjectId,
    mortgage_name: String,
    mortgage_srog: Number,
}, {
    collection: 'mortgage',
    timestamps: true,
});
const MortgageModel = (0, mongoose_1.model)('MortgageModel', MortgageSchema);
exports.default = MortgageModel;
