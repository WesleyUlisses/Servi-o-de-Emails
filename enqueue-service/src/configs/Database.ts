import "dotenv/config";
import { Sequelize } from "sequelize-typescript";
import "reflect-metadata";

const DB_CONFIG = process.env.DATABASE_URL as string;

const host = '127.0.0.1';
const port = 3306;
const databaseName = 'emailservice';
const user = 'root';
const password = '2002';

const connectionString = `mysql://${user}:${password}@${host}:${port}/${databaseName}`;

const postgresConfig = {
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT as string),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};


const database = new Sequelize(connectionString, {
  logging: false,
  native: false,
});

export { database };