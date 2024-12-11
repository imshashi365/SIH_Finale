import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import Login from "./Login";  // Ensure the component name is capitalized

// Clerk Frontend API Key from .env file
const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log('Clerk Frontend API Key:', clerkFrontendApi);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
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
                <Login /> {/* Render the LoginPage component */}
              </SignedOut>
            }
          />

          {/* Default route */}
          <Route
            path="/" 
            element={<App />} 
          />
          
          {/* Redirect route for users trying to access signed-in pages without being signed in */}
          <Route 
            path="*" 
            element={<RedirectToSignIn />} 
          />
        </Routes>
      </Router>
    </ClerkProvider>
  </React.StrictMode>
);
