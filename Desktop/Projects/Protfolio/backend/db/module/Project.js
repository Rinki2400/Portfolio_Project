const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  Link: {
    type: String,
    required: true,
  },
  technologies: {
    type: Array,
    required: true,
  },
});
 module.exports = mongoose.model("projects",ProjectSchema)