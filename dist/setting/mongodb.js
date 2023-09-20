"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const app_config_1 = tslib_1.__importDefault(require("../config/app.config"));
exports.default = async () => {
    try {
        await mongoose_1.default.connect(app_config_1.default.DATABASE_URL);
        console.log('Succesfully connected :)');
    }
    catch (error) {
        console.log(error);
    }
};
