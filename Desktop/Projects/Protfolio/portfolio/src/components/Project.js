import React, { useEffect, useState } from "react";

function Project() {
  const [Projectname, setProjectname] = useState([]); // State to store Project names
  const [Projectdetail, setProjectdetail] = useState(null); // State to store Project details
  
  // Fetch data from the backend
  const getContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/Portflio_data"); // Fetch from API
      const data = await response.json(); 

      // Log the data to inspect its structure
      console.log("Fetched Data:", data);

      // Set Projectname and Projectdetail based on the API response
      if (data.Project && Array.isArray(data.Project)) {
        setProjectname(data.Project); // Store the entire Project data
        setProjectdetail(data.Project[0]); // Set the first Project's details (default view)
      } else {
        console.error("Error: Projects not found or incorrect format");
      }
    } catch (error) {
      console.error("Error fetching contacts:", error); 
    }
  };

  // Run the fetch function once when the component mounts
  useEffect(() => {
    getContacts(); 
  }, []);

  // Function to handle click and update details
  const handleCertClick = (cert) => {
    setProjectdetail(cert); // Update details with the clicked Project
  };

  return (
    <div className="certi_container">
      <div className="certi_info">
        <h1>Projects</h1>
        <div className="Project_line"></div>
        <div className="certification_sec">
          <div className="cert_name">
            {/* Dynamically render certi-box based on Projectname */}
            {Projectname.map((cert, index) => (
              <div 
                key={index} 
                className="certi-box" 
                onClick={() => handleCertClick(cert)} // Attach click event
                style={{ cursor: "pointer" }} // Add a pointer cursor for clarity
              >
                {cert.title}
              </div>
            ))}

          </div>
          <div className="cert_sec_info">
  {/* Render the selected Project details */}
  {Projectdetail ? (
    <>
      <h3>{Projectdetail.title || "Project Title"}</h3>
      <h2>From {Projectdetail.institution || "Institution Name"}</h2>
      <p>{Projectdetail.description || "Project description not available."}</p>
      <p>
        <strong>Technologies:</strong>{" "}
        {Projectdetail.technologies
          ? Projectdetail.technologies.join(", ")
          : "Technologies not available"}
      </p>
      <p>
        <strong>Link:</strong>{" "}
        <a href={Projectdetail.link || "#"} target="_blank" rel="noopener noreferrer">
          {Projectdetail.link || "Link not available"}
        </a>
      </p>
      <img
        src={Projectdetail.image || "https://via.placeholder.com/150"}
        alt={Projectdetail.title || "Project Image"}
        style={{ width: "100%", marginTop: "10px" }}
      />
    </>
  ) : (
    <p>Loading Project details...</p> // Loading state
  )}
</div>

        </div>
      </div>
    </div>
  );
}

export default Project;
