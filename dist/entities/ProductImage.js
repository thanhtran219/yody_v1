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
exports.ProductImage = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ProductColor_1 = require("./ProductColor");
let ProductImage = class ProductImage {
};
exports.ProductImage = ProductImage;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductImage.prototype, "imageID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar" }),
    __metadata("design:type", String)
], ProductImage.prototype, "imageName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProductColor_1.ProductColor, productColor => productColor.images),
    (0, typeorm_1.JoinColumn)({ name: "productColorID", referencedColumnName: "productColorID" }),
    __metadata("design:type", ProductColor_1.ProductColor)
], ProductImage.prototype, "productColor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: "max", nullable: true }),
    __metadata("design:type", String)
], ProductImage.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], ProductImage.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], ProductImage.prototype, "modifiedDate", void 0);
exports.ProductImage = ProductImage = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Check)(`"modifiedDate" >= "createdDate"`)
], ProductImage);
