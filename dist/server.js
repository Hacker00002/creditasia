"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
const mongodb_1 = tslib_1.__importDefault(require("./setting/mongodb"));
const router_1 = tslib_1.__importDefault(require("./routes/router"));
const app_config_1 = tslib_1.__importDefault(require("./config/app.config"));
dotenv_1.default.config();
(0, mongodb_1.default)();
const app = (0, express_1.default)();
app.set('etag', 'weak');
app.set('x-powered-by', false);
app.set('env', app_config_1.default);
app.use(express_1.default.json());
app.use('/api/v1', router_1.default);
app.listen(process.env.API_PORT, () => {
    console.log(process.env.API_PORT);
});
