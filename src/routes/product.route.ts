import {Router} from "express";
import { getAllProducts, getAoNam, getAoNu, getAoPoloNam, getAoPoloNu, getAoPoloTreEm, getAoThunNam, getAoThunNu, getAoThunTreEm, getAoTreEm, searchProductsByKeyword } from "../controllers/product.controller";

const productRouter = Router();

productRouter.get("/", getAllProducts);
// Female
productRouter.get("/ao-nu", getAoNu);
productRouter.get("/ao-nu/ao-polo", getAoPoloNu);
productRouter.get("/ao-nu/ao-thun", getAoThunNu);

// Male
productRouter.get("/ao-nam", getAoNam);
productRouter.get("/ao-nam/ao-polo", getAoPoloNam);
productRouter.get("/ao-nam/ao-thun", getAoThunNam);

// Kid
productRouter.get("/ao-tre-em", getAoTreEm);
productRouter.get("/ao-tre-em/ao-polo", getAoPoloTreEm);
productRouter.get("/ao-tre-em/ao-thun", getAoThunTreEm);

// Searching
productRouter.get("/search", searchProductsByKeyword);

export default productRouter;