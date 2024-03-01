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
exports.UserAddress = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Order_1 = require("./Order");
let UserAddress = class UserAddress {
};
exports.UserAddress = UserAddress;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserAddress.prototype, "addressID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.addresses),
    (0, typeorm_1.JoinColumn)({ name: "userID", referencedColumnName: "userID" }),
    __metadata("design:type", User_1.User)
], UserAddress.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 50 }),
    __metadata("design:type", String)
], UserAddress.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 11 }),
    __metadata("design:type", String)
], UserAddress.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 50 }),
    __metadata("design:type", String)
], UserAddress.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar" }),
    __metadata("design:type", String)
], UserAddress.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 50 }),
    __metadata("design:type", String)
], UserAddress.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 50 }),
    __metadata("design:type", String)
], UserAddress.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 50 }),
    __metadata("design:type", String)
], UserAddress.prototype, "district", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 50 }),
    __metadata("design:type", String)
], UserAddress.prototype, "ward", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], UserAddress.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], UserAddress.prototype, "modifiedDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], UserAddress.prototype, "isDefaultAddress", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Order_1.Order, order => order.userAddress),
    __metadata("design:type", Order_1.Order)
], UserAddress.prototype, "orders", void 0);
exports.UserAddress = UserAddress = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Check)(`"modifiedDate" >= "createdDate"`)
], UserAddress);
