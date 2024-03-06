import { myDataSource } from "../database/app-data-source";
import categoryQueries from "../constants/category.queries";

const getAll = async () => {
  const categories = await myDataSource.query(categoryQueries.getCategoryList);

  if (!categories || categories.length === 0) return [];

  const parsedCategories = categories.map((category: any) => {
    return {
      ...category,
      Children: category.Children ? JSON.parse(category.Children) : null,
    };
  });

  return parsedCategories;
};

const categoryService = {
  getAll,
};

export default categoryService;
