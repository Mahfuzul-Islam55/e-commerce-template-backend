import { Product } from "../../entities/product.entity";
import { productRepository } from "./product.repository";

export const createProduct = async (data: Product): Promise<Product> => {
  const product = productRepository.create(data);
  return await productRepository.save(product);
};

export const getAllProducts = async (): Promise<Product[]> => {
  return await productRepository.find();
};

export const getProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  return await productRepository.find({
    where: { category },
  });
};

export const getAllCategories = async (): Promise<string[]> => {
  const products = await productRepository.find({
    select: ["category"],
  });

  return [...new Set(products.map((p) => p.category))];
};

export const deleteProduct = async (id: number): Promise<void> => {
  await productRepository.delete(id);
};
