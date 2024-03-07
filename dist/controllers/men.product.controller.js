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
exports.getPhuKienKhacNam = exports.getThatLungNam = exports.getGiayNam = exports.getPhuKienNam = exports.getQuanTheThaoNam = exports.getAoPoloTheThaoNam = exports.getAoThunTheThaoNam = exports.getBoTheThaoNam = exports.getDoTheThaoNam = exports.getAoBaLoNam = exports.getQuanLotNam = exports.getDoMacTrongNam = exports.getDoBoNam = exports.getQuanShortNam = exports.getQuanKakiNam = exports.getQuanAuNam = exports.getQuanJeansNam = exports.getQuanNam = exports.getAoSoMiNam = exports.getAoGiuNhietNam = exports.getAoNiNam = exports.getAoChongNangNam = exports.getAoKhoacNam = exports.getAoThunNam = exports.getAoPoloNam = exports.getAoNam = void 0;
const category_id_1 = __importDefault(require("../constants/category.id"));
const product_controller_1 = require("./product.controller");
// Men shirts
const getAoNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.ao_nam);
});
exports.getAoNam = getAoNam;
const getAoPoloNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_polo_nam);
});
exports.getAoPoloNam = getAoPoloNam;
const getAoThunNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_thun_nam);
});
exports.getAoThunNam = getAoThunNam;
const getAoKhoacNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_khoac_nam);
});
exports.getAoKhoacNam = getAoKhoacNam;
const getAoChongNangNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_chong_nang_nam);
});
exports.getAoChongNangNam = getAoChongNangNam;
const getAoNiNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_ni_nam);
});
exports.getAoNiNam = getAoNiNam;
const getAoGiuNhietNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_giu_nhiet_nam);
});
exports.getAoGiuNhietNam = getAoGiuNhietNam;
const getAoSoMiNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_so_mi_nam);
});
exports.getAoSoMiNam = getAoSoMiNam;
// Men pants
const getQuanNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.quan_nam);
});
exports.getQuanNam = getQuanNam;
const getQuanJeansNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_jeans_nam);
});
exports.getQuanJeansNam = getQuanJeansNam;
const getQuanAuNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_au_nam);
});
exports.getQuanAuNam = getQuanAuNam;
const getQuanKakiNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_kaki_nam);
});
exports.getQuanKakiNam = getQuanKakiNam;
const getQuanShortNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_short_nam);
});
exports.getQuanShortNam = getQuanShortNam;
// Đồ bộ
const getDoBoNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.do_bo_nam);
});
exports.getDoBoNam = getDoBoNam;
// Đồ mặc trong
const getDoMacTrongNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.do_mac_trong_nam);
});
exports.getDoMacTrongNam = getDoMacTrongNam;
const getQuanLotNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_lot_nam);
});
exports.getQuanLotNam = getQuanLotNam;
const getAoBaLoNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_ba_lo_nam);
});
exports.getAoBaLoNam = getAoBaLoNam;
// Đồ thể thao
const getDoTheThaoNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.do_the_thao_nu);
});
exports.getDoTheThaoNam = getDoTheThaoNam;
const getBoTheThaoNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.bo_the_thao_nam);
});
exports.getBoTheThaoNam = getBoTheThaoNam;
const getAoThunTheThaoNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_thun_the_thao_nam);
});
exports.getAoThunTheThaoNam = getAoThunTheThaoNam;
const getAoPoloTheThaoNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_polo_the_thao_nam);
});
exports.getAoPoloTheThaoNam = getAoPoloTheThaoNam;
const getQuanTheThaoNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_the_thao_nam);
});
exports.getQuanTheThaoNam = getQuanTheThaoNam;
// Phụ kiện
const getPhuKienNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.phu_kien_nam);
});
exports.getPhuKienNam = getPhuKienNam;
const getGiayNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.giay_nam);
});
exports.getGiayNam = getGiayNam;
const getThatLungNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.that_lung_nam);
});
exports.getThatLungNam = getThatLungNam;
const getPhuKienKhacNam = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.phu_kien_khac_nam);
});
exports.getPhuKienKhacNam = getPhuKienKhacNam;
const menProductController = {
    getAoNam: exports.getAoNam, getAoPoloNam: exports.getAoPoloNam, getAoThunNam: exports.getAoThunNam, getAoKhoacNam: exports.getAoKhoacNam, getAoChongNangNam: exports.getAoChongNangNam, getAoNiNam: exports.getAoNiNam, getAoGiuNhietNam: exports.getAoGiuNhietNam, getAoSoMiNam: exports.getAoSoMiNam,
    getQuanNam: exports.getQuanNam, getQuanJeansNam: exports.getQuanJeansNam, getQuanAuNam: exports.getQuanAuNam, getQuanKakiNam: exports.getQuanKakiNam, getQuanShortNam: exports.getQuanShortNam,
    getDoBoNam: exports.getDoBoNam, getDoMacTrongNam: exports.getDoMacTrongNam, getQuanLotNam: exports.getQuanLotNam, getAoBaLoNam: exports.getAoBaLoNam,
    getDoTheThaoNam: exports.getDoTheThaoNam, getBoTheThaoNam: exports.getBoTheThaoNam, getAoThunTheThaoNam: exports.getAoThunTheThaoNam, getAoPoloTheThaoNam: exports.getAoPoloTheThaoNam, getQuanTheThaoNam: exports.getQuanTheThaoNam,
    getPhuKienNam: exports.getPhuKienNam, getGiayNam: exports.getGiayNam, getThatLungNam: exports.getThatLungNam, getPhuKienKhacNam: exports.getPhuKienKhacNam
};
exports.default = menProductController;
