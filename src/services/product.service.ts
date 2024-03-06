import { Like } from "typeorm";
import { myDataSource } from "../database/app-data-source";
import { Product } from "../entities/Product";

// Get all Product
const getAll = async (page: number, itemsPerPage: number) => {
  return await getProducts(page, itemsPerPage, {});
};

// Search products by productName or productCode
const searchProductsByKeyword = async (page: number, itemsPerPage: number, keyword: string) => {
  const conditions = [
    { productName: Like(`%${keyword}%`) },
    { productCode: Like(`%${keyword}%`) },
  ];
  return await getProducts(page, itemsPerPage, conditions);
};

// Get Products by categoryID
const getProductsByCategoryID = async (page: number, itemsPerPage: number, categoryID: number) => {
  const conditions = {
    categories: {
      categoryID: categoryID,
    },
  };
  return await getProducts(page, itemsPerPage, conditions);
};

// Get Products by parentCategoryID
const getProductsByParentCategoryID = async (page: number, itemsPerPage: number, parentCategoryID: number) => {
  const conditions = {
    categories: {
      parent: {
        categoryID: parentCategoryID,
      },
    },
  };
  return await getProducts(page, itemsPerPage, conditions);
};

// Common function get Products
const getProducts = async (page: number, itemsPerPage: number, conditions: Record<string, any>) => {
  const [products, total] = await myDataSource
    .getRepository(Product)
    .findAndCount({
      select: ["productID", "productName", "productCode", "sellingPrice"],
      relations: {
        discount: true,
        productColors: {
          color: true,
          images: true,
          productDetails: {
            size: true,
          },
        },
      },
      where: conditions,
      skip: (page - 1) * itemsPerPage,
      take: itemsPerPage,
    });

  if (!products || products.length === 0) return null;

  const totalPages = Math.ceil(total / itemsPerPage);
  const result = {
    totalPage: totalPages,
    currentPage: page,
    products: products,
  };

  return result;
};

const productService = {
  getAll,
  searchProductsByKeyword,
  getProductsByCategoryID,
  getProductsByParentCategoryID,
};

export default productService;
