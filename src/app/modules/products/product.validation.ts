import z from 'zod';

const InventoryZodValidationSchema = z.object({
  quantity: z.number().min(0, 'Quantity must be a non-negative number.'),
  inStock: z.boolean(),
});

const ProductZodVariantValidationSchema = z.object({
  type: z.string().min(1, 'Variant type must be string.'),
  size: z.string().min(1, 'Variant size must be string'),
});

const ProductZodValidationSchema = z.object({
  name: z.string().min(1, 'Name of the product must be string.'),
  description: z.string().min(1, 'Description is must be string.'),
  price: z.number(),
  category: z.string().trim().min(1, 'Category is must be string.'),
  tags: z.array(z.string()).default([]),
  variants: z.array(ProductZodVariantValidationSchema).default([]),
  inventory: InventoryZodValidationSchema,
});

export default ProductZodValidationSchema;
