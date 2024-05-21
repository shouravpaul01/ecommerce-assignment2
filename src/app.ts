import express, { Application } from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/product/product.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//Application Routes
app.use('/api/products', ProductRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
