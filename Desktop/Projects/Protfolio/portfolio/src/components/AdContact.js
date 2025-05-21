import React, { useState, useEffect } from "react";

function AdContact() {
  const [contactInfo, setContactInfo] = useState({
    _id: "", // Added to capture the ID of the contact
    name: "",
    gender: "",
    email: "",
    mobile: "",
    age: "",
    Address: "",
  });

  const [error, setError] = useState(null); // For error handling
  const [successMessage, setSuccessMessage] = useState(null); // For success notification

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch("http://localhost:5000/Portflio_data"); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch contact data.");
        }
        const data = await response.json(); // Assuming API returns JSON
        setContactInfo(data.contact); // Assign contact object directly, including _id
      } catch (err) {
        setError(err.message); // Handle errors
      }
    };

    fetchContactData();
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({
      ...contactInfo,
      [name]: value, // Update state dynamically
    });
  };

  // Handle form submission and update by API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/update/${contactInfo._id}`,
        {
          method: "PUT", // Use PUT or POST based on your API design
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactInfo), // Send updated contact data
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update contact data.");
      }

      setSuccessMessage("Contact details updated successfully!");
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
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Update Contact Details</h1>
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <input
          type="text"
          name="name"
          value={contactInfo.name}
          placeholder="Enter Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="gender"
          value={contactInfo.gender}
          placeholder="Enter Gender"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={contactInfo.email}
          placeholder="Enter Email"
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="mobile"
          value={contactInfo.mobile}
          placeholder="Enter Mobile Number"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="age"
          value={contactInfo.age}
          placeholder="Enter Age"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          value={contactInfo.Address}
          placeholder="Enter Address"
          onChange={handleInputChange}
        />
        <button type="submit" className="submit-btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default AdContact;
