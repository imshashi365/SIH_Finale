import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const Predictor = () => {
  <nav className="navbar2">
          <h1 className="navbar-brand2">Dashboard</h1>
          <div className="profile-menu2">
            <button className="predictorrr"><Link to="/predictor" className="predictlink">Predictor</Link> </button>

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
  return (
    <div className="predictor-container">
      <h1>Welcome to Drishti Predictor</h1>
      <p>This is the Predictor page where you can interact with your Streamlit chatbot.</p>
      <iframe
        src="http://localhost:8506/" // Replace with your Streamlit app's URL
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
