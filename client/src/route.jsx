import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  //   if (loading) return <h1>Loading...</h1>;
  //   if (!isAuthenticated && !loading)

  //   {
  //     console.log(!isAuthenticated && !loading)
  //     return <Navigate to="/login" replace />};
  //   return <Outlet />;
  // };
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <Outlet/>;
};

export default ProtectedRoute;
