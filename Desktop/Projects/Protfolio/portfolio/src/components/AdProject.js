import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdProject() {
  const [AdProject, setAddProject] = useState([]);
  const [error, setError] = useState(null); // For error handling

  const getProject = async () => {
    try {
      const response = await fetch("http://localhost:5000/Portflio_data");
      if (!response.ok) {
        throw new Error("Failed to fetch contact data.");
      }
      const result = await response.json();
      setAddProject(result.Project); // Assuming the API has 'Project' array
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  const deleteProject = async (id) => {
    try {
      let response = await fetch(`http://localhost:5000/project/${id}`, {
        method: "DELETE",
      });
      response = await response.json();

      if (response) {
        getProject();
        alert("Project deleted successfully!");
      }
    } catch (err) {
      alert("Failed to delete project: " + err.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="Adcont Projecttb">
        <h1>Project Details</h1>
        <div className="actions">
          <Link to="/AddProject" className="add-btn">
            Add New Project
          </Link>
        </div>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : AdProject.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Link</th>
                <th>Technology</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {AdProject.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>{item.image}</td>
                  <td>{item.Link}</td>
                  <td>{item.technologies}</td>
                  <td>
                    <button
                      onClick={() => deleteProject(item._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                    <Link to={`/AdProjectUpdate/${item._id}`} className="btt">
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading Project data...</p>
        )}
      </div>
    </div>
  );
}

export default AdProject;
