import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: [true, 'The feild is required.'],
  },
  productId: {
    type: String,
    required: [true, 'The feild is required.'],
  },
  price: {
    type: Number,
    required: [true, 'The feild is required.'],
  },
  quantity: {
    type: Number,
    required: [true, 'The feild is required.'],
  },
});

export const OrderModel = model<TOrder>('Order', orderSchema);
