"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const women_product_controller_1 = __importDefault(require("../controllers/women.product.controller"));
const men_product_controller_1 = __importDefault(require("../controllers/men.product.controller"));
const children_product_controller_1 = __importDefault(require("../controllers/children.product.controller"));
const productRouter = (0, express_1.Router)();
// All products
productRouter.get("/", product_controller_1.getAllProducts);
// Searching
productRouter.get("/search", product_controller_1.searchProductsByKeyword);
// Áo nữ
productRouter.get("/ao-nu", women_product_controller_1.default.getAoNu);
productRouter.get("/ao-nu/ao-polo", women_product_controller_1.default.getAoPoloNu);
productRouter.get("/ao-nu/ao-thun", women_product_controller_1.default.getAoThunNu);
productRouter.get("/ao-nu/ao-khoac", women_product_controller_1.default.getAoKhoacNu);
productRouter.get("/ao-nu/ao-chong-nang", women_product_controller_1.default.getAoChongNangNu);
productRouter.get("/ao-nu/ao-ni", women_product_controller_1.default.getAoNiNu);
productRouter.get("/ao-nu/ao-giu-nhiet", women_product_controller_1.default.getAoGiuNhietNu);
productRouter.get("/ao-nu/ao-len", women_product_controller_1.default.getAoLenNu);
productRouter.get("/ao-nu/ao-so-mi", women_product_controller_1.default.getAoSoMiNu);
// Quần Nữ
productRouter.get("/quan-nu", women_product_controller_1.default.getQuanNu);
productRouter.get("/quan-nu/quan-jeans", women_product_controller_1.default.getQuanJeansNu);
productRouter.get("/quan-nu/quan-au", women_product_controller_1.default.getQuanAuNu);
productRouter.get("/quan-nu/quan-kaki", women_product_controller_1.default.getQuanKakiNu);
productRouter.get("/quan-nu/quan-short", women_product_controller_1.default.getQuanShortNu);
productRouter.get("/quan-nu/quan-ni", women_product_controller_1.default.getQuanNiNu);
// Đồ bộ Nữ
productRouter.get("/do-bo-nu", women_product_controller_1.default.getDoBoNu);
// Đồ mặc trong Nữ
productRouter.get("/do-mac-trong-nu", women_product_controller_1.default.getDoMacTrongNu);
productRouter.get("/do-mac-trong-nu/do-lot-nu", women_product_controller_1.default.getDoLotNu);
productRouter.get("/do-mac-trong-nu/ao-hai-day-ba-lo-nu", women_product_controller_1.default.getAoHaiDayBaLoNu);
// Đồ thể thao Nữ
productRouter.get("/do-the-thao-nu", women_product_controller_1.default.getDoTheThaoNu);
productRouter.get("/do-the-thao-nu/bo-the-thao", women_product_controller_1.default.getBoTheThaoNu);
productRouter.get("/do-the-thao-nu/ao-thun-the-thao", women_product_controller_1.default.getAoThunTheThaoNu);
productRouter.get("/do-the-thao-nu/ao-polo-the-thao", women_product_controller_1.default.getAoPoloTheThaoNu);
productRouter.get("/do-the-thao-nu/quan-the-thao", women_product_controller_1.default.getQuanTheThaoNu);
// Chân váy Nữ
productRouter.get("/chan-vay-nu", women_product_controller_1.default.getChanVayNu);
// Đầm Nữ
productRouter.get("/dam-nu-vay-lien-than", women_product_controller_1.default.getDamNu);
// Phụ kiện Nữ
productRouter.get("/phu-kien-nu", women_product_controller_1.default.getPhuKienNu);
productRouter.get("/phu-kien-nu/giay", women_product_controller_1.default.getGiayNu);
productRouter.get("/phu-kien-nu/tui-xach", women_product_controller_1.default.getTuiXachNu);
productRouter.get("/phu-kien-nu/phu-kien-khac", women_product_controller_1.default.getPhuKienKhacNu);
// Áo Nam
productRouter.get("/ao-nam", men_product_controller_1.default.getAoNam);
productRouter.get("/ao-nam/ao-polo", men_product_controller_1.default.getAoPoloNam);
productRouter.get("/ao-nam/ao-thun", men_product_controller_1.default.getAoThunNam);
productRouter.get("/ao-nam/ao-khoac", men_product_controller_1.default.getAoKhoacNam);
productRouter.get("/ao-nam/ao-chong-nang", men_product_controller_1.default.getAoChongNangNam);
productRouter.get("/ao-nam/ao-ni", men_product_controller_1.default.getAoNiNam);
productRouter.get("/ao-nam/ao-so-mi", men_product_controller_1.default.getAoSoMiNam);
productRouter.get("/ao-nam/ao-giu-nhiet", men_product_controller_1.default.getAoGiuNhietNam);
// Quần Nam
productRouter.get("/quan-nam", men_product_controller_1.default.getQuanNam);
productRouter.get("/quan-nam/quan-jeans", men_product_controller_1.default.getQuanJeansNam);
productRouter.get("/quan-nam/quan-au", men_product_controller_1.default.getQuanAuNam);
productRouter.get("/quan-nam/quan-kaki", men_product_controller_1.default.getQuanKakiNam);
productRouter.get("/quan-nam/quan-short", men_product_controller_1.default.getQuanShortNam);
// Đồ bộ Nam
productRouter.get("/do-bo-nam", men_product_controller_1.default.getDoBoNam);
// Đồ mặc trong Nam
productRouter.get("/do-mac-trong-nam", men_product_controller_1.default.getDoMacTrongNam);
productRouter.get("/do-mac-trong-nam/quan-lot-nam", men_product_controller_1.default.getQuanLotNam);
productRouter.get("/do-mac-trong-nam/ao-ba-lo-nam", men_product_controller_1.default.getAoBaLoNam);
// Đồ thể thao Nam
productRouter.get("/do-the-thao-nam", men_product_controller_1.default.getDoTheThaoNam);
productRouter.get("/do-the-thao-nam/bo-the-thao", men_product_controller_1.default.getBoTheThaoNam);
productRouter.get("/do-the-thao-nam/ao-thun-the-thao", men_product_controller_1.default.getAoThunTheThaoNam);
productRouter.get("/do-the-thao-nam/ao-polo-the-thao", men_product_controller_1.default.getAoPoloTheThaoNam);
productRouter.get("/do-the-thao-nam/quan-the-thao", men_product_controller_1.default.getQuanTheThaoNam);
// Phụ kiện Nam
productRouter.get("/phu-kien-nam", men_product_controller_1.default.getPhuKienNam);
productRouter.get("/phu-kien-nam/giay", men_product_controller_1.default.getGiayNam);
productRouter.get("/phu-kien-nam/that-lung", men_product_controller_1.default.getThatLungNam);
productRouter.get("/phu-kien-nam/phu-kien-khac", men_product_controller_1.default.getPhuKienKhacNam);
// Áo trẻ em
productRouter.get("/ao-tre-em", children_product_controller_1.default.getAoTreEm);
productRouter.get("/ao-tre-em/ao-polo", children_product_controller_1.default.getAoPoloTreEm);
productRouter.get("/ao-tre-em/ao-thun", children_product_controller_1.default.getAoThunTreEm);
productRouter.get("/ao-tre-em/ao-khoac", children_product_controller_1.default.getAoKhoacTreEm);
productRouter.get("/ao-tre-em/ao-ni", children_product_controller_1.default.getAoNiTreEm);
productRouter.get("/ao-tre-em/ao-giu-nhiet", children_product_controller_1.default.getAoGiuNhietTreEm);
productRouter.get("/ao-tre-em/ao-len", children_product_controller_1.default.getAoLenTreEm);
// Quần trẻ em
productRouter.get("/quan-tre-em", children_product_controller_1.default.getQuanTreEm);
productRouter.get("/quan-tre-em/quan-jeans", children_product_controller_1.default.getQuanJeansTreEm);
productRouter.get("/quan-tre-em/quan-kaki", children_product_controller_1.default.getQuanKakiTreEm);
productRouter.get("/quan-tre-em/quan-short", children_product_controller_1.default.getQuanShortTreEm);
productRouter.get("/quan-tre-em/quan-ni", children_product_controller_1.default.getQuanNiTreEm);
productRouter.get("/quan-tre-em/quan-legging", children_product_controller_1.default.getQuanLeggingTreEm);
// Đồ bộ trẻ em
productRouter.get("/do-bo-tre-em", children_product_controller_1.default.getDoBoTreEm);
// Đồ thể thao trẻ em
productRouter.get("/do-the-thao-tre-em", children_product_controller_1.default.getDoTheThaoTreEm);
// Chân váy trẻ em
productRouter.get("/chan-vay-be-gai", children_product_controller_1.default.getChanVayBeGai);
// Đầm trẻ em
productRouter.get("/dam-be-gai", children_product_controller_1.default.getDamBeGai);
// Phụ kiện trẻ em
productRouter.get("/phu-kien-tre-em", children_product_controller_1.default.getPhuKienTreEm);
exports.default = productRouter;
