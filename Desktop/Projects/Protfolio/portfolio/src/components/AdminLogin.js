import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    // Check if the user is already authenticated
    const auth = localStorage.getItem("Admin");
    if (auth) {
      navigator("/adminPanel"); // Redirect to home page if already logged in
    }
  }, [navigator]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();

      if (result.user) {
        // Successfully logged in
        localStorage.setItem("Admin", JSON.stringify(result.user)); // Store user data in local storage
        alert("Login successful!");
        navigator("/adminPanel"); // Redirect to home or dashboard
      } else {
        // Handle login failure
        alert(result.result || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Admin Login</h2>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Enter Password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
