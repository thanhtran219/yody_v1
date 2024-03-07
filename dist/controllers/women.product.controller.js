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
exports.getPhuKienKhacNu = exports.getTuiXachNu = exports.getGiayNu = exports.getPhuKienNu = exports.getDamNu = exports.getChanVayNu = exports.getQuanTheThaoNu = exports.getAoPoloTheThaoNu = exports.getAoThunTheThaoNu = exports.getBoTheThaoNu = exports.getDoTheThaoNu = exports.getAoHaiDayBaLoNu = exports.getDoLotNu = exports.getDoMacTrongNu = exports.getDoBoNu = exports.getQuanNiNu = exports.getQuanShortNu = exports.getQuanKakiNu = exports.getQuanAuNu = exports.getQuanJeansNu = exports.getQuanNu = exports.getAoSoMiNu = exports.getAoLenNu = exports.getAoGiuNhietNu = exports.getAoNiNu = exports.getAoChongNangNu = exports.getAoKhoacNu = exports.getAoThunNu = exports.getAoPoloNu = exports.getAoNu = void 0;
const category_id_1 = __importDefault(require("../constants/category.id"));
const product_controller_1 = require("./product.controller");
// Women Shirts
const getAoNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.ao_nu);
});
exports.getAoNu = getAoNu;
const getAoPoloNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_polo_nu);
});
exports.getAoPoloNu = getAoPoloNu;
const getAoThunNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_thun_nu);
});
exports.getAoThunNu = getAoThunNu;
const getAoKhoacNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_khoac_nu);
});
exports.getAoKhoacNu = getAoKhoacNu;
const getAoChongNangNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_chong_nang_nu);
});
exports.getAoChongNangNu = getAoChongNangNu;
const getAoNiNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_ni_nu);
});
exports.getAoNiNu = getAoNiNu;
const getAoGiuNhietNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_giu_nhiet_nu);
});
exports.getAoGiuNhietNu = getAoGiuNhietNu;
const getAoLenNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_len_nu);
});
exports.getAoLenNu = getAoLenNu;
const getAoSoMiNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_so_mi_nu);
});
exports.getAoSoMiNu = getAoSoMiNu;
// Women pants
const getQuanNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.quan_nu);
});
exports.getQuanNu = getQuanNu;
const getQuanJeansNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_jeans_nu);
});
exports.getQuanJeansNu = getQuanJeansNu;
const getQuanAuNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_au_nu);
});
exports.getQuanAuNu = getQuanAuNu;
const getQuanKakiNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_kaki_nu);
});
exports.getQuanKakiNu = getQuanKakiNu;
const getQuanShortNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_short_nu);
});
exports.getQuanShortNu = getQuanShortNu;
const getQuanNiNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_ni_nu);
});
exports.getQuanNiNu = getQuanNiNu;
// Đồ bộ
const getDoBoNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.do_bo_nu);
});
exports.getDoBoNu = getDoBoNu;
// Đồ mặc trong
const getDoMacTrongNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.do_mac_trong_nu);
});
exports.getDoMacTrongNu = getDoMacTrongNu;
const getDoLotNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.do_lot_nu);
});
exports.getDoLotNu = getDoLotNu;
const getAoHaiDayBaLoNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_hai_day_ba_lo_nu);
});
exports.getAoHaiDayBaLoNu = getAoHaiDayBaLoNu;
// Đồ thể thao
const getDoTheThaoNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.do_the_thao_nu);
});
exports.getDoTheThaoNu = getDoTheThaoNu;
const getBoTheThaoNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.bo_the_thao_nu);
});
exports.getBoTheThaoNu = getBoTheThaoNu;
const getAoThunTheThaoNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_thun_the_thao_nu);
});
exports.getAoThunTheThaoNu = getAoThunTheThaoNu;
const getAoPoloTheThaoNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_polo_the_thao_nu);
});
exports.getAoPoloTheThaoNu = getAoPoloTheThaoNu;
const getQuanTheThaoNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_the_thao_nu);
});
exports.getQuanTheThaoNu = getQuanTheThaoNu;
// Chân váy
const getChanVayNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.chan_vay_nu);
});
exports.getChanVayNu = getChanVayNu;
// Đầm
const getDamNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.dam_nu);
});
exports.getDamNu = getDamNu;
// Phụ kiện
const getPhuKienNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.phu_kien_nu);
});
exports.getPhuKienNu = getPhuKienNu;
const getGiayNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.giay_nu);
});
exports.getGiayNu = getGiayNu;
const getTuiXachNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.tui_xach_nu);
});
exports.getTuiXachNu = getTuiXachNu;
const getPhuKienKhacNu = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.phu_kien_khac_nu);
});
exports.getPhuKienKhacNu = getPhuKienKhacNu;
const womenProductController = {
    getAoNu: exports.getAoNu, getAoPoloNu: exports.getAoPoloNu, getAoThunNu: exports.getAoThunNu, getAoKhoacNu: exports.getAoKhoacNu, getAoChongNangNu: exports.getAoChongNangNu, getAoNiNu: exports.getAoNiNu, getAoGiuNhietNu: exports.getAoGiuNhietNu, getAoLenNu: exports.getAoLenNu, getAoSoMiNu: exports.getAoSoMiNu,
    getQuanNu: exports.getQuanNu, getQuanJeansNu: exports.getQuanJeansNu, getQuanAuNu: exports.getQuanAuNu, getQuanKakiNu: exports.getQuanKakiNu, getQuanShortNu: exports.getQuanShortNu, getQuanNiNu: exports.getQuanNiNu,
    getDoBoNu: exports.getDoBoNu, getDoMacTrongNu: exports.getDoMacTrongNu, getDoLotNu: exports.getDoLotNu, getAoHaiDayBaLoNu: exports.getAoHaiDayBaLoNu,
    getDoTheThaoNu: exports.getDoTheThaoNu, getBoTheThaoNu: exports.getBoTheThaoNu, getAoThunTheThaoNu: exports.getAoThunTheThaoNu, getAoPoloTheThaoNu: exports.getAoPoloTheThaoNu, getQuanTheThaoNu: exports.getQuanTheThaoNu,
    getChanVayNu: exports.getChanVayNu, getDamNu: exports.getDamNu,
    getPhuKienNu: exports.getPhuKienNu, getGiayNu: exports.getGiayNu, getTuiXachNu: exports.getTuiXachNu, getPhuKienKhacNu: exports.getPhuKienKhacNu
};
exports.default = womenProductController;
