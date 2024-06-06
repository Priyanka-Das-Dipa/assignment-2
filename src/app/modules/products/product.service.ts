import { TProduct } from './product.interface';
import { Product } from './product.model';

// create new data to the database
const createProductDB = async (productData: TProduct) => {
  const product = await Product.create(productData);
  return product;
};

// get all the data from the database
const getAllProducts = async (searchProduct?: string | unknown) => {
  if (searchProduct) {
    const SearchProducts = await Product.find({
      $or: [
        { name: { $regex: searchProduct } },
        { category: { $regex: searchProduct } },
      ],
    });
    return SearchProducts;
  } else {
    const product = await Product.find();
    return product;
  }
};

// get only one data by using the product ID
const getOneProductById = async (id: string) => {
  const product = await Product.findById({ _id: id });
  return product;
};

// update one product data by using the product ID
const updateProductById = async (id: string, data: TProduct) => {
  const updateData = await Product.findByIdAndUpdate(id, data, {
    new: true,
    upsert: true,
    runValidators: true,
  });
  return updateData;
};

// delete one product from the database using ID
const deleteProduct = async (id: string) => {
  const deleteData = await Product.findByIdAndDelete(id);
  return deleteData;
};

export const productServices = {
  createProductDB,
  getAllProducts,
  getOneProductById,
  updateProductById,
  deleteProduct,
};
