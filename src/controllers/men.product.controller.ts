import { NextFunction, Request, Response } from "express";
import CATEGORY_ID from "../constants/category.id";
import { getProductsByCategoryID, getProductsByParentCategoryID } from "./product.controller";

// Men shirts
export const getAoNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.ao_nam);
};
  
export const getAoPoloNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.ao_polo_nam);
};

export const getAoThunNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.ao_thun_nam);
};

export const getAoKhoacNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_khoac_nam);
};

export const getAoChongNangNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_chong_nang_nam);
};

export const getAoNiNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_ni_nam);
};

export const getAoGiuNhietNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_giu_nhiet_nam);
};

export const getAoSoMiNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_so_mi_nam);
};

// Men pants
export const getQuanNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.quan_nam);
};

export const getQuanJeansNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_jeans_nam);
};

export const getQuanAuNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_au_nam);
};

export const getQuanKakiNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_kaki_nam);
};

export const getQuanShortNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_short_nam);
};

// Đồ bộ
export const getDoBoNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.do_bo_nam);
};

// Đồ mặc trong
export const getDoMacTrongNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.do_mac_trong_nam);
};

export const getQuanLotNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_lot_nam);
};

export const getAoBaLoNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_ba_lo_nam);
};

// Đồ thể thao
export const getDoTheThaoNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.do_the_thao_nu);
};

export const getBoTheThaoNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.bo_the_thao_nam);
};

export const getAoThunTheThaoNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_thun_the_thao_nam);
};

export const getAoPoloTheThaoNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.ao_polo_the_thao_nam);
};

export const getQuanTheThaoNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next,CATEGORY_ID.quan_the_thao_nam);
};

// Phụ kiện
export const getPhuKienNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByParentCategoryID(req, res, next, CATEGORY_ID.phu_kien_nam);
};

export const getGiayNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.giay_nam);
};

export const getThatLungNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.that_lung_nam);
};

export const getPhuKienKhacNam = async (req: Request, res: Response, next: NextFunction) => {
    await getProductsByCategoryID(req, res, next, CATEGORY_ID.phu_kien_khac_nam);
};

const menProductController = {
    getAoNam, getAoPoloNam, getAoThunNam, getAoKhoacNam, getAoChongNangNam, getAoNiNam, getAoGiuNhietNam, getAoSoMiNam,
    getQuanNam, getQuanJeansNam, getQuanAuNam, getQuanKakiNam, getQuanShortNam,
    getDoBoNam, getDoMacTrongNam, getQuanLotNam, getAoBaLoNam,
    getDoTheThaoNam, getBoTheThaoNam, getAoThunTheThaoNam, getAoPoloTheThaoNam, getQuanTheThaoNam,
    getPhuKienNam, getGiayNam, getThatLungNam, getPhuKienKhacNam
}

export default menProductController;