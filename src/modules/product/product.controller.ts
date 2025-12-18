import { Request, Response } from "express";
import * as productService from "./product.service";
import { errorMonitor } from "events";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const products = await productService.getProductsByCategory(category);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getAllCategories = async (_req: Request, res: Response) => {
  try {
    const categories = await productService.getAllCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(Number(id));
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
