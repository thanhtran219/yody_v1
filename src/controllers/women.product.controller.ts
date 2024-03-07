import { NextFunction, Request, Response } from "express";
import CATEGORY_ID from "../constants/category.id";
import { getProductsByCategoryID, getProductsByParentCategoryID } from "./product.controller";

// Women Shirts
export const getAoNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.ao_nu);
};
  
export const getAoPoloNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.ao_polo_nu);
};

export const getAoThunNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_thun_nu);
};

export const getAoKhoacNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_khoac_nu);
};

export const getAoChongNangNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_chong_nang_nu);
};

export const getAoNiNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_ni_nu);
};

export const getAoGiuNhietNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_giu_nhiet_nu);
};

export const getAoLenNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_len_nu);
};
  
export const getAoSoMiNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_so_mi_nu);
};

// Women pants
export const getQuanNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.quan_nu);
};

export const getQuanJeansNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_jeans_nu);
};

export const getQuanAuNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_au_nu);
};

export const getQuanKakiNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_kaki_nu);
};

export const getQuanShortNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_short_nu);
};

export const getQuanNiNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_ni_nu);
};

// Đồ bộ
export const getDoBoNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.do_bo_nu);
};

// Đồ mặc trong
export const getDoMacTrongNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.do_mac_trong_nu);
};

export const getDoLotNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.do_lot_nu);
};

export const getAoHaiDayBaLoNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_hai_day_ba_lo_nu);
};

// Đồ thể thao
export const getDoTheThaoNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.do_the_thao_nu);
};

export const getBoTheThaoNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.bo_the_thao_nu);
};

export const getAoThunTheThaoNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_thun_the_thao_nu);
};

export const getAoPoloTheThaoNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_polo_the_thao_nu);
};

export const getQuanTheThaoNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_the_thao_nu);
};

// Chân váy
export const getChanVayNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.chan_vay_nu);
};

// Đầm
export const getDamNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.dam_nu);
};

// Phụ kiện
export const getPhuKienNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.phu_kien_nu);
};

export const getGiayNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.giay_nu);
};

export const getTuiXachNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.tui_xach_nu);
};

export const getPhuKienKhacNu = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.phu_kien_khac_nu);
};

const womenProductController = {
    getAoNu, getAoPoloNu, getAoThunNu, getAoKhoacNu, getAoChongNangNu, getAoNiNu, getAoGiuNhietNu, getAoLenNu, getAoSoMiNu,
    getQuanNu, getQuanJeansNu, getQuanAuNu, getQuanKakiNu, getQuanShortNu, getQuanNiNu,
    getDoBoNu, getDoMacTrongNu, getDoLotNu, getAoHaiDayBaLoNu,
    getDoTheThaoNu, getBoTheThaoNu, getAoThunTheThaoNu, getAoPoloTheThaoNu, getQuanTheThaoNu,
    getChanVayNu, getDamNu,
    getPhuKienNu, getGiayNu, getTuiXachNu, getPhuKienKhacNu

}

export default womenProductController;