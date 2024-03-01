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
exports.Size = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ProductDetail_1 = require("./ProductDetail");
let Size = class Size {
};
exports.Size = Size;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Size.prototype, "sizeID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", length: 10 }),
    __metadata("design:type", String)
], Size.prototype, "sizeName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "nvarchar", nullable: true }),
    __metadata("design:type", String)
], Size.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Size.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("date"),
    __metadata("design:type", Date)
], Size.prototype, "modifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductDetail_1.ProductDetail, productDetail => productDetail.size),
    __metadata("design:type", Array)
], Size.prototype, "productDetails", void 0);
exports.Size = Size = __decorate([
    (0, typeorm_1.Entity)(),
    (0, typeorm_1.Check)(`"modifiedDate" >= "createdDate"`)
], Size);
