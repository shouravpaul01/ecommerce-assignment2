import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    console.log(product);
    const result = await ProductServices.createProductDB(product);
    res.status(200).json({
      success: true,
      message: 'Successfully Product Added.',
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
      message: 'Successfully Product Added.',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const ProductControllers = {
  createProduct,
  getAllProducts,
};
