import { Product } from '../products/product.model';
import { TOrder } from './order.interface';
import Order from './order.model';

// created the order
const createOrderDB = async (orderData: TOrder) => {
  console.log(orderData);
  const findProduct : any = await Product.findById({ _id: orderData.productId });
  if (findProduct === undefined || findProduct === null) {
    return 'Invalid Product Id!!';
  }

  if (orderData.quantity <= findProduct.inventory.quantity) {
    let updateQuantity = findProduct.inventory?.quantity - orderData.quantity;
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: orderData.productId },
      { $set: { 'inventory.quantity': updateQuantity } },
      { new: true },
    );
    if (updateProduct?.inventory?.quantity == 0) {
      await Product.findByIdAndUpdate(
        { _id: orderData.productId },
        {
          $set: { 'inventory.inStock': 'false' },
        },
      );
    }

    const createOrder = await Order.create(orderData);
    return {
      success: true,
      message: 'Order created successfully!',
      data: createOrder,
    };
  }

  return {
    success: false,
    message: 'Insufficient quantity available inventory',
  };
};

// get the order
const getOrdersDB = async (email?: string) => {
  if (email) {
    const getOrder = await Order.find({ email: email });
    return getOrder;
  } else {
    const getOrder = await Order.find();
    return getOrder;
  }
};

export const orderService = {
  createOrderDB,
  getOrdersDB,
};
