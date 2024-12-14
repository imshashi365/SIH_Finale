import React from "react";
import { Link } from "react-router-dom";
import { SignIn } from "@clerk/clerk-react";
import { SignUp } from "@clerk/clerk-react";
import "./App.css";

import logo from "./assets/logo.png"; // Import the logo
import heroImage from "./assets/heroimg2.jpeg"; // Import the hero background image


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
            {/* <Link to="#">Analytics</Link>
            <Link to="/predictor">Predictor</Link>  */}
          </nav>

          {/* Log in and Sign up Buttons */}
          <div className="auth-buttons">
            <Link to="/sign-in">Log in</Link>
            {/* <Link to="/sign-up" className="signup-btn">
              Sign up
            </Link> */}
          </div>
        </div>
      </header>

      <div className="heroSec">
        <header>
          <div className="herooo">
            <div className="titleheading">Reliable | Insightful | Efficient</div>
            <h1>Leveraging Analytics & Prediction to Optimize Postal Operationse</h1>
            <p>Revolutionizing postal administration through advanced monitoring, analytics, and visualization to harness the power of digitization.</p>
            <a href="#" className="button">Get Started</a>
          </div>
          <div className="heroimg">
            <div className="img2">
              <img src={heroImage} alt="Hero Background" />
            </div>
          </div>
        </header>
      </div>

      <div className="extraspace"></div>
      {/* SignIn Component for Clerk */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <SignIn
          path="/sign-in"
          routing="path"
          afterSignInUrl="/dashboard"
          redirectUrl="/dashboard"
        />

        <SignUp
          path="/sign-up"
          routing="path"
          afterSignUpUrl="/dashboard"
        />
      </div>
    </div>
  );
};

export default App;
