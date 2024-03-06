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
exports.getAoThunTreEm = exports.getAoPoloTreEm = exports.getAoTreEm = exports.getAoThunNam = exports.getAoPoloNam = exports.getAoNam = exports.getAoThunNu = exports.getAoPoloNu = exports.getAoNu = exports.searchProductsByKeyword = exports.getAllProducts = void 0;
const product_service_1 = __importDefault(require("../services/product.service"));
const messages_1 = require("../constants/messages");
const pagination_1 = require("../constants/pagination");
const category_id_1 = __importDefault(require("../constants/category.id"));
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
// Female
const getAoNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getProductsByParentCategoryID(req, res, next, category_id_1.default.ao_nu);
});
exports.getAoNu = getAoNu;
const getAoPoloNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getProductsByCategoryID(req, res, next, category_id_1.default.ao_polo_nu);
});
exports.getAoPoloNu = getAoPoloNu;
const getAoThunNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getProductsByCategoryID(req, res, next, category_id_1.default.ao_thun_nu);
});
exports.getAoThunNu = getAoThunNu;
// Male
const getAoNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getProductsByParentCategoryID(req, res, next, category_id_1.default.ao_nam);
});
exports.getAoNam = getAoNam;
const getAoPoloNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getProductsByCategoryID(req, res, next, category_id_1.default.ao_polo_nam);
});
exports.getAoPoloNam = getAoPoloNam;
const getAoThunNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getProductsByCategoryID(req, res, next, category_id_1.default.ao_thun_nam);
});
exports.getAoThunNam = getAoThunNam;
// Kid
const getAoTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getProductsByParentCategoryID(req, res, next, category_id_1.default.ao_tre_em);
});
exports.getAoTreEm = getAoTreEm;
const getAoPoloTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getProductsByCategoryID(req, res, next, category_id_1.default.ao_polo_tre_em);
});
exports.getAoPoloTreEm = getAoPoloTreEm;
const getAoThunTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield getProductsByCategoryID(req, res, next, category_id_1.default.ao_thun_tre_em);
});
exports.getAoThunTreEm = getAoThunTreEm;
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
