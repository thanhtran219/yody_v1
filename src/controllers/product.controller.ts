import { NextFunction, Request, Response } from "express";
import productService from "../services/product.service";
import { HTTP_MESSAGES} from "../constants/messages";
import { ITEMS_PER_PAGE } from "../constants/pagination";
import CATEGORY_ID from "../constants/category.id";
import { AppError } from "../errors/AppError";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../errors/NotFoundError";

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  let page: number = 1;
  if (req.query.page !== undefined) {
    page = Number(req.query.page);
    if (isNaN(page) || page === 0) {
     const err = new AppError(HTTP_MESSAGES.INVALID_PAGE_PARAMETER, StatusCodes.BAD_REQUEST);
     return next(err);
    }
  }

  const results = await productService.getAll(page, ITEMS_PER_PAGE);
  res.json({ status: HTTP_MESSAGES.SUCCESS, results });
};

export const searchProductsByKeyword = async (req: Request, res: Response, next: NextFunction) => {
  let page: number = 1;
  if (req.query.page !== undefined) {
    page = Number(req.query.page);
    if (isNaN(page) || page === 0) {
      const err = new AppError(HTTP_MESSAGES.INVALID_PAGE_PARAMETER, StatusCodes.BAD_REQUEST);
      return next(err);
    }
  }
  
  let keyword = String(req.query.keyword);
  const results = await productService.searchProductsByKeyword(page, ITEMS_PER_PAGE, keyword);

  if (!results) {
    return next(new NotFoundError(HTTP_MESSAGES.NOT_FOUND));
  }
  res.json({ status: HTTP_MESSAGES.SUCCESS, results });
};

// Female
export const getAoNu = async (req: Request, res: Response, next: NextFunction) => {
  await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.ao_nu);
};

export const getAoPoloNu = async (req: Request, res: Response, next: NextFunction) => {
  await getProductsByCategoryID(req, res, next, CATEGORY_ID.ao_polo_nu);
};

export const getAoThunNu = async (req: Request, res: Response, next: NextFunction) => {
  await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_thun_nu);
};

// Male
export const getAoNam = async (req: Request, res: Response, next: NextFunction) => {
  await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.ao_nam);
};

export const getAoPoloNam = async (req: Request, res: Response, next: NextFunction) => {
  await getProductsByCategoryID(req, res, next, CATEGORY_ID.ao_polo_nam);
};

export const getAoThunNam = async (req: Request, res: Response, next: NextFunction) => {
  await getProductsByCategoryID(req, res, next, CATEGORY_ID.ao_thun_nam);
};

// Kid
export const getAoTreEm = async (req: Request, res: Response, next: NextFunction) => {
  await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.ao_tre_em);
};

export const getAoPoloTreEm = async (req: Request, res: Response, next: NextFunction) => {
  await getProductsByCategoryID(req, res, next, CATEGORY_ID.ao_polo_tre_em);
};

export const getAoThunTreEm = async (req: Request, res: Response, next: NextFunction) => {
  await getProductsByCategoryID(req, res, next, CATEGORY_ID.ao_thun_tre_em);
};

const getProductsByCategoryID = async (req: Request, res: Response, next: NextFunction, categoryID: number) => {
  let page: number = 1;
  if (req.query.page !== undefined) {
    page = Number(req.query.page);
    if (isNaN(page) || page === 0) {
     const err = new AppError(HTTP_MESSAGES.INVALID_PAGE_PARAMETER, StatusCodes.BAD_REQUEST);
     return next(err);
    }
  }

  const results = await productService.getProductsByCategoryID(page, ITEMS_PER_PAGE, categoryID);
  if (!results) {
    return next(new NotFoundError(HTTP_MESSAGES.NOT_FOUND));
  }
  res.json({ status: HTTP_MESSAGES.SUCCESS, results });
};

const getProductsByParentCategoryID = async (req: Request, res: Response, next: NextFunction , parentCategoryID: number) => {
  let page: number = 1;
  if (req.query.page !== undefined) {
    page = Number(req.query.page);
    if (isNaN(page) || page === 0) {
     const err = new AppError(HTTP_MESSAGES.INVALID_PAGE_PARAMETER, StatusCodes.BAD_REQUEST);
     return next(err);
    }
  }

  const results = await productService.getProductsByParentCategoryID(page, ITEMS_PER_PAGE, parentCategoryID);
  if (!results) {
    return next(new NotFoundError(HTTP_MESSAGES.NOT_FOUND));
  }
  res.json({ status: HTTP_MESSAGES.SUCCESS, results });
};