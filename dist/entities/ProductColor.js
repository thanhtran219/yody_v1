"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductColor = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Color_1 = require("./Color");
const Product_1 = require("./Product");
const ProductDetail_1 = require("./ProductDetail");
const ProductImage_1 = require("./ProductImage");
let ProductColor = class ProductColor {
};
exports.ProductColor = ProductColor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductColor.prototype, "productColorID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.productColors),
    (0, typeorm_1.JoinColumn)({ name: "productID", referencedColumnName: "productID" }),
    __metadata("design:type", Product_1.Product)
], ProductColor.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Color_1.Color, (color) => color.productColors),
    (0, typeorm_1.JoinColumn)({ name: "colorID", referencedColumnName: "colorID" }),
    __metadata("design:type", Color_1.Color)
], ProductColor.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], ProductColor.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], ProductColor.prototype, "modifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductDetail_1.ProductDetail, productDetail => productDetail.productColor),
    __metadata("design:type", Array)
], ProductColor.prototype, "productDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductImage_1.ProductImage, productImage => productImage.productColor),
    __metadata("design:type", Array)
], ProductColor.prototype, "images", void 0);
exports.ProductColor = ProductColor = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(["product", "color"]),
    (0, typeorm_1.Check)(`"modifiedDate" >= "createdDate"`)
], ProductColor);
