import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../src/context/AuthContext";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {!isAuthenticated && !loading ? (
        <Navigate to="/login" replace />
      ) : (
        <Outlet />
      )}
    </div>
  );
};
