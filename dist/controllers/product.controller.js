"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewProducts = exports.getYodySport = exports.getYodyPolo = exports.getProductsByParentCategoryID = exports.getProductsByCategoryID = exports.searchProductsByKeyword = exports.getAllProducts = void 0;
const product_service_1 = __importDefault(require("../services/product.service"));
const messages_1 = require("../constants/messages");
const pagination_1 = require("../constants/pagination");
const AppError_1 = require("../errors/AppError");
const http_status_codes_1 = require("http-status-codes");
const NotFoundError_1 = require("../errors/NotFoundError");
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let page = 1;
    if (req.query.page !== undefined) {
        page = Number(req.query.page);
        if (isNaN(page) || page === 0) {
            const err = new AppError_1.AppError(messages_1.HTTP_MESSAGES.INVALID_PAGE_PARAMETER, http_status_codes_1.StatusCodes.BAD_REQUEST);
            return next(err);
        }
    }
    const results = yield product_service_1.default.getAll(page, pagination_1.ITEMS_PER_PAGE);
    res.json({ status: messages_1.HTTP_MESSAGES.SUCCESS, results });
});
exports.getAllProducts = getAllProducts;
const searchProductsByKeyword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let page = 1;
    if (req.query.page !== undefined) {
        page = Number(req.query.page);
        if (isNaN(page) || page === 0) {
            const err = new AppError_1.AppError(messages_1.HTTP_MESSAGES.INVALID_PAGE_PARAMETER, http_status_codes_1.StatusCodes.BAD_REQUEST);
            return next(err);
        }
    }
    let keyword = String(req.query.keyword);
    const results = yield product_service_1.default.searchProductsByKeyword(page, pagination_1.ITEMS_PER_PAGE, keyword);
    if (!results) {
        return next(new NotFoundError_1.NotFoundError(messages_1.HTTP_MESSAGES.NOT_FOUND));
    }
    res.json({ status: messages_1.HTTP_MESSAGES.SUCCESS, results });
});
exports.searchProductsByKeyword = searchProductsByKeyword;
// function get products by categoryID
const getProductsByCategoryID = (req, res, next, categoryID) => __awaiter(void 0, void 0, void 0, function* () {
    let page = 1;
    if (req.query.page !== undefined) {
        page = Number(req.query.page);
        if (isNaN(page) || page === 0) {
            const err = new AppError_1.AppError(messages_1.HTTP_MESSAGES.INVALID_PAGE_PARAMETER, http_status_codes_1.StatusCodes.BAD_REQUEST);
            return next(err);
        }
    }
    const results = yield product_service_1.default.getProductsByCategoryID(page, pagination_1.ITEMS_PER_PAGE, categoryID);
    if (!results) {
        return next(new NotFoundError_1.NotFoundError(messages_1.HTTP_MESSAGES.NOT_FOUND));
    }
    res.json({ status: messages_1.HTTP_MESSAGES.SUCCESS, results });
});
exports.getProductsByCategoryID = getProductsByCategoryID;
// function get products by parentCategoryID
const getProductsByParentCategoryID = (req, res, next, parentCategoryID) => __awaiter(void 0, void 0, void 0, function* () {
    let page = 1;
    if (req.query.page !== undefined) {
        page = Number(req.query.page);
        if (isNaN(page) || page === 0) {
            const err = new AppError_1.AppError(messages_1.HTTP_MESSAGES.INVALID_PAGE_PARAMETER, http_status_codes_1.StatusCodes.BAD_REQUEST);
            return next(err);
        }
    }
    const results = yield product_service_1.default.getProductsByParentCategoryID(page, pagination_1.ITEMS_PER_PAGE, parentCategoryID);
    if (!results) {
        return next(new NotFoundError_1.NotFoundError(messages_1.HTTP_MESSAGES.NOT_FOUND));
    }
    res.json({ status: messages_1.HTTP_MESSAGES.SUCCESS, results });
});
exports.getProductsByParentCategoryID = getProductsByParentCategoryID;
const getYodyPolo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let page = 1;
    if (req.query.page !== undefined) {
        page = Number(req.query.page);
        if (isNaN(page) || page === 0) {
            const err = new AppError_1.AppError(messages_1.HTTP_MESSAGES.INVALID_PAGE_PARAMETER, http_status_codes_1.StatusCodes.BAD_REQUEST);
            return next(err);
        }
    }
    const results = yield product_service_1.default.getYodyPolo(page, pagination_1.ITEMS_PER_PAGE);
    res.json({ status: messages_1.HTTP_MESSAGES.SUCCESS, results });
});
exports.getYodyPolo = getYodyPolo;
const getYodySport = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let page = 1;
    if (req.query.page !== undefined) {
        page = Number(req.query.page);
        if (isNaN(page) || page === 0) {
            const err = new AppError_1.AppError(messages_1.HTTP_MESSAGES.INVALID_PAGE_PARAMETER, http_status_codes_1.StatusCodes.BAD_REQUEST);
            return next(err);
        }
    }
    const results = yield product_service_1.default.getYodySport(page, pagination_1.ITEMS_PER_PAGE);
    res.json({ status: messages_1.HTTP_MESSAGES.SUCCESS, results });
});
exports.getYodySport = getYodySport;
const getNewProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let page = 1;
    if (req.query.page !== undefined) {
        page = Number(req.query.page);
        if (isNaN(page) || page === 0) {
            const err = new AppError_1.AppError(messages_1.HTTP_MESSAGES.INVALID_PAGE_PARAMETER, http_status_codes_1.StatusCodes.BAD_REQUEST);
            return next(err);
        }
    }
    const results = yield product_service_1.default.getNewArrivals(page, pagination_1.ITEMS_PER_PAGE);
    res.json({ status: messages_1.HTTP_MESSAGES.SUCCESS, results });
});
exports.getNewProducts = getNewProducts;
