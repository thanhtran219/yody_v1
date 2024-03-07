import { NextFunction, Request, Response } from "express";
import CATEGORY_ID from "../constants/category.id";
import { getProductsByCategoryID, getProductsByParentCategoryID } from "./product.controller";

// Children
export const getAoTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.ao_tre_em);
};

export const getAoPoloTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.ao_polo_tre_em);
};

export const getAoThunTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.ao_thun_tre_em);
};

export const getAoKhoacTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_khoac_tre_em);
};

export const getAoNiTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_ni_tre_em);
};

export const getAoGiuNhietTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_giu_nhiet_tre_em);
};

export const getAoLenTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_len_tre_em);
};

// Children pants
export const getQuanTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.quan_tre_em);
};

export const getQuanJeansTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_jeans_tre_em);
};

export const getQuanKakiTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_kaki_tre_em);
};

export const getQuanShortTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_short_tre_em);
};

export const getQuanNiTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_ni_tre_em);
};

export const getQuanLeggingTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_legging_tre_em);
};

// Đồ bộ
export const getDoBoTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.do_bo_tre_em);
};

// Đồ thể thao
export const getDoTheThaoTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.do_the_thao_tre_em);
};

// Chân váy
export const getChanVayBeGai = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.chan_vay_be_gai);
};

// Đầm
export const getDamBeGai = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.dam_be_gai);
};

// Đầm
export const getPhuKienTreEm = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.phu_kien_tre_em);
};

const childrenProductController = {
    getAoTreEm, getAoPoloTreEm, getAoThunTreEm, getAoKhoacTreEm, getAoNiTreEm, getAoGiuNhietTreEm, getAoLenTreEm,
    getQuanTreEm, getQuanJeansTreEm, getQuanKakiTreEm, getQuanShortTreEm, getQuanNiTreEm, getQuanLeggingTreEm,
    getDoBoTreEm, getDoTheThaoTreEm, getChanVayBeGai, getDamBeGai,
    getPhuKienTreEm
}

export default childrenProductController;