import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, useAuth } from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Signup from "./Signup"; 
import Predictor from "./Predictor"; // Import the Predictor component

const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("Clerk Frontend API Key:", clerkFrontendApi);

const RedirectIfSignedIn = ({ children }) => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

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

          {/* Redirect users to dashboard if already signed in */}
          <Route
            path="/sign-in"
            element={
              <RedirectIfSignedIn>
                <SignedOut>
                  <Login />
                </SignedOut>
              </RedirectIfSignedIn>
            }
          />

          {/* New route for the Signup page */}
          <Route
            path="/sign-up"
            element={
              <RedirectIfSignedIn>
                <SignedOut>
                  <Signup />
                </SignedOut>
              </RedirectIfSignedIn>
            }
          />

          {/* Route for Predictor (requires signed-in user) */}
          <Route
            path="/predictor"
            element={
              <SignedIn>
                <Predictor />
              </SignedIn>
            }
          />

          {/* Default route */}
          <Route path="/" element={<App />} />

          {/* Redirect route for users trying to access signed-in pages without being signed in */}
          <Route path="*" element={<RedirectToSignIn />} />
        </Routes>
      </Router>
    </ClerkProvider>
  </React.StrictMode>
);
