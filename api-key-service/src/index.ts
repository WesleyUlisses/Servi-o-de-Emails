import express from 'express';
import dotenv from 'dotenv';
import { database } from './configs/Database';
import KeyRouts from './routes/KeyRoutes';

const keyRoutes = new KeyRouts();
dotenv.config();

const app  = express();
const port = parseInt(process.env.PORT as string) || 3000;

database.sync({ force: false }).then(() => {
    console.log('Database is running');
});
app.listen(port, () => {

    app.use('/keys/', keyRoutes.routes());
    app.use(express.json());
    console.log(`Server is running on port ${port}`);

});
