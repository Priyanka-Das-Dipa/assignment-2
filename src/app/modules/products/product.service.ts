import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductDB = async (productData : TProduct)=>{
    const product = await Product.create(productData);
    return product;

}





export const productServices = {
    createProductDB
}