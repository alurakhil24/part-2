import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthStateValue } from "../hooks/useAuthState";

function ProtectedRoute({ ...props }) {
  const isAuthenticated = useAuthStateValue();
  return isAuthenticated ? <Route {...props} /> : <Redirect to="/signin" />;
}

export default ProtectedRoute;
