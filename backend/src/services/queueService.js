const Bull = require('bull');
const { redisUrl } = require('../config');

const jobQueue = new Bull('jobs', redisUrl, {
  defaultJobOptions: { attempts: 3, backoff: { type: 'exponential', delay: 1000 } }
});

module.exports = jobQueue;
