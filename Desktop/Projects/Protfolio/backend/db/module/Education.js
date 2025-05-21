const {  mongoose } = require("mongoose");

const EducationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  year:{
    type:String,
    required: true
  }
});
module.exports = mongoose.model("educations",EducationSchema)