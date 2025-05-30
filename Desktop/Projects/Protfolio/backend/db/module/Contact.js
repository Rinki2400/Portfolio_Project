const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  mobile:{
    type:String,
    required:true
  },
  age:{
    type:String,
    required:true
  },
  Address:{
    type:String,
    required:true
  }

});

module.exports =mongoose.model("contacts",ContactSchema)