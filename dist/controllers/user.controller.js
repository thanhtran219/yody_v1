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
exports.getAll = exports.all_users = void 0;
const app_data_source_1 = require("../database/app-data-source");
const Category_1 = require("../entities/Category");
const category_queries_1 = require("../constants/category.queries");
const all_users = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriesWithChildren = yield app_data_source_1.myDataSource
            .getRepository(Category_1.Category)
            .createQueryBuilder("category")
            .select(["category.categoryId", "category.categoryName"])
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
        const filteredCategories = categoriesWithChildren.map((category) => ({
            categoryId: category.categoryId,
            categoryName: category.categoryName,
            children: category.children.map((child1) => ({
                categoryId: child1.categoryId,
                categoryName: child1.categoryName,
                children: child1.children.map((child2) => ({
                    categoryId: child2.categoryId,
                    categoryName: child2.categoryName,
                })),
            })),
        }));
        res.json({ results: filteredCategories });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.all_users = all_users;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoriesWithChildren = yield app_data_source_1.myDataSource.query(category_queries_1.categoryQueries.getCategoryList);
        if (categoriesWithChildren && categoriesWithChildren.length > 0) {
            // // Check values in recordset is JSON or not
            //   const parsedCategories = categoriesWithChildren.map((category: any) => {
            //     // Parse JSON string in recordset
            //     return {
            //       ...category,
            //       Children: category.Children ? JSON.parse(category.Children) : null,
            //     };
            // });
            res.json({ results: categoriesWithChildren });
        }
        else {
            res.json({ results: null });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getAll = getAll;
