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
exports.getAllCategory = exports.all_users = void 0;
const app_data_source_1 = require("../database/app-data-source");
const Category_1 = require("../entities/Category");
const category_service_1 = __importDefault(require("../services/category.service"));
const all_users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriesWithChildren = yield app_data_source_1.myDataSource
            .getRepository(Category_1.Category)
            .createQueryBuilder("category")
            .select(["category.categoryID", "category.categoryName"])
            .leftJoinAndSelect("category.children", "children1")
            .leftJoinAndSelect("children1.children", "children2")
            .leftJoinAndSelect("children2.children", "children3")
            .where("category.ParentCategoryID IS NULL")
            .getMany();
        // const categoriesWithChildren = await myDataSource
        //   .getRepository(Category)
        //   .find({
        //     relations: {
        //       children: {
        //         children: true,
        //       },
        //     },
        //     where: {
        //       parent: IsNull(),
        //     },
        //   });
        // const filteredCategories = categoriesWithChildren.map((category) => ({
        //   categoryId: category.categoryID,
        //   categoryName: category.categoryName,
        //   children: category.children.map((child1) => ({
        //     categoryId: child1.categoryID,
        //     categoryName: child1.categoryName,
        //     children: child1.children.map((child2) => ({
        //       categoryId: child2.categoryID,
        //       categoryName: child2.categoryName,
        //     })),
        //   })),
        // }));
        res.json({ results: categoriesWithChildren });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.all_users = all_users;
const getAllCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriesWithChildren = yield category_service_1.default.getAll();
        res.json({ results: categoriesWithChildren });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getAllCategory = getAllCategory;
