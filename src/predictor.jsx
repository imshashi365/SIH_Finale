import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Predictor = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the dropdown
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handle menu item click (for navigation or actions like logout)
  const handleMenuItemClick = (path) => {
    if (path === "logout") {
      // Handle logout logic here
      console.log("Logging out...");
    } else {
      // Navigate to the given path
      window.location.href = path; // Or use React Router's navigate method if needed
    }
  };

  return (
    <div className="predictor-container">
      <nav className="navbar2">
        <h1 className="navbar-brand2"> <Link to="/" className="predictlink">Dashboard</Link></h1>
        <div className="profile-menu2">
          <button className="predictorrr">
            <Link to="/dashboard" className="predictlink">Analytics</Link>
          </button>

          <button className="profile-icon-button" onClick={handleDropdownToggle}>
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu2">
              <button
                className="dropdown-item2"
                onClick={() => handleMenuItemClick("/profit")}
              >
                {/* Profit */}
              </button>
              <button
                className="dropdown-item2"
                onClick={() => handleMenuItemClick("/profile-settings")}
              >
                {/* Profile Settings */}
              </button>
              <button
                className="dropdown-item2"
                onClick={() => handleMenuItemClick("logout")}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      <iframe
        src="http://localhost:8503/" // Replace with your Streamlit app's URL
        title="Drishti Chatbot"
        width="100%"
        height="800px"
        style={{
          border: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      ></iframe>
    </div>
  );
};

export default Predictor;
