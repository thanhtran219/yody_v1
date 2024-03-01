import { Request, Response } from "express";
import categoryService from "../services/category.service";
import { HTTP_MESSAGES } from "../constants/messages";
import HTTP_STATUS from "../constants/httpStatus";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const results = await categoryService.getAll();

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
