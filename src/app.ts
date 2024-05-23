import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './app/modules/products/product.route';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', ProductRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
