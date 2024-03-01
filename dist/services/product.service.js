"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const app_data_source_1 = require("../database/app-data-source");
const Product_1 = require("../entities/Product");
const messages_1 = require("../constants/messages");
const getAll = (page, itemsPerPage) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [products, total] = yield app_data_source_1.myDataSource.getRepository(Product_1.Product).findAndCount({
            select: ["productID", "productName", "productCode", "sellingPrice"],
            relations: {
                discount: true,
                productColors: {
                    color: true,
                    images: true,
                    productDetails: {
                        size: true
                    }
                }
            },
            skip: (page - 1) * itemsPerPage,
            take: itemsPerPage
        });
        if (products && products.length > 0) {
            const totalPages = Math.ceil(total / itemsPerPage);
            const result = {
                totalPage: totalPages,
                currentPage: page,
                products: products
            };
            return result;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.error(messages_1.PRODUCT_MESSAGES.GET_ALL_ERROR, error);
        throw error;
    }
});
const searchProductsByKeyword = (page, itemsPerPage, keyword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [products, total] = yield app_data_source_1.myDataSource.getRepository(Product_1.Product).findAndCount({
            select: ["productID", "productName", "productCode", "sellingPrice"],
            relations: {
                discount: true,
                productColors: {
                    color: true,
                    images: true,
                    productDetails: {
                        size: true
                    }
                }
            },
            where: {
                productName: (0, typeorm_1.Like)(`%${keyword}%`),
            },
            skip: (page - 1) * itemsPerPage,
            take: itemsPerPage
        });
        if (products && products.length > 0) {
            const totalPages = Math.ceil(total / itemsPerPage);
            const result = {
                totalPage: totalPages,
                currentPage: page,
                products: products
            };
            return result;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.error(messages_1.PRODUCT_MESSAGES.GET_ALL_ERROR, error);
        throw error;
    }
});
const getProductsByCategoryID = (page, itemsPerPage, categoryID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [products, total] = yield app_data_source_1.myDataSource.getRepository(Product_1.Product).findAndCount({
            select: ["productID", "productName", "productCode", "sellingPrice"],
            relations: {
                discount: true,
                productColors: {
                    color: true,
                    images: true,
                    productDetails: {
                        size: true
                    }
                }
            },
            where: {
                categories: {
                    categoryID: categoryID,
                }
            },
            skip: (page - 1) * itemsPerPage,
            take: itemsPerPage
        });
        if (products && products.length > 0) {
            const totalPages = Math.ceil(total / itemsPerPage);
            const result = {
                totalPage: totalPages,
                currentPage: page,
                products: products
            };
            return result;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.error(messages_1.PRODUCT_MESSAGES.GET_ALL_ERROR, error);
        throw error;
    }
});
const getProductsByParentCategoryID = (page, itemsPerPage, parentCategoryID) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [products, total] = yield app_data_source_1.myDataSource.getRepository(Product_1.Product).findAndCount({
            select: ["productID", "productName", "productCode", "sellingPrice"],
            relations: {
                discount: true,
                productColors: {
                    color: true,
                    images: true,
                    productDetails: {
                        size: true
                    }
                }
            },
            where: {
                categories: {
                    parent: {
                        categoryID: parentCategoryID
                    }
                }
            },
            skip: (page - 1) * itemsPerPage,
            take: itemsPerPage
        });
        if (products && products.length > 0) {
            const totalPages = Math.ceil(total / itemsPerPage);
            const result = {
                totalPage: totalPages,
                currentPage: page,
                products: products
            };
            return result;
        }
        else {
            return null;
        }
    }
    catch (error) {
        console.error(messages_1.PRODUCT_MESSAGES.GET_ALL_ERROR, error);
        throw error;
    }
});
const productService = {
    getAll,
    getProductsByCategoryID,
    getProductsByParentCategoryID,
    searchProductsByKeyword,
};
exports.default = productService;
