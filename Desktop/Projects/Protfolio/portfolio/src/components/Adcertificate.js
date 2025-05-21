import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Adcertificate() {
  const [AdCertificate, setCertificate] = useState([]);
  const [error, setError] = useState(null); // For error handling
  const [loading, setLoading] = useState(true); // Loading state

  const getCertificate = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch("http://localhost:5000/Portflio_data");
      if (!response.ok) {
        throw new Error("Failed to fetch certificate data.");
      }
      const result = await response.json();
      setCertificate(result.Certificate || []); // Fallback to empty array
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    getCertificate();
  }, []);

  const deleteProject = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/certificate/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();

      if (response.ok) {
        getCertificate(); // Refresh the certificates
        alert("Certificate deleted successfully!");
      } else {
        throw new Error(result.message || "Failed to delete the certificate.");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="Adcont Projecttb">
        <h1>Certificate Details</h1>
        <div className="actions">
          <Link to="/AddCertificate" className="add-btn">
            Add New Certificate
          </Link>
        </div>
        {loading ? (
          <p>Loading Certificate data...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : AdCertificate.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Year</th>
                <th>Title</th>
                <th>Institution</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {AdCertificate.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.year}</td>
                  <td>{item.title}</td>
                  <td>{item.institution}</td>
                  <td>{item.description}</td>
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
          <p>No certificates available</p>
        )}
      </div>
    </div>
  );
}

export default Adcertificate;
