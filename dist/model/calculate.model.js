"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CalculateSchema = new mongoose_1.Schema({
    id: mongoose_1.Types.ObjectId,
    room_id: {
        ref: 'RoomModel',
        type: mongoose_1.Types.ObjectId,
    },
    bank_id: {
        ref: 'BankModel',
        type: mongoose_1.Types.ObjectId,
    },
    srog_year: Number,
    starter_payment: Number,
    bank_service: Number,
}, {
    collection: 'calculate',
    timestamps: true,
});
const calculateModel = (0, mongoose_1.model)('calculateModel', CalculateSchema);
exports.default = calculateModel;
