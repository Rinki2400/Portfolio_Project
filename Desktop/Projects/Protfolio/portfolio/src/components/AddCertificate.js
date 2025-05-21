import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate after successful submission

function AddCertificate() {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    year: "",
    title: "",
    institution: "",
    description: "",
  });
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit form data to add a new record
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/certificate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to add the certificate.");
      }
      alert("Certificate added successfully!");
      navigate("/adminPanel"); // Navigate back to the certificate list
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="contact-container education">
      <div className="contact-form">
        <h1>Add New Certificate</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="year"
            placeholder="Enter year"
            value={formData.year}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="institution"
            placeholder="Enter institution"
            value={formData.institution}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
          <button type="submit">Add Certificate</button>
        </form>
      </div>
    </div>
  );
}

export default AddCertificate;
