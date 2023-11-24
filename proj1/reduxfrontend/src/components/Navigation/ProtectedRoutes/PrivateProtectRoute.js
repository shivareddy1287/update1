import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateProtectRoute = ({ children }) => {
  const user = useSelector((state) => state?.profile);
  const { userAuth } = user;
  if (!userAuth) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default PrivateProtectRoute;
