import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

const createProductDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsDB = async (searchTerm: string) => {
  const search: any = {};
  //This condition will work when something search from product DB
  if (searchTerm) {
    search.$or = [
      { name: { $regex: searchTerm, $option: 'i' } },
      { description: { $regex: searchTerm, $option: 'i' } },
    ];
  }
  const result = await ProductModel.find(search);
  return result;
};
const getProductByIdDB = async (productId: string) => {
  const result = await ProductModel.find({ _id: productId });
  return result;
};
const updateProductDB = async (productId: string, productData: TProduct) => {
  const result = await ProductModel.findByIdAndUpdate(productId, productData);
  return result;
};
const deleteProductByIdDB = async (productId: string) => {
  const result = await ProductModel.deleteOne({ _id: productId });
  return result;
};
const searchProductDataDB = async (searchTerm: string) => {
  const search: any = {};
  if (searchTerm) {
    search.$or = [
      { name: { $regex: searchTerm, $option: 'i' } },
      { description: { $regex: searchTerm, $option: 'i' } },
    ];
  }
  const result = await ProductModel.find(search);
  return result;
};
export const ProductServices = {
  createProductDB,
  getAllProductsDB,
  getProductByIdDB,
  updateProductDB,
  deleteProductByIdDB,
};
