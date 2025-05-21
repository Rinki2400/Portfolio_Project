import React, { useState, useEffect } from "react";
import cont_img from "../assets/dep.png";

function Contact() {
  const [contacts, setContacts] = useState([]); // State to store contacts data

  // Fetch data from the backend
  const getContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/Portflio_data"); // Fetch from API
      const data = await response.json(); // Convert response to JSON
      setContacts([data.contact]); // Set the contacts data in state
    } catch (error) {
      console.error("Error fetching contacts:", error); // Log errors
    }
  };

  useEffect(() => {
    getContacts(); // Fetch contacts when the component mounts
  }, []);

  return (
    <div className="Contact_cont">
      <div className="cont_info">
        <h1>Say Hello</h1>
        <div className="count_line"></div>
        <div className="form_conatainer">
          {contacts.length > 0 ? (
            <ul>
              {contacts.map((contact, index) => (
                <li key={index}>
                  Name: {contact.name} <br />
                  Gender: {contact.gender} <br />
                  Age: {contact.age} <br />
                  Email: {contact.email} <br />
                  Mobile: {contact.mobile} <br />
                  Address: {contact.address}
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading contact information...</p>
          )}
          <div className="img_conatainer">
            <img srcSet={cont_img} alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
