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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_data_source_1 = require("../database/app-data-source");
const category_queries_1 = __importDefault(require("../constants/category.queries"));
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield app_data_source_1.myDataSource.query(category_queries_1.default.getCategoryList);
    if (!categories || categories.length === 0)
        return [];
    const parsedCategories = categories.map((category) => {
        return Object.assign(Object.assign({}, category), { Children: category.Children ? JSON.parse(category.Children) : null });
    });
    return parsedCategories;
});
const categoryService = {
    getAll,
};
exports.default = categoryService;
