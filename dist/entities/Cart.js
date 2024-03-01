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
exports.Cart = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const ProductDetail_1 = require("./ProductDetail");
let Cart = class Cart {
};
exports.Cart = Cart;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Cart.prototype, "cartID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.carts),
    (0, typeorm_1.JoinColumn)({ name: "userID", referencedColumnName: "userID" }),
    __metadata("design:type", User_1.User)
], Cart.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProductDetail_1.ProductDetail, productDetail => productDetail.carts),
    (0, typeorm_1.JoinColumn)({ name: "productDetailID", referencedColumnName: "productDetailID" }),
    __metadata("design:type", ProductDetail_1.ProductDetail)
], Cart.prototype, "productDetail", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cart.prototype, "quantity", void 0);
exports.Cart = Cart = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Unique)(["user", "productDetail"]),
    (0, typeorm_1.Check)(`"quantity" > 0`)
], Cart);
