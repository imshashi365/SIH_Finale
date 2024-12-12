import React, { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import "./App.css"; 

const Dashboard = () => {
  const { isSignedIn, signOut } = useAuth();
  const navigate = useNavigate();

  // Redirect to login page if not signed in
  useEffect(() => {
    if (!isSignedIn) {
      navigate("/sign-in"); // Redirect to the login page
    }
  }, [isSignedIn, navigate]);

  return (
    isSignedIn && (
      <div  className="dash">
        <h1>Welcome to the Dashboard</h1>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    )
  );
};

export default Dashboard;
