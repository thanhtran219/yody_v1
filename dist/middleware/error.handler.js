"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundErrorHandler = exports.globalErrorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = require("../errors/AppError");
const globalErrorHandler = (error, req, res, next) => {
    console.log(error.stack);
    if (!error.statusCode) {
        error.statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    }
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message || http_status_codes_1.StatusCodes[error.statusCode]
    });
};
exports.globalErrorHandler = globalErrorHandler;
const notFoundErrorHandler = (req, res, next) => {
    const err = new AppError_1.AppError(`Can't find ${req.originalUrl} on the server!`, http_status_codes_1.StatusCodes.NOT_FOUND);
    next(err);
};
exports.notFoundErrorHandler = notFoundErrorHandler;
