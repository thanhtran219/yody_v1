import { Like } from "typeorm"
import { myDataSource } from "../database/app-data-source";
import { Product } from "../entities/Product";
import { PRODUCT_MESSAGES } from "../constants/messages";

const getAll = async (page: number, itemsPerPage: number) => {
  try {
    const [products, total] = await myDataSource.getRepository(Product).findAndCount({
        select:["productID", "productName", "productCode", "sellingPrice"],
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
      } else {
        return null;
      }
  } catch (error) {
    console.error(PRODUCT_MESSAGES.GET_ALL_ERROR, error);
    throw error;
  }
};

const searchProductsByKeyword = async (page: number, itemsPerPage: number, keyword: string) => {
  try {
    const [products, total] = await myDataSource.getRepository(Product).findAndCount({
        select:["productID", "productName", "productCode", "sellingPrice"],
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
          productName: Like(`%${keyword}%`),
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
      } else {
        return null;
      }
  } catch (error) {
    console.error(PRODUCT_MESSAGES.GET_ALL_ERROR, error);
    throw error;
  }
};

const getProductsByCategoryID = async (page: number, itemsPerPage: number, categoryID: number) => {
  try {
    const [products, total] = await myDataSource.getRepository(Product).findAndCount({
        select:["productID", "productName", "productCode", "sellingPrice"],
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
      } else {
        return null;
      }
  } catch (error) {
    console.error(PRODUCT_MESSAGES.GET_ALL_ERROR, error);
    throw error;
  }
};

const getProductsByParentCategoryID = async (page: number, itemsPerPage: number, parentCategoryID: number) => {
  try {
    const [products, total] = await myDataSource.getRepository(Product).findAndCount({
        select:["productID", "productName", "productCode", "sellingPrice"],
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
      } else {
        return null;
      }
  } catch (error) {
    console.error(PRODUCT_MESSAGES.GET_ALL_ERROR, error);
    throw error;
  }
};

const productService = {
  getAll,
  getProductsByCategoryID,
  getProductsByParentCategoryID,
  searchProductsByKeyword,
};

export default productService;
