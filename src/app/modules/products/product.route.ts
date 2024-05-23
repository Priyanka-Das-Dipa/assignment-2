import express from 'express';
import { productsController } from './product.controller';

const router = express.Router();

router.post('/products', productsController.createProduct);
router.get('/products', productsController.getAllProduct);
router.get('/products/:productId', productsController.getProductByID);
router.put('/products/:productId', productsController.findAndUpdateProduct);
router.delete('/products/:productId', productsController.deleteProduct);

export const ProductRoute = router;
