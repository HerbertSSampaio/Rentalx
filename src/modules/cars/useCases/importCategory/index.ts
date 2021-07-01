import { ImportCategoryCotroller } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryCotroller(
    importCategoryUseCase
);

export { importCategoryController };
