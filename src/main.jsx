import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";

// Clerk Frontend API Key from .env file
const clerkFrontendApi = import.meta.env.VITE_CLERK_API_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <Router>
        <Routes>
          {/* Route for SignedIn users */}
          <Route
            path="/dashboard"
            element={
              <SignedIn>
                <Dashboard />
              </SignedIn>
            }
          />
          
          {/* Route for SignedOut users */}
          <Route
            path="/sign-in"
            element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            }
          />
          
          {/* Default route */}
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </ClerkProvider>
  </React.StrictMode>
);
