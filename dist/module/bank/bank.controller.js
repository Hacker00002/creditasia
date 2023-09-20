"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const bank_model_1 = tslib_1.__importDefault(require("../../model/bank.model"));
exports.default = {
    CREATE_BANK: async (req, res) => {
        const { bank_name, bank_percent, bank_kredit_amount, bank_deposit_amount } = req.body;
        try {
            const checkbank = await bank_model_1.default.findOne({ bank_name });
            if (checkbank) {
                return res.status(404).json({ message: `${bank_name} already created` });
            }
            const newbank = await bank_model_1.default.create({
                bank_name,
                bank_percent,
                bank_kredit_amount,
                bank_deposit_amount,
            });
            newbank.save();
            return res.status(201).json({ message: 'Bank created successfully' });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
    UPDATE_BANK: async (req, res) => {
        const { bank_name, bank_percent, bank_kredit_amount, bank_deposit_amount } = req.body;
        const { id } = req.params;
        try {
            await bank_model_1.default.findOne({ id });
            const updatedbank = await bank_model_1.default.updateOne({
                bank_name,
                bank_percent,
                bank_kredit_amount,
                bank_deposit_amount,
            }, { new: true });
            updatedbank.save();
            return res.status(201).json({ message: 'Bank updated successfully' });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
    DELETE_BANK: async (req, res) => {
        const { id } = req.params;
        try {
            await bank_model_1.default.findOne({ id });
            const deletedbank = await bank_model_1.default.findByIdAndDelete({ id });
            deletedbank.save();
            return res.status(201).json({ message: 'Bank deleted successfully' });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
    GET_ALL_BANK: async (_, res) => {
        try {
            const allbanks = await bank_model_1.default.find();
            return res.status(200).json(allbanks);
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
};
