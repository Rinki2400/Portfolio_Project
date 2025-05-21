import React, { useEffect, useState } from "react";

function Certificate() {
  const [certiname, setCertiname] = useState([]); // State to store certificate names
  const [certDetails, setCertDetails] = useState(null); // State to store certificate details
  
  // Fetch data from the backend
  const getContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/Portflio_data"); // Fetch from API
      const data = await response.json(); 

      // Log the data to inspect its structure
      console.log("Fetched Data:", data);

      // Set certiname and certDetails based on the API response
      if (data.Certificate && Array.isArray(data.Certificate)) {
        setCertiname(data.Certificate); // Store the entire certificate data
        setCertDetails(data.Certificate[0]); // Set the first certificate's details (default view)
      } else {
        console.error("Error: Certificates not found or incorrect format");
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
    setCertDetails(cert); // Update details with the clicked certificate
  };

  return (
    <div className="certi_container">
      <div className="certi_info">
        <h1>Certificates</h1>
        <div className="certificate_line"></div>
        <div className="certification_sec">
          <div className="cert_name">
            {/* Dynamically render certi-box based on certiname */}
            {certiname.map((cert, index) => (
              <div 
                key={index} 
                className="certi-box" 
                onClick={() => handleCertClick(cert)} // Attach click event
                style={{ cursor: "pointer" }} // Add a pointer cursor for clarity
              >
                {cert.year}
              </div>
            ))}

          </div>
          <div className="cert_sec_info">
            {/* Render the selected certificate details */}
            {certDetails ? (
              <>
                <h3>{certDetails.title || "Certificate Title"}</h3>
                <h2>From {certDetails.institution || "Institution Name"} ({certDetails.year || "Year"})</h2>
                <p>{certDetails.description || "Certificate description not available."}</p>
              </>
            ) : (
              <p>Loading certificate details...</p> // Loading state
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
