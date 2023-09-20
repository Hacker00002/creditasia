"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const complex_model_1 = tslib_1.__importDefault(require("../../model/complex.model"));
const company_model_1 = tslib_1.__importDefault(require("../../model/company.model"));
exports.default = {
    CREATE_COMPLEX: async (req, res) => {
        const { complex_name, complex_description, company_id } = req.body;
        try {
            const company = await company_model_1.default.findOne({ _id: company_id });
            const newComplex = await complex_model_1.default.create({
                complex_name,
                complex_description,
                company_id,
            });
            company?.complex.push(newComplex?._id);
            company.save();
            await company_model_1.default.findByIdAndUpdate({ _id: company_id }, { complex_id: company.complex });
            newComplex.save();
            return res.status(201).json({ message: 'Complex created successfully' });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
    UPDATE_COMPLEX: async (req, res) => {
        const { complex_name, complex_description } = req.body;
        const { id } = req.params;
        try {
            await complex_model_1.default.findOne({ id });
            const updateComplex = await complex_model_1.default.updateOne({
                complex_name,
                complex_description,
            });
            updateComplex.save();
            return res.status(201).json({ message: 'Complex updated successfully' });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
    DELETE_COMPLEX: async (req, res) => {
        const { id } = req.params;
        try {
            const complex = await complex_model_1.default.findById(id);
            const company = await company_model_1.default.findById(complex?.company_id);
            await company_model_1.default.findByIdAndUpdate(company?._id, {
                complex: company?.complex.map((e) => e.toString()).filter((e) => e != id),
            });
            await complex_model_1.default.findByIdAndDelete(id);
            company.save();
            return res.status(201).json({ message: 'Complex deleted successfully' });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
};
