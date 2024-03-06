"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const http_status_codes_1 = require("http-status-codes");
class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.NotFoundError = NotFoundError;
