import React, { useState, useEffect } from "react";

function About() {
  const [Skill, setSkill] = useState([]); 
  const [Descriptions, setDescriptions] = useState([])

  // Fetch data from the backend
  const getContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/Portflio_data"); 
      const data = await response.json(); 
      // console.log(data.about); 
      // console.log([
      //   data.about.description1,
      //   data.about.description2,
      //   data.about.description3,
      // ]);
      setSkill(data.about.skill);
      setDescriptions([
        data.about.description1,
        data.about.description2,
        data.about.description3,
      ]);
      
       // Directly set the skills array in state
    } catch (error) {
      console.error("Error fetching about:", error); // Log errors
    }
  };

  useEffect(() => {
    getContacts(); 
  }, []);

  return (
    <div className="About_container">
      <div className="About_info">
        <h1>About</h1>
        <div className="About_line"></div>
        <div className="About_sec">
          <img
            srcSet="https://cdni.iconscout.com/illustration/premium/thumb/woman-programmer-working-on-a-new-project-illustration-download-in-svg-png-gif-file-formats--female-freelancer-freelancing-lady-girl-employee-software-development-pack-design-illustrations-6200254.png"
            alt="logo"
            className="img_sec"
          />
          <div className="para_sec">
            {Descriptions.length > 0 ? (
              Descriptions.map((desc, index) => <p key={index}>{desc}</p>)
            ) : (
              <p>Loading descriptions...</p>
            )}
          </div>
        </div>
        <div className="technologies-container">
          <h2>Here are a few technologies I've been working with recently:</h2>
          <div className="technologies">
            {Skill.length > 0 ? (
              Skill.map((skill, index) => (
                <div key={index} className="tech-box">
                  {skill}
                </div>
              ))
            ) : (
              <p>Loading skills...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
