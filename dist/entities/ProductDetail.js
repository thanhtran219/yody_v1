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
exports.ProductDetail = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ProductColor_1 = require("./ProductColor");
const Size_1 = require("./Size");
const Cart_1 = require("./Cart");
const OrderDetail_1 = require("./OrderDetail");
let ProductDetail = class ProductDetail {
};
exports.ProductDetail = ProductDetail;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductDetail.prototype, "productDetailID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProductColor_1.ProductColor, productColor => productColor.productDetails),
    (0, typeorm_1.JoinColumn)({ name: "productColorID", referencedColumnName: "productColorID" }),
    __metadata("design:type", ProductColor_1.ProductColor)
], ProductDetail.prototype, "productColor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Size_1.Size, size => size.productDetails),
    (0, typeorm_1.JoinColumn)({ name: "sizeID", referencedColumnName: "sizeID" }),
    __metadata("design:type", Size_1.Size)
], ProductDetail.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductDetail.prototype, "soldQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ProductDetail.prototype, "inventoryQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], ProductDetail.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], ProductDetail.prototype, "modifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Cart_1.Cart, cart => cart.productDetail),
    __metadata("design:type", Cart_1.Cart)
], ProductDetail.prototype, "carts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderDetail_1.OrderDetail, orderDetail => orderDetail.productDetail),
    __metadata("design:type", Array)
], ProductDetail.prototype, "orderDetails", void 0);
exports.ProductDetail = ProductDetail = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(["productColor", "size"]),
    (0, typeorm_1.Check)(`"modifiedDate" >= "createdDate"`),
    (0, typeorm_1.Check)(`"soldQuantity" >= 0`),
    (0, typeorm_1.Check)(`"inventoryQuantity" >= 0`)
], ProductDetail);
