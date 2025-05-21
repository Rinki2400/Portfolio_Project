import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEducation() {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    year: "",
    title: "",
    description: "",
  });
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData, // Spread the previous state
      [name]: value, // Update the specific field
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/education", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add the education details.");
      }
      alert("Education details added successfully!");
      navigate("/adminPanel"); // Navigate to the admin panel
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="contact-container education">
      <div className="contact-form">
        <h1>Add Education Details</h1>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display errors, if any */}
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
            placeholder="Enter Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddEducation;
