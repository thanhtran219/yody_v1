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
exports.Product = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Category_1 = require("./Category");
const Discount_1 = require("./Discount");
const ProductColor_1 = require("./ProductColor");
let Product = class Product {
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "productID", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar"),
    __metadata("design:type", String)
], Product.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Product.prototype, "productCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Product.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal"),
    __metadata("design:type", Number)
], Product.prototype, "inputPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal"),
    __metadata("design:type", Number)
], Product.prototype, "sellingPrice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Discount_1.Discount, (discount) => discount.products),
    (0, typeorm_1.JoinColumn)({ name: "discountID" }),
    __metadata("design:type", Discount_1.Discount)
], Product.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Product.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Product.prototype, "modifiedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "ntext", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "feature", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "productLine", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Category_1.Category, (category) => category.products),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Product.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductColor_1.ProductColor, productColor => productColor.product),
    __metadata("design:type", Array)
], Product.prototype, "productColors", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Check)(`"modifiedDate" >= "createdDate"`),
    (0, typeorm_1.Check)(`"inputPrice" >=0`),
    (0, typeorm_1.Check)(`"sellingPrice" >=0`)
], Product);
