import React from "react";
import { Link } from "react-router-dom"; // Using Link for navigation
import { SignIn } from "@clerk/clerk-react";
import "./App.css"; // Import the CSS file
import logo from "./assets/logo.png"; // Import the logo
import heroImage from "./assets/heroimg.jpg"; // Import the hero background image

const App = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="navbar">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          {/* Navigation Menu */}
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/3d-modal">3D Modal</Link> {/* Use a real path here */}
          </nav>

          {/* Log in and Sign up Buttons */}
          <div className="auth-buttons">
            <Link to="/sign-in">Log in</Link>
            <Link to="/sign-up" className="signup-btn">
              Sign up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Overlay */}
      <section
        className="hero-section"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: -21,
          height: "800px",
          
        }}
      >
        {/* Black Overlay */}
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black color with transparency
            zIndex: "1", // Ensure the overlay is on top of the background image
          }}
        ></div>

        {/* Content */}
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: "2", // Ensure content is above the overlay
            textAlign: "center",
            color: "#fff",
          }}
        >
          <h1>Welcome to Our Platform</h1>
          <p>Discover amazing features and take your experience to the next level.</p>
          <Link
            to="/sign-up"
            className="hero-signup-btn"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Get Started
          </Link>
        </div>
      </section>

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
