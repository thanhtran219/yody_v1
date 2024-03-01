import { Request, Response } from "express";
import productService from "../services/product.service";
import { HTTP_MESSAGES } from "../constants/messages";
import HTTP_STATUS from "../constants/httpStatus";
import { ITEMS_PER_PAGE } from "../constants/pagination";
import CATEGORY_ID from "../constants/category.id";

export const getAllProducts = async (req: Request, res: Response) => {
  let page: number = 1;
  if (req.query.page !== undefined) {
    page = Number(req.query.page);
    if (page === 0 || isNaN(page)) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({ error: HTTP_MESSAGES.INVALID_PAGE_PARAMETER });
      return;
    }
  }

  try {
    const results = await productService.getAll(page, ITEMS_PER_PAGE);
    if (results) {
      res.json({ message: HTTP_MESSAGES.SUCCESS, results });
    } else {
      res.status(HTTP_STATUS.OK).json({ message: HTTP_MESSAGES.NOT_FOUND, results });
    }
  } catch (error) {
    console.error(error);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: HTTP_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

export const searchProductsByKeyword = async (req: Request, res: Response) => {
  let page: number = 1;
  if (req.query.page !== undefined) {
    page = Number(req.query.page);
    if (page === 0 || isNaN(page)) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({ error: HTTP_MESSAGES.INVALID_PAGE_PARAMETER });
      return;
    }
  }

  let keyword = String(req.query.keyword);

  try {
    const results = await productService.searchProductsByKeyword(page, ITEMS_PER_PAGE, keyword);
    if (results) {
      res.json({ message: HTTP_MESSAGES.SUCCESS, results });
    } else {
      res.status(HTTP_STATUS.OK).json({ message: HTTP_MESSAGES.NOT_FOUND, results });
    }
  } catch (error) {
    console.error(error);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: HTTP_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

// Female
export const getAoNu = async (req: Request, res: Response) => {
  await getProductsByParentCategoryID(req, res, CATEGORY_ID.ao_nu);
};

export const getAoPoloNu = async (req: Request, res: Response) => {
  await getProductsByCategoryID(req, res, CATEGORY_ID.ao_polo_nu);
};

export const getAoThunNu = async (req: Request, res: Response) => {
  await getProductsByCategoryID(req, res, CATEGORY_ID.ao_thun_nu);
};

// Male
export const getAoNam = async (req: Request, res: Response) => {
  await getProductsByParentCategoryID(req, res, CATEGORY_ID.ao_nam);
};

export const getAoPoloNam = async (req: Request, res: Response) => {
  await getProductsByCategoryID(req, res, CATEGORY_ID.ao_polo_nam);
};

export const getAoThunNam = async (req: Request, res: Response) => {
  await getProductsByCategoryID(req, res, CATEGORY_ID.ao_thun_nam);
};

// Kid
export const getAoTreEm = async (req: Request, res: Response) => {
  await getProductsByParentCategoryID(req, res, CATEGORY_ID.ao_tre_em);
};

export const getAoPoloTreEm = async (req: Request, res: Response) => {
  await getProductsByCategoryID(req, res, CATEGORY_ID.ao_polo_tre_em);
};

export const getAoThunTreEm = async (req: Request, res: Response) => {
  await getProductsByCategoryID(req, res, CATEGORY_ID.ao_thun_tre_em);
};

const getProductsByCategoryID = async (req: Request, res: Response, categoryID: number) => {
  let page: number = 1;
  if (req.query.page !== undefined) {
    page = Number(req.query.page);
    if (page === 0 || isNaN(page)) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({ error: HTTP_MESSAGES.INVALID_PAGE_PARAMETER });
      return;
    }
  }

  try {
    const results = await productService.getProductsByCategoryID(page, ITEMS_PER_PAGE, categoryID);
    if (results) {
      res.json({ message: HTTP_MESSAGES.SUCCESS, results });
    } else {
      res.status(HTTP_STATUS.OK).json({ message: HTTP_MESSAGES.NOT_FOUND, results });
    }
  } catch (error) {
    console.error(error);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: HTTP_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};

const getProductsByParentCategoryID = async (req: Request, res: Response, parentCategoryID: number) => {
  let page: number = 1;
  if (req.query.page !== undefined) {
    page = Number(req.query.page);
    if (page === 0 || isNaN(page)) {
      res.status(HTTP_STATUS.BAD_REQUEST).json({ error: HTTP_MESSAGES.INVALID_PAGE_PARAMETER });
      return;
    }
  }

  try {
    const results = await productService.getProductsByParentCategoryID(page, ITEMS_PER_PAGE, parentCategoryID);
    if (results) {
      res.json({ message: "Success", results });
    } else {
      res.status(HTTP_STATUS.OK).json({ message: HTTP_MESSAGES.NOT_FOUND, results });
    }
  } catch (error) {
    console.error(error);
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ error: HTTP_MESSAGES.INTERNAL_SERVER_ERROR });
  }
};