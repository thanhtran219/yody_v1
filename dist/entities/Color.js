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
exports.Color = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ProductColor_1 = require("./ProductColor");
// import {}
let Color = class Color {
};
exports.Color = Color;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "nvarchar", length: 5 }),
    __metadata("design:type", String)
], Color.prototype, "colorID", void 0);
__decorate([
    (0, typeorm_1.Column)("nvarchar"),
    __metadata("design:type", String)
], Color.prototype, "colorName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", nullable: true }),
    __metadata("design:type", String)
], Color.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Color.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Color.prototype, "modifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductColor_1.ProductColor, productColor => productColor.color),
    __metadata("design:type", Array)
], Color.prototype, "productColors", void 0);
exports.Color = Color = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Check)(`"modifiedDate" >= "createdDate"`)
], Color);
