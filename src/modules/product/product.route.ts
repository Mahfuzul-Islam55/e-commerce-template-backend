import { Router } from "express";
import * as productController from "./product.controller";

const productRouter = Router();

productRouter.post("/", productController.createProduct);
productRouter.get("/", productController.getAllProducts);
productRouter.get("/categories", productController.getAllCategories);
productRouter.get(
  "/category/:category",
  productController.getProductsByCategory
);
productRouter.delete("/:id", productController.deleteProduct);

export default productRouter;
