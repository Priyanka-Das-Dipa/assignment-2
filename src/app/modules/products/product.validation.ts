import z from 'zod';

const InventoryZodValidationSchema = z.object({
  quantity: z.number().min(0, 'Quantity must be a number no negative number is allowed'),
  inStock: z.boolean(),
});


const ProductZodVariantValidationSchema = z.object({
  type: z.string().min(1, 'Size or Capacity is required'),
  value: z.string().min(1, 'Color is a required field'),
});


const ProductZodValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(0, 'Price must be a non-negative number'),
  tags: z.array(z.string()).default([]),
  category: z.string().min(1, 'Category is required'),
  variants: z.array(ProductZodVariantValidationSchema).default([]),
  inventory: InventoryZodValidationSchema,
});


export default ProductZodValidationSchema;
