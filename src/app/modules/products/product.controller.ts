import { Request, Response } from 'express';
import ProductZodValidationSchema from './product.validation';
import { productServices } from './product.service';


// create new data to the database
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


// get all the data from the database
const getAllProduct = async (req: Request, res: Response) =>{
  try {
    const result = await productServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: "All Products fetched successfully!",
      data: result,
    });
    
  } catch (error : any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.issues.map((item: { message: unknown }) => item.message),
    });
  }
}


// get the specific product by ID
const getProductByID = async (req : Request, res: Response) =>{
    try {
      const id = req.params.productID;
      const result = await productServices.getOneProductById(id);

      res.status(200).json({
        success: true,
        message: "Specified Id product data fetch successfully!",
        data: result,
      });
      
    } catch (error : any) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.issues.map((item: { message: unknown }) => item.message) || "Internal Server Error",
      });
    }
}






export const productsController = {
    createProduct,
    getAllProduct,
    getProductByID
}



