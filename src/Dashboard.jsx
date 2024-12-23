import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./App.css"; 
const Dashboard = () => {
  const { isSignedIn, signOut } = useAuth();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Redirect to login page if not signed in
  useEffect(() => {
    if (!isSignedIn) {
      navigate("/sign-in");
    }
  }, [isSignedIn, navigate]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (path) => {
    if (path === "logout") {
      signOut();
    } else {
      navigate(path);
    }
  };

  return (
    isSignedIn && (
      <div className="dashboard2">
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
        <div className="contentdash">
          <iframe
        src="http://localhost:8501/" // Replace with your Streamlit app's URL
        title="Drishti Chatbot"
        width="100%"
        height="800px"
        style={{
          border: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      ></iframe>
        </div>
      </div>
    )
  );
};

export default Dashboard;