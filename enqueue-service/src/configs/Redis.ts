import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();

const redisURL = process.env.REDIS_URL as string;
const redisPort = process.env.REDIS_PORT as string;
const redisHost = process.env.REDIS_HOST as string;

const RedisClient = new Redis({
  port: parseInt(redisPort, 10),
  host: redisHost,
});

// conectando a instancia local de redis
// const localRedis = new Redis({
//   port: parseInt(redisPort, 10),
//   host: redisHost,
// });
export default RedisClient;
