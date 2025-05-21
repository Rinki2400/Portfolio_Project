import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function AdEducation() {
  const [AdEducation, setAdEducation] = useState([]);
  const [error, setError] = useState(null); // For error handling

  const getEducation = async () => {
    try {
      const response = await fetch("http://localhost:5000/Portflio_data");
      if (!response.ok) {
        throw new Error("Failed to fetch contact data.");
      }
      const result = await response.json();
      setAdEducation(result.Education); // Assuming the API has 'Education' array
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getEducation();
  }, []);

  const deleterecord = async (id) => {
    let result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "delete",
    });
    result = await result.json();

    if (result) {
      getEducation();
    }
  };
  return (
    <div className="contact-container">
      <div className="Adcont">
        <h1>Education Details</h1>
        <div className="actions">
          <Link to="/AddEducation" className="add-btn">
            Add New Education
          </Link>
        </div>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : AdEducation.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Year</th>
                <th>Title</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {AdEducation.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.year}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button
                      onClick={() => deleterecord(item._id)}
                      className="btn"
                    >
                      Delete
                    </button>
                    <Link to={"/AdupdateAbout/" + item._id} className="btt">
                      update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading education data...</p>
        )}
      </div>
    </div>
  );
}

export default AdEducation;
