import React, { useState, useEffect } from "react";

function AdIntroduction() {
  const [introInfo, setIntroInfo] = useState({
    _id: "", // To capture the ID of the contact
    welcomeText: "",
    firstName: "",
    lastName: "",
    caption: "",
    description: "",
  });

  const [error, setError] = useState(null); // For error handling
  const [successMessage, setSuccessMessage] = useState(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch("http://localhost:5000/Portflio_data"); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch contact data.");
        }
        const data = await response.json(); // Assuming API returns JSON
        setIntroInfo(data.Intro); // Assign Intro object directly, including _id
      } catch (err) {
        setError(err.message); // Handle errors
      }
    };

    fetchContactData();
  }, []);

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIntroInfo({
      ...introInfo,
      [name]: value, // Update state dynamically based on 'name'
    });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/updateIntro/${introInfo._id}`,
        {
          method: "PUT", // Use PUT or POST based on your API design
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(introInfo), // Send updated data
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update introduction data.");
      }

      setSuccessMessage("Introduction details updated successfully!");
      // Automatically clear the success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    } catch (err) {
      setError(err.message);
    }
  };

  // Render the form with error and loading handling
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="contact-container">
      <div className="contact-form">
        <div className="intro">
          <form onSubmit={handleSubmit}>
            <h1>Introduction Section Details</h1>
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}
            
            <input
              type="text"
              name="welcomeText"
              placeholder="Welcome Text"
              value={introInfo.welcomeText}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={introInfo.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={introInfo.lastName}
              onChange={handleInputChange}
            />

            {/* Caption field as a textarea */}
            <textarea
              name="caption"
              placeholder="Enter Caption"
              value={introInfo.caption}
              onChange={handleInputChange}
              rows="3"
              style={{ resize: "none" }} // Prevents resizing if needed
            />

            {/* Description field as a textarea */}
            <textarea
              name="description"
              value={introInfo.description}
              onChange={handleInputChange}
              placeholder="Enter Description"
              rows="5"
              style={{ resize: "none" }} // Prevents resizing if needed
            />

            <button type="submit" className="submit-btn">
              Update Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdIntroduction;
