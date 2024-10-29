const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  registerNumber: { type: String, required: true },
  studentName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  programme: { type: String, required: true },
  class: { type: String, required: true },
  reason: { type: String, required: true },
  dateIssued: { type: Date, default: Date.now },
  selectedIDs: [{ type: String }],
});

module.exports = mongoose.model('Student', studentSchema);
