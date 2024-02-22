import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "./signInWithGoogle.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import {  useFormContext } from "../../context/FormContext.jsx";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";


//import { auth } from "./signInWithGoogle.js";
import { FcGoogle } from "react-icons/fc";
import "./loginForm.css";

const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;

const RegisterForm = () => {
  const { dispatch } = useContext(AuthContext) || {};
  const { validate } = useFormContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  // eslint-disable-next-line
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // Validar campos de email y password
    const validationErrors = validate({ email, password });

    if (Object.keys(validationErrors).length > 0) {
      // Mostrar errores al usuario si hay campos inválidos
      setErrorMessage("Please fill out all fields correctly");
      return;
    }
    try {
      console.log("Backend URL:", `${backendUrl}/api/auth/register`);
      const response = await fetch(`${backendUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, confirmPassword }),
      });

      if (response.ok) {
        navigate("/login"); // Redirige al usuario a la página de inicio de sesión.

        console.log("Está registrado pero no logueado");
        alert("Se ha registrado correctamente")
        const { token } = await response.json();
        localStorage.setItem("token", token);
      } else {
        const errorMessage = await response.text(); // Obtener el cuerpo de la respuesta como texto
        console.log(errorMessage); // Mostrar el mensaje de error en la consola
        setErrorMessage("Invalid email or password");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setErrorMessage("Error signing in. Please try again later.");
    }
  }


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setConfirmPassword(event.target.value);
    setErrorMessage(""); //Limpia el mensaje de error al modificar el campo de contraseña.

  };

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();
      // Actualiza el estado de autenticación con el nombre de usuario
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { user },
      });
    } catch (error) {
      console.error("Error de inicio de sesión con Google:", error);
    }
  };

  return (
    <>
      <div className="login-form-container">
        <h2>Sign in or create an account</h2>
        <form className="login-form">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
          {errorMessage && <span>{errorMessage}</span>}

          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
           {errorMessage && <span>{errorMessage}</span>}
          <label className="form-label">Confirm Password</label>
          <div className="password-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              className="form-input"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={handlePasswordChange}
            />
              {errorMessage && <span>{errorMessage}</span>}
            <div
              className="toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}
            </div>
          </div>

          <button type="submit" className="form-button" onClick={handleSubmit}>
            Continue
          </button>
        </form>
        <div>
          <div className="d-line">
            <span className="divider-line"></span>
            or use this option
            <span className="divider-line"></span>
          </div>
        </div>

        <div className="social-login-container">
          <button className="btnGoogle" onClick={handleGoogleLogin}>
            <FcGoogle className="google-icon" />
          </button>
        </div>
        <br />
        <div className="d-line-2">
          <span className="divider-line-2"></span>
          By signing in or creating an account, you agree with our{" "}
          <span>
            <a href="/terms">Terms & conditions</a> and{" "}
          </span>
          <span>
            <a href="/privacy">Privacy statement</a>
          </span>
          <span className="divider-line-2"></span>
        </div>
        <p>All rights reserved. Copyright 2024 - Auth Gmail Firebase App™</p>
      </div>
    </>
  );
};

export default RegisterForm;
