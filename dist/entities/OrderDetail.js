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
exports.OrderDetail = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
const ProductDetail_1 = require("./ProductDetail");
let OrderDetail = class OrderDetail {
};
exports.OrderDetail = OrderDetail;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderDetail.prototype, "orderDetailID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order_1.Order, order => order.orderDetails),
    (0, typeorm_1.JoinColumn)({ name: "orderID", referencedColumnName: "orderID" }),
    __metadata("design:type", Order_1.Order)
], OrderDetail.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProductDetail_1.ProductDetail, productDetail => productDetail.orderDetails),
    (0, typeorm_1.JoinColumn)({ name: "productDetailID", referencedColumnName: "productDetailID" }),
    __metadata("design:type", ProductDetail_1.ProductDetail)
], OrderDetail.prototype, "productDetail", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], OrderDetail.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal"),
    __metadata("design:type", Number)
], OrderDetail.prototype, "price", void 0);
exports.OrderDetail = OrderDetail = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(["order", "productDetail"]),
    (0, typeorm_1.Check)(`"quantity" > 0`),
    (0, typeorm_1.Check)(`"price" > 0`)
], OrderDetail);
