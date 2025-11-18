const Job = require('../models/Job.model');
const ImportLog = require('../models/ImportLog.model');
const jobQueue = require('../services/queueService');
const { concurrency } = require('../config');

jobQueue.process('importJob', concurrency, async (job) => {
  const { item, importLogId } = job.data;
  const externalId = item.guid?._ || item.guid || item.link || item.id || null;

  try {
    const jobDoc = {
      externalId,
      title: item.title,
      description: item.description || item.summary,
      company: item.company || '',
      location: item.location || '',
      type: item['job:type'] || '',
      url: item.link || '',
      raw: item
    };

    const filter = externalId ? { externalId } : { url: jobDoc.url };
    const existing = await Job.findOne(filter);

    if (existing) {
      await Job.updateOne(filter, { $set: jobDoc });
      await ImportLog.updateOne({ _id: importLogId }, { $inc: { updatedJobs: 1, totalImported: 1 } });
    } else {
      await Job.create(jobDoc);
      await ImportLog.updateOne({ _id: importLogId }, { $inc: { newJobs: 1, totalImported: 1 } });
    }

  } catch (err) {
    await ImportLog.updateOne({ _id: importLogId }, { $push: { failedJobs: { jobId: externalId || job.id, reason: err.message } } });
    throw err;
  }
});

jobQueue.on('drained', async () => {
  await ImportLog.updateMany({ status: 'running' }, { status: 'done', finishedAt: new Date() });
});
