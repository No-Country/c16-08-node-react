import { createContext, useContext, useState, useEffect } from "react";
import {
  loginRequest,
  registerRequest,
  verifyTokenRequest,
  logoutRequest,
} from "../api/auth";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const AuthContext = createContext();
// const toastIdVerify =
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within a AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [loadingButton, setLoadingButton] = useState(false);

  const signup = async (user) => {
    try {
      setLoadingButton(true);
      const response = await registerRequest(user);
      toast.success(response.data.message, { id: "successMessage" });
      toast("Verifica tu correo!", {
        id: "verifyEmail",
        icon: "📧",
      });
      await delay(2500);
      toast.dismiss("verifyEmail");
      if (response.status === 201) {
        setUser(response.data);
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
      toast.success(response.data.message, { id: "successAccess" });
      setUser(response.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoadingButton(false);
    }
  };

  const logout = async () => {
    try {
      const response = await logoutRequest();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      try {
        const response = await verifyTokenRequest(cookies.token);
        if (!response.data) return setIsAuthenticated(false);
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
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
        loadingButton,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
