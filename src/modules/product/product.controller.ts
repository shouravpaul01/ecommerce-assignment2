import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.createProductDB(product);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsDB();
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!.',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(productId);
    const result = await ProductServices.getProductByIdDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!.',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const productData = req.body;

    const result = await ProductServices.updateProductDB(
      productId,
      productData,
    );
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
};
