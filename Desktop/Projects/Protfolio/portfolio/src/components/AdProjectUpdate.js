import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AdProjectUpdate() {
  const { id } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    Link: "",
    technologies: "",
  });
  const [error, setError] = useState(null);

  // Fetch the existing project data to populate the form
  const getProjectData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/Portflio_data/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch project data.");
      }
      const project = await response.json();
      console.log("Fetched Project Data:", project);
      setFormData({
        title: project.title || "",
        description: project.description || "",
        image: project.image || "",
        Link: project.Link || "",
        technologies: project.technologies ? project.technologies.join(", ") : "",
      });
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  useEffect(() => {
    getProjectData();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission to update project data
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        ...formData,
        technologies: formData.technologies.split(",").map((tech) => tech.trim()),
      };
      const response = await fetch(`http://localhost:5000/project/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update the project.");
      }

      alert("Project updated successfully!");
      navigate("/AdProject"); // Navigate back to the project list
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Update Project</h1>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Display errors, if any */}
        <form onSubmit={handleSubmit}>
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
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Enter Image URL"
            value={formData.image}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="Link"
            placeholder="Enter Link"
            value={formData.Link}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="technologies"
            placeholder="Enter Technologies (comma-separated)"
            value={formData.technologies}
            onChange={handleChange}
            required
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default AdProjectUpdate;
