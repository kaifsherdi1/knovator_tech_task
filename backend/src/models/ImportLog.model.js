const mongoose = require('mongoose');

const ImportLogSchema = new mongoose.Schema({
  feedUrl: String,
  startedAt: { type: Date, default: Date.now },
  finishedAt: Date,
  totalFetched: Number,
  totalQueued: Number,
  totalImported: { type: Number, default: 0 },
  newJobs: { type: Number, default: 0 },
  updatedJobs: { type: Number, default: 0 },
  failedJobs: [{ jobId: String, reason: String }],
  status: { type: String, enum: ['running','done','failed'], default: 'running' }
}, { timestamps: true });

module.exports = mongoose.model('ImportLog', ImportLogSchema);
