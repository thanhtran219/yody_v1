import { Request, Response } from "express";
import categoryService from "../services/category.service";
import { HTTP_MESSAGES } from "../constants/messages";

export const getAllCategories = async (req: Request, res: Response) => {
  const results = await categoryService.getAll();
  res.json({ status: HTTP_MESSAGES.SUCCESS, results });
};
