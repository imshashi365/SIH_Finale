import React from "react";
import { useAuth } from "@clerk/clerk-react";

const Dashboard = () => {
  const { signOut } = useAuth();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
