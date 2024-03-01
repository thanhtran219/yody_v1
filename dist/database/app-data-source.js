"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
dotenv_1.default.config();
const portString = process.env.SQL_PORT;
const port = portString ? parseInt(portString, 10) : 1433;
exports.myDataSource = new typeorm_1.DataSource({
    type: "mssql",
    host: process.env.SQL_HOST,
    port: port,
    username: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    entities: ["dist/entities/*.js"],
    synchronize: false,
    logging: false,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
});
