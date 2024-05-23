import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/, 
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product", 
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  });
  
  const Order = mongoose.model("Order", orderSchema);
  
  export default Order;