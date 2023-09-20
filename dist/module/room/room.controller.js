"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const room_model_1 = tslib_1.__importDefault(require("../../model/room.model"));
const complex_model_1 = tslib_1.__importDefault(require("../../model/complex.model"));
exports.default = {
    CREATE_ROOM: async (req, res) => {
        const { room_name, room_count, room_meters, room_all_meters, room_location, room_all_prices, room_credit_price, complex_id, } = req.body;
        try {
            const complex = await complex_model_1.default.findOne({ _id: complex_id });
            const newRoom = await room_model_1.default.create({
                room_name,
                room_count,
                room_meters,
                room_all_meters,
                room_location,
                room_all_prices,
                room_credit_price,
                complex_id,
            });
            complex?.room.push(newRoom?._id);
            complex.save();
            return res.status(201).json({ message: 'Complex created successfully' });
        }
        catch (error) {
            return res.status(404).json({ message: error.message });
        }
    },
};
