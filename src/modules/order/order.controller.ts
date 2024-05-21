import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderServices.createOrderDB(order);
    res.status(200).json({
      status: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const result = await OrderServices.getAllOrderDB(email as string);
    res.status(200).json({
      status: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const OrderController = {
  createOrder,
  getAllOrder,
};
