
// interface declaration for Variants
export type TProductVariants = {
  type: string;
  size: string;
};


// interface declaration for Inventory type
export type TInventory = {
  quantity: number;
  inStock: boolean;
};

// defining the interface of the product
export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TProductVariants[];
  inventory: TInventory;
};
