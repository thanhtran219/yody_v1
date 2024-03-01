import { myDataSource } from "../database/app-data-source";
import categoryQueries from "../constants/category.queries";
import { CATEGORY_MESSAGES } from "../constants/messages";

const getAll = async () => {
  try {
    const categories = await myDataSource.query(categoryQueries.getCategoryList);

    if (categories && categories.length > 0) {
      const parsedCategories = categories.map((category: any) => {
        return {
          ...category,
          Children: category.Children ? JSON.parse(category.Children) : null,
        };
      });
      return parsedCategories;
    } else {
      return [];
    }
  } catch (error) {
    console.error(CATEGORY_MESSAGES.GET_ALL_ERROR, error);
    throw error;
  }
};

const categoryService = {
  getAll,
};

export default categoryService;
