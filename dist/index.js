"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("express-async-errors");
const category_route_1 = __importDefault(require("./routes/category.route"));
const app_data_source_1 = require("./database/app-data-source");
const bodyParser = __importStar(require("body-parser"));
const messages_1 = require("./constants/messages");
const product_route_1 = __importDefault(require("./routes/product.route"));
const error_handler_1 = require("./middleware/error.handler");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(bodyParser.json());
const PORT = process.env.PORT;
app_data_source_1.myDataSource
    .initialize()
    .then(() => {
    console.log(messages_1.DATA_SOURCE_MESSAGES.INITIALIZING_DATA_SOURCE_SUSCESS);
}).catch((err) => {
    console.error(messages_1.DATA_SOURCE_MESSAGES.INITIALIZING_DATA_SOURCE_ERROR, err);
});
app.use("/api/category", category_route_1.default);
app.use("/api/products", product_route_1.default);
app.all("*", error_handler_1.notFoundErrorHandler);
app.use(error_handler_1.globalErrorHandler);
app.listen(PORT, () => {
    console.log(messages_1.DATA_SOURCE_MESSAGES.SERVER_RUNNING_PORT, PORT);
});
