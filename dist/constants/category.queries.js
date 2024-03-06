"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoryQueries = {
    getCategoryList: `WITH CategoryCTE AS (
        SELECT
            CategoryID,
            CategoryName,
            ParentCategoryID
        FROM
            CATEGORY
        WHERE
            ParentCategoryID IS NULL AND CategoryName != 'Unisex'
        UNION ALL
        SELECT
            ct.CategoryID,
            ct.CategoryName,
            ct.ParentCategoryID
        FROM
            CATEGORY ct
        INNER JOIN
            CategoryCTE cte ON ct.ParentCategoryID = cte.CategoryID
    )
    SELECT
        c1.CategoryID,
        c1.CategoryName,
        JSON_QUERY((
            SELECT
                c2.CategoryID,
                c2.CategoryName,
                JSON_QUERY((
                    SELECT
                        c3.CategoryID,
                        c3.CategoryName
                    FROM
                        CategoryCTE c3
                    WHERE
                        c3.ParentCategoryID = c2.CategoryID
                    FOR JSON PATH
                )) AS Children
            FROM
                CategoryCTE c2
            WHERE
                c2.ParentCategoryID = c1.CategoryID
            FOR JSON PATH
        )) AS Children
    FROM
        CategoryCTE c1
    WHERE
        c1.ParentCategoryID IS NULL;`,
};
exports.default = categoryQueries;
