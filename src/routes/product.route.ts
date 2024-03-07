import { Router } from "express";
import { getAllProducts, searchProductsByKeyword } from "../controllers/product.controller";
import womenProductController from "../controllers/women.product.controller";
import menProductController from "../controllers/men.product.controller";
import childrenProductController from "../controllers/children.product.controller";

const productRouter = Router();

// All products
productRouter.get("/", getAllProducts);

// Searching
productRouter.get("/search", searchProductsByKeyword);

// Áo nữ
productRouter.get("/ao-nu", womenProductController.getAoNu);
productRouter.get("/ao-nu/ao-polo", womenProductController.getAoPoloNu);
productRouter.get("/ao-nu/ao-thun", womenProductController.getAoThunNu);
productRouter.get("/ao-nu/ao-khoac", womenProductController.getAoKhoacNu);
productRouter.get("/ao-nu/ao-chong-nang", womenProductController.getAoChongNangNu);
productRouter.get("/ao-nu/ao-ni", womenProductController.getAoNiNu);
productRouter.get("/ao-nu/ao-giu-nhiet", womenProductController.getAoGiuNhietNu);
productRouter.get("/ao-nu/ao-len", womenProductController.getAoLenNu);
productRouter.get("/ao-nu/ao-so-mi", womenProductController.getAoSoMiNu);

// Quần Nữ
productRouter.get("/quan-nu", womenProductController.getQuanNu);
productRouter.get("/quan-nu/quan-jeans", womenProductController.getQuanJeansNu);
productRouter.get("/quan-nu/quan-au", womenProductController.getQuanAuNu);
productRouter.get("/quan-nu/quan-kaki", womenProductController.getQuanKakiNu);
productRouter.get("/quan-nu/quan-short", womenProductController.getQuanShortNu);
productRouter.get("/quan-nu/quan-ni", womenProductController.getQuanNiNu);

// Đồ bộ Nữ
productRouter.get("/do-bo-nu", womenProductController.getDoBoNu);

// Đồ mặc trong Nữ
productRouter.get("/do-mac-trong-nu", womenProductController.getDoMacTrongNu);
productRouter.get("/do-mac-trong-nu/do-lot-nu", womenProductController.getDoLotNu);
productRouter.get("/do-mac-trong-nu/ao-hai-day-ba-lo-nu", womenProductController.getAoHaiDayBaLoNu);

// Đồ thể thao Nữ
productRouter.get("/do-the-thao-nu", womenProductController.getDoTheThaoNu);
productRouter.get("/do-the-thao-nu/bo-the-thao", womenProductController.getBoTheThaoNu);
productRouter.get("/do-the-thao-nu/ao-thun-the-thao", womenProductController.getAoThunTheThaoNu);
productRouter.get("/do-the-thao-nu/ao-polo-the-thao", womenProductController.getAoPoloTheThaoNu);
productRouter.get("/do-the-thao-nu/quan-the-thao", womenProductController.getQuanTheThaoNu);

// Chân váy Nữ
productRouter.get("/chan-vay-nu", womenProductController.getChanVayNu);

// Đầm Nữ
productRouter.get("/dam-nu-vay-lien-than", womenProductController.getDamNu);

// Phụ kiện Nữ
productRouter.get("/phu-kien-nu", womenProductController.getPhuKienNu);
productRouter.get("/phu-kien-nu/giay", womenProductController.getGiayNu);
productRouter.get("/phu-kien-nu/tui-xach", womenProductController.getTuiXachNu);
productRouter.get("/phu-kien-nu/phu-kien-khac", womenProductController.getPhuKienKhacNu);

// Áo Nam
productRouter.get("/ao-nam", menProductController.getAoNam);
productRouter.get("/ao-nam/ao-polo", menProductController.getAoPoloNam);
productRouter.get("/ao-nam/ao-thun", menProductController.getAoThunNam);
productRouter.get("/ao-nam/ao-khoac", menProductController.getAoKhoacNam);
productRouter.get("/ao-nam/ao-chong-nang", menProductController.getAoChongNangNam);
productRouter.get("/ao-nam/ao-ni", menProductController.getAoNiNam);
productRouter.get("/ao-nam/ao-so-mi", menProductController.getAoSoMiNam);
productRouter.get("/ao-nam/ao-giu-nhiet", menProductController.getAoGiuNhietNam);

