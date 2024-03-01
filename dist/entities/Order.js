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
exports.Order = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const UserAddress_1 = require("./UserAddress");
const Discount_1 = require("./Discount");
const OrderDetail_1 = require("./OrderDetail");
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Order.prototype, "orderID", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserAddress_1.UserAddress, userAddress => userAddress.orders),
    (0, typeorm_1.JoinColumn)({ name: "addressID", referencedColumnName: "addressID" }),
    __metadata("design:type", UserAddress_1.UserAddress)
], Order.prototype, "userAddress", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Order.prototype, "orderedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Discount_1.Discount, discount => discount.orders),
    (0, typeorm_1.JoinColumn)({ name: "discountID", referencedColumnName: "discountID" }),
    __metadata("design:type", Discount_1.Discount)
], Order.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal" }),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 50 }),
    __metadata("design:type", String)
], Order.prototype, "paymentStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 50 }),
    __metadata("design:type", String)
], Order.prototype, "deliveryStatus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderDetail_1.OrderDetail, orderDetail => orderDetail.order),
    __metadata("design:type", Array)
], Order.prototype, "orderDetails", void 0);
exports.Order = Order = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Check)(`"totalPrice" >= 0`)
], Order);
