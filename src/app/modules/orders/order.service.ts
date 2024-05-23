import { Product } from '../products/product.model';
import { TOrder } from './order.interface';
import Order from './order.model';

const createOrderDB = async (orderData: TOrder) => {
  const findProduct = await Product.findById({ _id: orderData.productId });
  if (findProduct === undefined || findProduct === null) {
    return;
  }



  return { success: false, message: "Insufficient quantity available inventory" };
};

const getOrdersDB = async ( email ?: string) => {
    if(email){
        const getOrder = await Order.find({ email : email})
        return getOrder;
    }else{
        const getOrder = await Order.find()
        return getOrder;
    }
};

export const orderService = {
  createOrderDB,
  getOrdersDB,
};
