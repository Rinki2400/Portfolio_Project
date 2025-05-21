import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
import PrivateComponents from "./components/PrivateComponents";
// import AdContact from "./components/AdContact";
import AfterLogin from "./components/AfterLogin";
import AdupdateAbout from "./components/AdupdateAbout";
import AddCertificate from "./components/AddCertificate";
import AddProject from "./components/AddProject";
import AddEducation from "./components/AddEducation";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateComponents />}>
          <Route path="/adminPanel" element={<AfterLogin />} />
          <Route path="/AdupdateAbout/:id" element={<AdupdateAbout />} />
          <Route path="/AddCertificate" element={<AddCertificate />} />
          <Route path="/AddProject" element={<AddProject />} />
          <Route path="/AddEducation" element={<AddEducation/>} />
          {/* <Route path="/admin/AdContact" element={<AdContact/>} /> */}
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
