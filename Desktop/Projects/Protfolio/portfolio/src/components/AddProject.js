import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProject() {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    Link: "",
    technologies: "",
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
      const response = await fetch("http://localhost:5000/Project", {
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
        <h1>Add a new Project</h1>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title" // Add name attribute
            placeholder="Enter Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image" // Add name attribute
            placeholder="Enter Image Url"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="Link" // Add name attribute
            placeholder="Enter Link"
            value={formData.Link}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="technologies" // Add name attribute
            placeholder="Enter Technology"
            value={formData.technologies}
            onChange={handleChange}
            required
          />
          <textarea
            name="description" // Add name attribute
            placeholder="Description"
            rows={4}
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

export default AddProject;
