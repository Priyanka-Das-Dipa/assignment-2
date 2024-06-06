import { Schema, model } from 'mongoose';

// schema declaration for variants
const ProductVariantsSchema = new Schema({
  type: { type: String, trim: true, required: true },
  value: { type: String, trim: true , required: true},
});

// schema declaration for Inventory
const ProductInventorySchema = new Schema({
  quantity: {type: Number, required: true},
  inStock: {type: Boolean, required: true},
  _id: Boolean,
});

// schema for all product
const ProductSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  price: { type: Number, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  tags: [{ type: String }],
  variants: [{ type: ProductVariantsSchema }],
  inventory: { type: ProductInventorySchema },
});

export const Product = model('Product', ProductSchema);
