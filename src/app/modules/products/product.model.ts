import { Schema, model } from 'mongoose';

const ProductVariantsSchema = new Schema({
  type: { type: String, trim: true },
  size: { type: String, trim: true },
});

const ProductInventorySchema = new Schema({
  quantity: { type: Number },
  inStock: { type: Boolean },
});

const ProductSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  tags:  [{ type: String , required: true }],
  category: { type: String, required: true, trim: true },
  variants: [{ type: ProductVariantsSchema } ],
  inventory: { type: ProductInventorySchema },
});

export const Product = model('Product', ProductSchema);
