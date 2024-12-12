import React from "react";
import { SignUp } from "@clerk/clerk-react";
import "./App.css"; // Import your CSS file
const Signup = () => {
  return (
    <div className="signup-container">
      <h1>Create Your Account</h1>
      <p>Sign up to access exclusive features.</p>
      <SignUp
        path="/sign-up"
        routing="path"
        afterSignUpUrl="./dashboard" // Redirect after successful sign-up
      />
    </div>
  );
};

export default Signup;
