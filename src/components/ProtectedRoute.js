import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ user,redirectPath, children }) => {
  if (user === false) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
