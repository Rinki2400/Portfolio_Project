import React from "react";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebook,FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Verical_btn() {
  return (
    <div>
      <div className="vertical-btn">
      <h3>
          <MdEmail />
        </h3>
        <h3>
          <RiInstagramLine />
        </h3>
        <h3>
          <FaFacebook />
        </h3>
        <h3>
          <IoLogoGithub />
        </h3>
        <h3>
        <FaLinkedin />
        </h3>
      </div>
    </div>
  );
}

export default Verical_btn;
