import React from "react";
import { Link } from "react-router-dom"; // Using Link for navigation
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
            <Link to="/">Home</Link>
            <Link to="/3d-modal">3D Modal</Link> {/* Use a real path here */}
          </nav>

          {/* Log in and Sign up Buttons */}
          <div className="auth-buttons">
            <Link to="/sign-in">Log in</Link> {/* Link to sign-in page */}
            <Link to="/sign-up" className="signup-btn"> {/* Link to sign-up page */}
              Sign up
            </Link>
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
