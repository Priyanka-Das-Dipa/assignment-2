import { Request, Response } from 'express';
import ProductZodValidationSchema from './product.validation';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const validateData = ProductZodValidationSchema.parse(productData);
    const result = await productServices.createProductDB(validateData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully!!',
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



export const productsController = {
    createProduct,
}
