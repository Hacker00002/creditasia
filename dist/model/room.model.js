"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RoomSchema = new mongoose_1.Schema({
    id: mongoose_1.Types.ObjectId,
    room_name: String,
    room_count: Number,
    room_price: Number,
    room_meters: Number,
    room_location: String,
    mortgage: [
        {
            ref: 'MortgageModel',
            type: mongoose_1.Types.ObjectId,
        },
    ],
}, {
    collection: 'room',
    timestamps: true,
});
const RoomModel = (0, mongoose_1.model)('RoomModel', RoomSchema);
exports.default = RoomModel;
