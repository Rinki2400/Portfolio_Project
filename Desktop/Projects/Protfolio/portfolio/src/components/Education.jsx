import React, { useEffect, useState } from "react";

function Education() {
  const [education, setEducation] = useState([]); // State to store education list
  const [educationDetail, setEducationDetail] = useState(null); // State to store specific education detail
  
  // Fetch data from the backend
  const getContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/Portflio_data"); // Fetch from API
      const data = await response.json();

      // Log the data to inspect its structure
      console.log("Fetched Data:", data);

      // Check and set education data from the response
      if (data.Education && Array.isArray(data.Education)) {
        setEducation(data.Education); // Store the entire education data
        setEducationDetail(data.Education[0]); // Set the first education detail as default
      } else {
        console.error("Error: Education data not found or incorrect format");
      }
    } catch (error) {
      console.error("Error fetching education data:", error); 
    }
  };

  // Run the fetch function once when the component mounts
  useEffect(() => {
    getContacts(); 
  }, []);

  // Function to handle click and update details
  const handleEducationClick = (edu) => {
    setEducationDetail(edu); // Update details with the clicked education data
  };

  return (
    <div className="certi_container">
      <div className="certi_info">
        <h1>Education</h1>
        <div className="certificate_line"></div>
        <div className="certification_sec">
          <div className="cert_name">
            {/* Dynamically render education entries */}
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="certi-box" 
                onClick={() => handleEducationClick(edu)} // Attach click event
                style={{ cursor: "pointer" }} // Add a pointer cursor for clarity
              >
                {edu.year}
              </div>
            ))}
          </div>
          <div className="cert_sec_info">
            {/* Render the selected education details */}
            {educationDetail ? (
              <>
                <h3>{educationDetail.title || "Education Title"}</h3>
                <p>{educationDetail.description || "Education description not available."}</p>
              </>
            ) : (
              <p>Loading education details...</p> // Loading state
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
