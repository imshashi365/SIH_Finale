import React from "react";
import { SignIn } from "@clerk/clerk-react";
import "./App.css"; 

const Login = () => {
  return (
    <div className="login-container">
      <h1>Welcome Back!</h1>
      <p>Please sign in to access your dashboard.</p>
      <SignIn
        path="/sign-in"
        routing="path"
        afterSignInUrl="/dashboard" 
        fallbackRedirectUrl="http://localhost:3000/dashboard" 
      />
    </div>
  );
};

export default Login;
