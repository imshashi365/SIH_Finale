import React from "react";
import { SignIn } from "@clerk/clerk-react";
import "./App.css"; // Import the CSS file

const App = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="navbar">
        <div className="container">
          {/* Logo */}
          <div className="logo">{/* Add your logo image here */}</div>

          {/* Navigation Menu */}
          <nav className="nav-links">
            <a href="#product">Product</a>
            <a href="#features">Features</a>
            <a href="#marketplace">Marketplace</a>
            <a href="#company">Company</a>
          </nav>

          {/* Log in and Sign up Buttons */}
          <div className="auth-buttons">
            <a href="#login">Log in</a>
            <a href="#signup" className="signup-btn">
              Sign up
            </a>
          </div>
        </div>
      </header>

      {/* SignIn Component for Clerk */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to the Login Page</h1>
        <SignIn
          path="/sign-in"
          routing="path"
          afterSignInUrl="/dashboard"
          redirectUrl="/dashboard"
        />
      </div>
    </div>
  );
};

export default App;
