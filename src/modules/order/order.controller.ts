import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { orderValidationSchema } from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const parseValidationData = orderValidationSchema.parse(order);
    const result = await OrderServices.createOrderDB(parseValidationData);

    if (result) {
      res.status(200).json({
        status: true,
        message: 'Order created successfully!',
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: 'Insufficient quantity available in inventory',
      });
    }
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
