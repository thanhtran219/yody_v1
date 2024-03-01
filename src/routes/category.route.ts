import {Router} from "express";
import { getAllCategories } from "../controllers/category.controller";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);

export default categoryRouter;