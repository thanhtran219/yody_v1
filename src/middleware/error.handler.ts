import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { AppError } from "../errors/AppError";

export const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    console.log(error.stack);
    
    if(!error.statusCode) error.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    
    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message || StatusCodes[error.statusCode]
    });
}

export const notFoundErrorHandler = (req: Request, res: Response, next: NextFunction) => {
    const err = new AppError(`Can't find ${req.originalUrl} on the server!`, StatusCodes.NOT_FOUND);
    next(err);
}
