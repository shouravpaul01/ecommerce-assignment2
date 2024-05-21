import { TProduct } from '../product/product.interface';
import { ProductModel } from '../product/product.model';
import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderDB = async (order: TOrder) => {
  const findProduct = await ProductModel.findById(order?.productId);

  if (!findProduct) {
    return false;
  }

  if (findProduct?.inventory?.quantity < order?.quantity) {
    return false;
  } else {
    const productQuantity = findProduct?.inventory?.quantity - order.quantity;
    if (productQuantity == 0) {
      findProduct.inventory = { quantity: productQuantity, inStock: false };
    } else {
      findProduct.inventory.quantity = productQuantity;
    }

    await findProduct.save();
    console.log(findProduct);
    const result = await OrderModel.create(order);
    return result;
  }
};
const getAllOrderDB = async (emailData: string) => {
  const email: any = {};
  //This condition will work when find data by specific email from DB
  if (emailData) {
    email.email = { $regex: emailData };
  }
  console.log(email);
  const result = await OrderModel.find(email);
  return result;
};
export const OrderServices = {
  createOrderDB,
  getAllOrderDB,
};
