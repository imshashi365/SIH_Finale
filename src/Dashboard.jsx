import React, { useState, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
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
            <button
              className="profile-button2"
              onClick={handleDropdownToggle}
            >
              Profile
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
          <h1>Welcome to the Dashboard</h1>
        </div>
      </div>
    )
  );
};

export default Dashboard;