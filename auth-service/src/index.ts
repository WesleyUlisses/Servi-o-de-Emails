import express from 'express';
import UserRoutes from './routes/UserRoutes';
import dotenv from 'dotenv';
import { database } from './configs/Database';

dotenv.config();

const app = express();
const userRoutes = new UserRoutes();
const port = process.env.PORT || 3000;

database.sync({ force: false }).then(() => {
  console.log('Database is running');
});
app.listen(port, () => {

  app.use(express.json());
  app.use('/users/', userRoutes.routes());
  console.log(`Server is running on port ${port}`);

});
