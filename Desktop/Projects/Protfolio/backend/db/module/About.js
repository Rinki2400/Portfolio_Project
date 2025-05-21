const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  lottieUrl: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  description3: {
    type: String,
    required: true,
  },
  skill: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("abouts", aboutSchema);
