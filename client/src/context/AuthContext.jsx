import { createContext, useContext, useState, useEffect } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingButton, setLoadingButton] = useState(false);

  const signup = async (user) => {
    try {
      setLoadingButton(true);
      const response = await registerRequest(user);
      toast.success(response.data.message);
      if (response.status === 201) {
        setUser(response.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoadingButton(false);
    }
  };

  const signin = async (user) => {
    try {
      setLoadingButton(true);
      const response = await loginRequest(user);
      toast.success(response.data.message);
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoadingButton(false);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      console.log(!cookies.token);
      if (!cookies.token) {
        setIsAuthenticated(false);
        setLoading(false);
      }

      try {
        console.log("token");
        const res = await verifyTokenRequest(cookies.token);
        console.log(!res.data);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setLoading(false);
        console.log("error de token");
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
        isAuthenticated,
        loading,
        loadingButton,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
