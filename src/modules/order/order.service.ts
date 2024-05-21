import { TOrder } from './order.interface';
import { OrderModel } from './order.model';

const createOrderDB = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
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
