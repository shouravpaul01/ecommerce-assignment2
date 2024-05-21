type TVarriants = {
  type: string;
  value: string;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  varriants: Array<TVarriants>;
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};
