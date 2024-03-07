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
exports.getPhuKienTreEm = exports.getDamBeGai = exports.getChanVayBeGai = exports.getDoTheThaoTreEm = exports.getDoBoTreEm = exports.getQuanLeggingTreEm = exports.getQuanNiTreEm = exports.getQuanShortTreEm = exports.getQuanKakiTreEm = exports.getQuanJeansTreEm = exports.getQuanTreEm = exports.getAoLenTreEm = exports.getAoGiuNhietTreEm = exports.getAoNiTreEm = exports.getAoKhoacTreEm = exports.getAoThunTreEm = exports.getAoPoloTreEm = exports.getAoTreEm = void 0;
const category_id_1 = __importDefault(require("../constants/category.id"));
const product_controller_1 = require("./product.controller");
// Children
const getAoTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.ao_tre_em);
});
exports.getAoTreEm = getAoTreEm;
const getAoPoloTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_polo_tre_em);
});
exports.getAoPoloTreEm = getAoPoloTreEm;
const getAoThunTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_thun_tre_em);
});
exports.getAoThunTreEm = getAoThunTreEm;
const getAoKhoacTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_khoac_tre_em);
});
exports.getAoKhoacTreEm = getAoKhoacTreEm;
const getAoNiTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_ni_tre_em);
});
exports.getAoNiTreEm = getAoNiTreEm;
const getAoGiuNhietTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_giu_nhiet_tre_em);
});
exports.getAoGiuNhietTreEm = getAoGiuNhietTreEm;
const getAoLenTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.ao_len_tre_em);
});
exports.getAoLenTreEm = getAoLenTreEm;
// Children pants
const getQuanTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.quan_tre_em);
});
exports.getQuanTreEm = getQuanTreEm;
const getQuanJeansTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_jeans_tre_em);
});
exports.getQuanJeansTreEm = getQuanJeansTreEm;
const getQuanKakiTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_kaki_tre_em);
});
exports.getQuanKakiTreEm = getQuanKakiTreEm;
const getQuanShortTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_short_tre_em);
});
exports.getQuanShortTreEm = getQuanShortTreEm;
const getQuanNiTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_ni_tre_em);
});
exports.getQuanNiTreEm = getQuanNiTreEm;
const getQuanLeggingTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.quan_legging_tre_em);
});
exports.getQuanLeggingTreEm = getQuanLeggingTreEm;
// Đồ bộ
const getDoBoTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.do_bo_tre_em);
});
exports.getDoBoTreEm = getDoBoTreEm;
// Đồ thể thao
const getDoTheThaoTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByParentCategoryID)(req, res, next, category_id_1.default.do_the_thao_tre_em);
});
exports.getDoTheThaoTreEm = getDoTheThaoTreEm;
// Chân váy
const getChanVayBeGai = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.chan_vay_be_gai);
});
exports.getChanVayBeGai = getChanVayBeGai;
// Đầm
const getDamBeGai = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.dam_be_gai);
});
exports.getDamBeGai = getDamBeGai;
// Đầm
const getPhuKienTreEm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, product_controller_1.getProductsByCategoryID)(req, res, next, category_id_1.default.phu_kien_tre_em);
});
exports.getPhuKienTreEm = getPhuKienTreEm;
const childrenProductController = {
    getAoTreEm: exports.getAoTreEm, getAoPoloTreEm: exports.getAoPoloTreEm, getAoThunTreEm: exports.getAoThunTreEm, getAoKhoacTreEm: exports.getAoKhoacTreEm, getAoNiTreEm: exports.getAoNiTreEm, getAoGiuNhietTreEm: exports.getAoGiuNhietTreEm, getAoLenTreEm: exports.getAoLenTreEm,
    getQuanTreEm: exports.getQuanTreEm, getQuanJeansTreEm: exports.getQuanJeansTreEm, getQuanKakiTreEm: exports.getQuanKakiTreEm, getQuanShortTreEm: exports.getQuanShortTreEm, getQuanNiTreEm: exports.getQuanNiTreEm, getQuanLeggingTreEm: exports.getQuanLeggingTreEm,
    getDoBoTreEm: exports.getDoBoTreEm, getDoTheThaoTreEm: exports.getDoTheThaoTreEm, getChanVayBeGai: exports.getChanVayBeGai, getDamBeGai: exports.getDamBeGai,
    getPhuKienTreEm: exports.getPhuKienTreEm
};
exports.default = childrenProductController;
