import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams to extract _id from route

function AdupdateAbout() {
  const navigate = useNavigate(); // Correct naming for the navigate hook
  const { id } = useParams(); // Get the dynamic ID from the URL
  const [formData, setFormData] = useState({
    year: "",
    title: "",
    description: "",
  }); // State to hold form data
  const [error, setError] = useState(null); // For error handling

  // Fetch specific record
  const getEducation = async () => {
    try {
      const response = await fetch("http://localhost:5000/Portflio_data");
      console.log(response)
      if (!response.ok) {
        throw new Error("Failed to fetch education data.");
      }
      const result = await response.json();

      const specificEducation = result.Education.find((item) => item._id === id);

      if (specificEducation) {
        setFormData({
          year: specificEducation.year || "",
          title: specificEducation.title || "",
          description: specificEducation.description || "",
        });
      } else {
        throw new Error("Record not found.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (id) {
      getEducation(); 
    }
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit form data to update the record
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/AboutUpdate/${id}`, {
        method: "PUT", // Assuming this is a PUT endpoint for updating
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to update the record.");
      }
      alert("Record updated successfully!");
      navigate('/adminPanel'); // Navigate to admin panel after successful update
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="contact-container Aboutupdate">
      <div className="contact-form">
        <h1>Update About Record</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="year"
            placeholder="Enter year"
            value={formData.year} // Use formData.year
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Enter Title"
            value={formData.title} // Use formData.title
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Enter description"
            rows={6}
            value={formData.description} // Use formData.description
            onChange={handleChange}
          ></textarea>
          <button type="submit">Update Record</button>
        </form>
      </div>
    </div>
  );
}

export default AdupdateAbout;
