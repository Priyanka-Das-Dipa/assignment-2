import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/modules/products/product.route';
import { OrderRoute } from './app/modules/orders/order.route';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', ProductRoute);
app.use('/api', OrderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
