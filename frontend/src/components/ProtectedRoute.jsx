import React from "react";
import { Navigate } from "react-router-dom";

// Dummy role authentication
const userRole = localStorage.getItem("role");

const ProtectedRoute = ({ role, children }) => {
  if (userRole !== role) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
