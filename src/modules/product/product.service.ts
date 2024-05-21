import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsDB = async () => {
  const result = await ProductModel.find({});
  return result;
};
const getProductByIdDB = async (productId: string) => {
  const result = await ProductModel.find({ _id: productId });
  return result;
};
export const ProductServices = {
  createProductDB,
  getAllProductsDB,
  getProductByIdDB,
};
