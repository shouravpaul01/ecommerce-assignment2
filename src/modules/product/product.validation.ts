import { z } from 'zod';

const variantsValidationSchema = z.object({
  type: z.string().nonempty('The field is required.'),
  value: z.string().nonempty('The field is required.'),
});

const productValidationSchema = z.object({
  name: z.string().nonempty('The field is required.'),
  description: z.string().nonempty('The field is required.'),
  price: z.number().min(0, 'The field is required.'),
  category: z.string().nonempty('The field is required.'),
  tags: z.array(z.string()),
  variants: z.array(variantsValidationSchema),
  inventory: z.object({
    quantity: z.number().min(0, 'The field is required.'),
    inStock: z.boolean(),
  }),
});

export default productValidationSchema;
