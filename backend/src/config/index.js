require('dotenv').config();

module.exports = {
  mongoUri: process.env.MONGO_URI,
  redisUrl: process.env.REDIS_URL,
  batchSize: parseInt(process.env.BATCH_SIZE || '200'),
  concurrency: parseInt(process.env.CONCURRENCY || '5'),
  port: process.env.PORT || 4000,
};
