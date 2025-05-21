import React, { useState, useEffect } from "react";

function AdAbout() {
  const [aboutInfo, setAboutInfo] = useState({
    _id: "",
    lottieUrl: "",
    description1: "",
    description2: "",
    description3: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Fetch data from the API when the component mounts
  const fetchContactData = async () => {
    try {
      const response = await fetch("http://localhost:5000/Portflio_data");
      if (!response.ok) {
        throw new Error("Failed to fetch contact data.");
      }
      const data = await response.json();
      setAboutInfo(data.about);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAboutInfo({
      ...aboutInfo,
      [name]: value,
    });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/AboutUpdate/${aboutInfo._id}`, // Corrected API endpoint
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(aboutInfo), // Send updated data
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update About data.");
      }

      setSuccessMessage("About details updated successfully!");

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
    <div className="contact-container education">
      <div className="contact-form">
        <div className="about">
          <form onSubmit={handleSubmit}> {/* Corrected here */}
            <h1>About Section Details</h1>
            {successMessage && (
              <div className="success-message">{successMessage}</div>
            )}

            {/* Input for Lottie URL */}
            <input
              type="text"
              name="lottieUrl"
              placeholder="Enter Lottie/Image URL"
              value={aboutInfo.lottieUrl}
              onChange={handleInputChange}
            />

            {/* Description 1 */}
            <textarea
              name="description1"
              placeholder="Enter Description 1"
              rows="5"
              value={aboutInfo.description1}
              onChange={handleInputChange}
              style={{ resize: "none" }} // Prevents resizing if needed
            />

            {/* Description 2 */}
            <textarea
              name="description2"
              placeholder="Enter Description 2"
              rows="5"
              value={aboutInfo.description2}
              onChange={handleInputChange}
              style={{ resize: "none" }} // Prevents resizing if needed
            />

            {/* Description 3 */}
            <textarea
              name="description3"
              placeholder="Enter Description 3"
              rows="5"
              value={aboutInfo.description3}
              onChange={handleInputChange}
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

export default AdAbout;
