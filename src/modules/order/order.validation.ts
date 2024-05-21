import { z } from 'zod';

export const orderValidationSchema = z.object({
  email: z
    .string()
    .nonempty('The field is required.')
    .email('Invalid email address.'),
  productId: z.string().nonempty('The field is required.'),
  price: z.number().min(0, 'The field is required.'),
  quantity: z.number().min(1, 'The field is required.'),
});
