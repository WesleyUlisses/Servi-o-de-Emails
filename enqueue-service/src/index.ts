import express from 'express';
import dotenv from 'dotenv';
import { database } from './configs/Database';
import EnqueueEmailRoutes from './routes/Routes';
import RedisClient from './configs/Redis';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const routes = EnqueueEmailRoutes;

app.use(express.json());
app.use('/api/v1', routes.EnqueueEmailRoutes);

database.authenticate().then(() => {
  database.sync({ force: false }).then(() => {

    RedisClient.ping((err: any, result: any) => console.log('Redis connection status:', result));
    console.log(database.models);
    console.log("Database and tables created!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

  });
});