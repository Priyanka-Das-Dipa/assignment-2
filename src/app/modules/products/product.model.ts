import { Schema, model } from 'mongoose';

const ProductInventorySchema = new Schema({
  quantity: { type: Number },
  inStock: { type: Boolean },
});

const ProductVariantsSchema = new Schema({
  type: { type: String, trim: true },
  value: { type: String, trim: true },
});

const ProductSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  tags: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  variants: { type: ProductVariantsSchema },
  inventory: { type: ProductInventorySchema },
});

export const Product = model('Product', ProductSchema);
