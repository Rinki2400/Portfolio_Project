import React from "react";
import { RiContactsFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { SiOpenproject } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { FaComment } from "react-icons/fa";

function Profile({ setActiveComponent }) {
  return (
    <div
      className="sidenav"
    >
      <div className="profile" style={{ textAlign: "center" }}>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/woman-programmer-working-on-a-new-project-illustration-download-in-svg-png-gif-file-formats--female-freelancer-freelancing-lady-girl-employee-software-development-pack-design-illustrations-6200254.png"
          alt="Profile"
          className="profile-img"
          style={{ width: "100px", borderRadius: "50%", marginBottom: "20px" }}
        />
        <h2 className="profile-name">Rinki Sharma</h2>
        <p className="profile-role">Admin</p>
      </div>
      <div className="Profile_list_sec">
        <button onClick={() => setActiveComponent("contact")}>
          <RiContactsFill /> Contact
        </button>
        <button onClick={() => setActiveComponent("introduction")}>
          <FaComment /> Introduction
        </button>
        <button onClick={() => setActiveComponent("aboutme")}>
          <FaBookOpen /> About Me
        </button>
        <button onClick={() => setActiveComponent("education")}>
          <MdCastForEducation /> Education
        </button>
        <button onClick={() => setActiveComponent("certificate")}>
          <TbCertificate /> Certificate
        </button>
        <button onClick={() => setActiveComponent("project")}>
          <SiOpenproject /> Project
        </button>
      </div>
    </div>
  );
}

export default Profile;
