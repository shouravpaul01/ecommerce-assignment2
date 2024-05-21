export type TVariants = {
  type: string;
  value: string;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: Array<TVariants>;
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};
