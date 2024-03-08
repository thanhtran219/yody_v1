import { Between, Like, In, MoreThan, MoreThanOrEqual } from "typeorm";
import { myDataSource } from "../database/app-data-source";
import { Product } from "../entities/Product";
import { getFirstDayOfPreviousMonthAndCurrentDate } from "../utils/date.util";
import CATEGORY_ID from "../constants/category.id";

// Get all Product
const getAll = async (page: number, itemsPerPage: number) => {
  return await getProducts(page, itemsPerPage, {}, {});
};

// Get Yody Polo Products
const getYodyPolo = async (page: number, itemsPerPage: number) => {
  const conditions = {
    categories: {
      categoryID: In([CATEGORY_ID.ao_polo_nu, CATEGORY_ID.ao_polo_nam, CATEGORY_ID.ao_polo_tre_em]),
    },
  };
  return await getProducts(page, itemsPerPage, conditions, {});
};

// Get Yody Sport Products
const getYodySport = async (page: number, itemsPerPage: number) => {
  const conditions = {
    categories: {
      parent: {
        categoryID: In([CATEGORY_ID.do_the_thao_nu, CATEGORY_ID.do_the_thao_nam, CATEGORY_ID.do_the_thao_tre_em]),
      },
    },
  };
  return await getProducts(page, itemsPerPage, conditions, {});
};

// Get new arrivals
const getNewArrivals = async (page: number, itemsPerPage: number) => {
  const dateConditions = getFirstDayOfPreviousMonthAndCurrentDate();

  const conditions = {
    createdDate: Between(dateConditions.firstDayOfPreviousMonth, dateConditions.currentDate)
  }

  const orderBy: Record<string, 'ASC' | 'DESC'> = {
    createdDate: 'DESC',
  };

  return await getProducts(page, itemsPerPage, conditions, orderBy);
};

// Search products by productName or productCode
const searchProductsByKeyword = async (page: number, itemsPerPage: number, keyword: string) => {
  const conditions = [
    { productName: Like(`%${keyword}%`) },
    { productCode: Like(`%${keyword}%`) },
  ];
  return await getProducts(page, itemsPerPage, conditions, {});
};

// Get Products by categoryID
const getProductsByCategoryID = async (page: number, itemsPerPage: number, categoryID: number) => {
  const conditions = {
    categories: {
      categoryID: categoryID,
    },
  };
  return await getProducts(page, itemsPerPage, conditions, {});
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
  return await getProducts(page, itemsPerPage, conditions, {});
};

// Common function get Products
const getProducts = async (page: number, itemsPerPage: number, conditions: Record<string, any>, orderBy: Record<string, 'ASC' | 'DESC'>) => {
  const [products, total] = await myDataSource
    .getRepository(Product)
    .findAndCount({
      select: ["productID", "productName", "productCode", "sellingPrice", "createdDate"],
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
      order: orderBy,
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
  getNewArrivals,
  getYodyPolo,
  getYodySport,
};

export default productService;
