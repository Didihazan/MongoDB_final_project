const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
  name: String,
  price: Number,
  totalScore: Number,
  batteryScore: Number,
  gpu: String,
  cpu: String,
  companyId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Phone', phoneSchema);
