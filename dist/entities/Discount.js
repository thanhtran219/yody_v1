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
exports.Discount = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
const Order_1 = require("./Order");
let Discount = class Discount {
};
exports.Discount = Discount;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Discount.prototype, "discountID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Discount.prototype, "discountCode", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar"),
    __metadata("design:type", String)
], Discount.prototype, "discountName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 3, scale: 2 }),
    __metadata("design:type", Number)
], Discount.prototype, "discountRate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", nullable: true }),
    __metadata("design:type", String)
], Discount.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Discount.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Discount.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Discount.prototype, "inventoryQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Discount.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Discount.prototype, "modifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Product_1.Product, (product) => product.discount),
    __metadata("design:type", Array)
], Discount.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Order_1.Order, order => order.discount),
    __metadata("design:type", Array)
], Discount.prototype, "orders", void 0);
exports.Discount = Discount = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Check)(`"modifiedDate" >= "createdDate"`),
    (0, typeorm_1.Check)(`"endDate" >= "startDate"`),
    (0, typeorm_1.Check)(`"inventoryQuantity" >= 0`),
    (0, typeorm_1.Check)(`"discountRate" >= 0 AND "discountRate" <= 1.00`)
], Discount);
