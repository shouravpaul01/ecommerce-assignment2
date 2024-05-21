import { Schema, model } from 'mongoose';
import { TProduct, TVariants } from './product.interface';
const variantsSchema = new Schema<TVariants>({
  type: {
    type: String,
    required: [true, 'The feild is required.'],
  },
  value: {
    type: String,
    required: [true, 'The feild is required.'],
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
  variants: [variantsSchema],
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

export const ProductModel = model<TProduct>('Product', productSchema);
