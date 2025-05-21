import React, { useState, useEffect } from "react";

function Info() {
  const [introData, setIntroData] = useState({
    welcomeText: "",
    firstName: "",
    lastName: "",
    caption: "",
    description: "",
  }); // State to store intro data

  // Fetch data from the backend
  const getContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/Portflio_data"); // Fetch from API
      const data = await response.json(); // Convert response to JSON

      // Extract and set intro data
      const { welcomeText, firstName, lastName, caption, description } = data.Intro; 
      setIntroData({ welcomeText, firstName, lastName, caption, description });
    } catch (error) {
      console.error("Error fetching indo:", error); 
    }
  };

  useEffect(() => {
    getContacts(); 
  }, []);

  return (
    <div className="Info_container">
      <div className="info_session">
        {/* Render dynamic intro data */}
        <h4>{introData.welcomeText}</h4>
        <h1>{introData.firstName} {introData.lastName}</h1>
        <h2>
          {introData.caption} 
        </h2>
        <p className="para">
          {introData.description}
        </p>
        <button>Download Resume</button>
      </div>
    </div>
  );
}

export default Info;