// Quần Nam
productRouter.get("/quan-nam", menProductController.getQuanNam);
productRouter.get("/quan-nam/quan-jeans", menProductController.getQuanJeansNam);
productRouter.get("/quan-nam/quan-au", menProductController.getQuanAuNam);
productRouter.get("/quan-nam/quan-kaki", menProductController.getQuanKakiNam);
productRouter.get("/quan-nam/quan-short", menProductController.getQuanShortNam);

// Đồ bộ Nam
productRouter.get("/do-bo-nam", menProductController.getDoBoNam);

// Đồ mặc trong Nam
productRouter.get("/do-mac-trong-nam", menProductController.getDoMacTrongNam);
productRouter.get("/do-mac-trong-nam/quan-lot", menProductController.getQuanLotNam);
productRouter.get("/do-mac-trong-nam/ao-ba-lo", menProductController.getAoBaLoNam);

// Đồ thể thao Nam
productRouter.get("/do-the-thao-nam", menProductController.getDoTheThaoNam);
productRouter.get("/do-the-thao-nam/bo-the-thao", menProductController.getBoTheThaoNam);
productRouter.get("/do-the-thao-nam/ao-thun-the-thao", menProductController.getAoThunTheThaoNam);
productRouter.get("/do-the-thao-nam/ao-polo-the-thao", menProductController.getAoPoloTheThaoNam);
productRouter.get("/do-the-thao-nam/quan-the-thao", menProductController.getQuanTheThaoNam);

// Phụ kiện Nam
productRouter.get("/phu-kien-nam", menProductController.getPhuKienNam);
productRouter.get("/phu-kien-nam/giay", menProductController.getGiayNam);
productRouter.get("/phu-kien-nam/that-lung", menProductController.getThatLungNam);
productRouter.get("/phu-kien-nam/phu-kien-khac", menProductController.getPhuKienKhacNam);

// Áo trẻ em
productRouter.get("/ao-tre-em", childrenProductController.getAoTreEm);
productRouter.get("/ao-tre-em/ao-polo", childrenProductController.getAoPoloTreEm);
productRouter.get("/ao-tre-em/ao-thun", childrenProductController.getAoThunTreEm);
productRouter.get("/ao-tre-em/ao-khoac", childrenProductController.getAoKhoacTreEm);
productRouter.get("/ao-tre-em/ao-ni", childrenProductController.getAoNiTreEm);
productRouter.get("/ao-tre-em/ao-giu-nhiet", childrenProductController.getAoGiuNhietTreEm);
productRouter.get("/ao-tre-em/ao-len", childrenProductController.getAoLenTreEm);

// Quần trẻ em
productRouter.get("/quan-tre-em", childrenProductController.getQuanTreEm);
productRouter.get("/quan-tre-em/quan-jeans", childrenProductController.getQuanJeansTreEm);
productRouter.get("/quan-tre-em/quan-kaki", childrenProductController.getQuanKakiTreEm);
productRouter.get("/quan-tre-em/quan-short", childrenProductController.getQuanShortTreEm);
productRouter.get("/quan-tre-em/quan-ni", childrenProductController.getQuanNiTreEm);
productRouter.get("/quan-tre-em/quan-legging", childrenProductController.getQuanLeggingTreEm);

// Đồ bộ trẻ em
productRouter.get("/do-bo-tre-em", childrenProductController.getDoBoTreEm);

// Đồ thể thao trẻ em
productRouter.get("/do-the-thao-tre-em", childrenProductController.getDoTheThaoTreEm);

// Chân váy trẻ em
productRouter.get("/chan-vay-be-gai", childrenProductController.getChanVayBeGai);

// Đầm trẻ em
productRouter.get("/dam-be-gai", childrenProductController.getDamBeGai);

// Phụ kiện trẻ em
productRouter.get("/phu-kien-tre-em", childrenProductController.getPhuKienTreEm);

export default productRouter;
