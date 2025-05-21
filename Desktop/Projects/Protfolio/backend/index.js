const express = require("express");
require("./db/config");
const About = require("./db/module/About");
const Contact = require("./db/module/Contact");
const Intro = require("./db/module/Intro");
const Project = require("./db/module/Project");
const Education = require("./db/module/Education");
const Certificate = require("./db/module/Certificate");
const Admin = require("./db/module/Admin");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.get("/Portflio_data", async (req, resp) => {
  try {
    const intros = await Intro.find();
    const contacts = await Contact.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const educations = await Education.find();
    const certifications = await Certificate.find();
    resp.status(200).send({
      Intro: intros[0],
      about: abouts[0],
      contact: contacts[0],
      Project: projects,
      Education: educations,
      Certificate: certifications,
    });
  } catch (error) {
    resp.status(500).send(error);
  }
});
// update api
app.put("/update/:id",async(req,resp)=>{
  let result = await Contact.updateOne({_id:req.params.id},{$set:req.body})
   resp.send(result)
})

app.put("/updateIntro/:id",async(req,resp)=>{
  let result = await Intro.updateOne({_id:req.params.id},{$set:req.body})
   resp.send(result)
})

app.put("/AboutUpdate/:id", async (req, resp) => {
  try {
    // Ensure the _id exists and update the record
    const result = await About.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );

    if (result.matchedCount === 0) {
      // No record found with the given _id
      return resp.status(404).send({ message: "Record not found" });
    }

    resp.status(200).send({
      message: "Record updated successfully",
      updatedData: req.body,
    });
  } catch (error) {
    console.error("Error updating record:", error);
    resp.status(500).send({ message: "Internal server error" });
  }


});

app.delete("/Education/:id",async(req,resp)=>{
  const result = await Education.deleteOne({_id:req.params.id})
  resp.send(result)
});

app.delete("/project/:id",async(req,resp)=>{
  const result = await Project.deleteOne({_id:req.params.id})
  resp.send(result)
});

app.delete("/certificate/:id",async(req,resp)=>{
  const result = await Certificate.deleteOne({_id:req.params.id})
  resp.send(result)
});
app.post("/certificate", async (req, resp) => {
  let certificate = new Certificate(req.body); 
  let result = await certificate.save();
  resp.send(result);
});

app.post("/Project", async (req, resp) => {
  let project = new Project(req.body); 
  let result = await project.save();
  resp.send(result);
});

app.post("/education", async (req, resp) => {
  let educations = new Education(req.body); 
  let result = await educations.save();
  resp.send(result);
});


// login



app.post("/login", async (req, resp) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      let user = await Admin.findOne({ email, password }).select("-password"); // Exclude the password field
      if (user) {
        resp.send({ user }); // Send user details back
      } else {
        resp.status(404).send({ result: "No User found" });
      }
    } else {
      resp.status(400).send({ result: "Email and password are required" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    resp.status(500).send({ result: "Internal server error" });
  }
});


// app.put("/updateContact/:id",async(req,resp)=>{
//   let result = await Contact.updateOne({_id:req.params.id},{$set:req.body})
//    console.log(result)
// })

app.listen(5000, () => {
  console.log("running");
});
