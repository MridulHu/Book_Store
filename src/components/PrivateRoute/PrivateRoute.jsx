import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // If the user is not logged in, redirect to the login page
  return isLoggedIn === "true" ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
