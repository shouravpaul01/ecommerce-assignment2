import { Request, Response } from 'express';
import { ProductServices } from './product.service';

//store product data
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

//Getting all product data
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
//Getting all products by specific id
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

//Updated product data by specific id
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
const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductByIdDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// const searchProductData = async (req: Request, res: Response) => {
//   try {
//     const { searchTerm } = req.query;

//     const result = await ProductServices.searchProductDataDB(
//       searchTerm as string,
//     );
//     res.status(200).json({
//       success: true,
//       message: 'Product deleted successfully!',
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProductById,
};
