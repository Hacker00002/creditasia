"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const company_model_1 = tslib_1.__importDefault(require("../../model/company.model"));
exports.default = {
    CREATE_COMPANY: async (req, res) => {
        const { company_name, company_description, company_person_name } = req.body;
        try {
            const checkcompany = await company_model_1.default.findOne({ company_name });
            if (checkcompany) {
                return res.status(404).json({ message: `${company_name} already created` });
            }
            const newCompany = await company_model_1.default.create({ company_name, company_description, company_person_name });
            newCompany.save();
            return res.status(201).json({ message: 'Company created successfully' });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
    UPDATE_COMPANY: async (req, res) => {
        const { company_name, company_description, company_person_name } = req.body;
        const { id } = req.params;
        try {
            await company_model_1.default.findOne({ id });
            const updateCompany = await company_model_1.default.updateOne({
                company_name,
                company_description,
                company_person_name,
            });
            updateCompany.save();
            return res.status(201).json({ message: 'Company updated successfully' });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
    DELETE_COMPANY: async (req, res) => {
        const { id } = req.params;
        try {
            await company_model_1.default.findOne({ id });
            await company_model_1.default.findByIdAndDelete(id);
            return res.status(201).json({ message: 'Company deleted successfully' });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
    GET_COMPANY: async (_, res) => {
        try {
            const complexList = await company_model_1.default.find().populate({
                path: 'complex',
                select: ['id', 'complex_name', 'complex_description'],
            });
            return res.status(201).json({ message: 'Company fetched successfully', complexList });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
};
