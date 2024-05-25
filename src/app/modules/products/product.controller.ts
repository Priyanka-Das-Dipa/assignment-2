import { Request, Response } from 'express';
import ProductZodValidationSchema from './product.validation';
import { productServices } from './product.service';

// create new data to the database
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const validateData = ProductZodValidationSchema.parse(productData);
    const result = await productServices.createProductDB(validateData);
    res.status(200).send({
      success: true,
      message: 'Product is created successfully!!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.issues.map((item: { message: unknown }) => item.message),
    });
  }
};

// get all the data from the database
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: 'All Products fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.issues.map((item: { message: unknown }) => item.message),
    });
  }
};

// get the specific product by ID
const getProductByID = async (req: Request, res: Response) => {
  try {
    const id = req.params.productID;
    const result = await productServices.getOneProductById(id);

    res.status(200).json({
      success: true,
      message: 'Specified Id product data fetch successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error:
        error.issues.map((item: { message: unknown }) => item.message) ||
        'Internal Server Error',
    });
  }
};

// Find a specified product data by ID and update this

const findAndUpdateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productID;
    const updatedData = ProductZodValidationSchema.parse(req.body);

    const result = await productServices.updateProductById(id, req.body);
    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Update to failed, Internal Server error',
      error:
        error.issues.map((item: { message: unknown }) => item.message) ||
        'Internal Server Error',
    });
  }
};

// delete one specific data form the database
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    productServices.deleteProduct(id);
    res.status(200).json({
      success: true,
      message: 'Product Deleted Successfully !',
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Product can not delete.',
      error:
        error.issues.map((item: { message: unknown }) => item.message) ||
        'Internal Server Error',
    });
  }
};

export const productsController = {
  createProduct,
  getAllProduct,
  getProductByID,
  findAndUpdateProduct,
  deleteProduct,
};
