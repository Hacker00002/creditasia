"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const room_model_1 = tslib_1.__importDefault(require("../../model/room.model"));
const bank_model_1 = tslib_1.__importDefault(require("../../model/bank.model"));
exports.default = {
    CREATE_CALCULATE: async (req, res) => {
        const { bank_id, room_id, bank_service, srog_year, starter_payment } = req.body;
        try {
            const bank = await bank_model_1.default.findOne({ _id: bank_id });
            const room = await room_model_1.default.findOne({ _id: room_id });
            return res.status(201).json({ bank, room });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
};
