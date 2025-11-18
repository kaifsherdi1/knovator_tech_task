const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  externalId: { type: String, index: true },
  title: String,
  description: String,
  company: String,
  location: String,
  type: String,
  url: String,
  raw: mongoose.Schema.Types.Mixed,
}, { timestamps: true });

JobSchema.index({ externalId: 1 }, { unique: true, sparse: true });

module.exports = mongoose.model('Job', JobSchema);
