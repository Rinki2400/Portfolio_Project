// const mongoose = require("mongoose");

// const introSchema = new mongoose.Schema({
//   welcomeText: {
//     type: String,
//     require: true,
//   },
//   firstName: {
//     type: String,
//     require: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },
//   caption: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// });

// const aboutSchema = new mongoose.model({
//   lottieUrl: {
//     type: String,
//     required: true,
//   },
//   description1: {
//     type: String,
//     required: true,
//   },
//   description2: {
//     type: String,
//     required: true,
//   },
//   description3: {
//     type: String,
//     required: true,
//   },
//   skill: {
//     type: Array,
//     required: true,
//   },
// });

// // const CertificateSchema = new mongoose.Schema({
// //   title: {
// //     type: String,
// //     required: true,
// //   },
// //   name: {
// //     type: String,
// //     required: true,
// //   },
// //   institution: {
// //     type: String,
// //     required: true,
// //   },
// //   description: {
// //     type: String,
// //     required: true,
// //   },
// // });

// // const ProjectSchema = new mongoose.Schema({
// //   title: {
// //     type: String,
// //     required: true,
// //   },
// //   description: {
// //     type: String,
// //     required: true,
// //   },
// //   image: {
// //     type: String,
// //     required: true,
// //   },
// //   Link: {
// //     type: String,
// //     required: true,
// //   },
// //   technologies: {
// //     type: Array,
// //     required: true,
// //   },
// // });

// // const EducationSchema = new mongoose.Schema({
// //   title: {
// //     type: String,
// //     required: true,
// //   },
// //   description: {
// //     type: String,
// //     required: true,
// //   },
// // });

// const ContactSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   gender:{
//     type:String,
//     required:true
//   },
//   email:{
//     type:String,
//     required:true
//   },
//   mobile:{
//     type:String,
//     required:true
//   },
//   age:{
//     type:String,
//     required:true
//   },
//   Address:{
//     type:String,
//     required:true
//   }

// });

// module.exports = {
//     Intro : mongoose.model("intros",introSchema),
//     About : mongoose.model("abouts",aboutSchema),
//     Contact : mongoose.model("contacts",ContactSchema)
// };
