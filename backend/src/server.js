const express = require('express');
const mongoose = require('mongoose');
const { mongoUri, port } = require('./config');
const { runOnce } = require('./cron/scheduler');

mongoose.connect(mongoUri).then(() => console.log('Mongo connected')).catch(console.error);
require('./workers/jobWorker');

const app = express();
app.use(express.json());

app.post('/api/import/run', async (req, res) => {
  try { await runOnce(); res.json({ ok: true }); } 
  catch (err) { res.status(500).json({ ok: false, message: err.message }); }
});

app.listen(port, () => console.log('Server listening on', port));
