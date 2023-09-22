"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const company_model_1 = tslib_1.__importDefault(require("../../model/company.model"));
const complex_model_1 = tslib_1.__importDefault(require("../../model/complex.model"));
const room_model_1 = tslib_1.__importDefault(require("../../model/room.model"));
const bank_model_1 = tslib_1.__importDefault(require("../../model/bank.model"));
exports.default = {
    CREATE_CALCULATE: async (req, res) => {
        const { date_time } = req.body;
        const { company_id, complex_id, room_id, bank_id } = req.params;
        try {
            const find_company_id = await company_model_1.default.findOne({ _id: company_id });
            const find_complex_id = await complex_model_1.default.findOne({ _id: complex_id });
            const find_roomy_id = await room_model_1.default.findOne({ _id: room_id });
            const find_bank_id = await bank_model_1.default.findOne({ _id: bank_id });
            const resss = Number(find_roomy_id.room_all_prices) - Number(find_roomy_id.room_credit_price);
            const monthly = Math.floor(resss / (Number(date_time) * 12));
            const data = {
                company_name: find_company_id.company_name,
                complex_name: find_complex_id.complex_name,
                bank_name: find_bank_id?.bank_name,
                bank_kredit_amount: find_bank_id?.bank_kredit_amount,
                room_price: find_roomy_id?.room_all_prices,
                monthly_payment: monthly,
                starter_payment: find_roomy_id?.room_credit_price,
                room_count: find_roomy_id?.room_count,
            };
            return res.status(201).json({ calculate_message: data });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
};
