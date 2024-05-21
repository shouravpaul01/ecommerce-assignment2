import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';
const variantsSchema = new Schema({
  type: {
    type: String,
  },
  value: {
    type: String,
  },
});
const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'The feild is required.'],
  },
  description: {
    type: String,
    required: [true, 'The feild is required.'],
  },
  price: {
    type: Number,
    required: [true, 'The feild is required.'],
  },
  category: {
    type: String,
    required: [true, 'The feild is required.'],
  },
  tags: [String],
  varriants: [variantsSchema],
  inventory: {
    quantity: {
      type: Number,
      required: [true, 'The feild is required.'],
    },
    inStock: {
      type: Boolean,
      enum: [true, false],
    },
  },
});

const Product = model<TProduct>('Product', productSchema);
