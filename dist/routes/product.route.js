"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const productRouter = (0, express_1.Router)();
productRouter.get("/", product_controller_1.getAllProducts);
// Female
productRouter.get("/ao-nu", product_controller_1.getAoNu);
productRouter.get("/ao-nu/ao-polo", product_controller_1.getAoPoloNu);
productRouter.get("/ao-nu/ao-thun", product_controller_1.getAoThunNu);
// Male
productRouter.get("/ao-nam", product_controller_1.getAoNam);
productRouter.get("/ao-nam/ao-polo", product_controller_1.getAoPoloNam);
productRouter.get("/ao-nam/ao-thun", product_controller_1.getAoThunNam);
// Kid
productRouter.get("/ao-tre-em", product_controller_1.getAoTreEm);
productRouter.get("/ao-tre-em/ao-polo", product_controller_1.getAoPoloTreEm);
productRouter.get("/ao-tre-em/ao-thun", product_controller_1.getAoThunTreEm);
// Searching
productRouter.get("/search", product_controller_1.searchProductsByKeyword);
exports.default = productRouter;
