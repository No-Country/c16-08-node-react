<<<<<<< HEAD:client/src/components/Login/Login.jsx
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./loginForm.css";

const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  console.log(input);
  // eslint-disable-next-line
  const { loading, error, dispatch, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${backendUrl}/api/auth/login`, input);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/profile");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  /*  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Log out error', error)
    }
   
  }
 */
  return (
    <>
      <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          {error && <span>{error.message}</span>}
          {/*         <button onClick={handleLogOut}>Log out</button>
           */}{" "}
        </div>
      </div>
    </>
=======
import { useState } from "react";
import { Link} from "react-router-dom";
import styles from "../Login/Login.module.css";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import GoogleSVG from "../../components/GoogleSVG/GoogleSVG";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const logoURL =
    "https://res.cloudinary.com/dpxrcotbh/image/upload/v1708131383/zvfs52j0wfoz5s4cizry.png";

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.logoContainer}>
          <img src={logoURL} width="150" height="150" alt="logo" />
        </div>
        {/* inputs */}
        {/* email: */}
        <div className={styles.inputContainer}>
          <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <TextField id="demo-helper-text-misaligned" label="Email" />
          </FormControl>
          {/* contraseña */}
          <div className={styles.inputContainer}>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" fullWidth>
                Contraseña
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />

              <p className={styles.forgotPassword}>
                {" "}
                <a href="">Olvidé mi contraseña</a>
              </p>
            </FormControl>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.buttonForm} type="submit">
            Ingresar
          </button>

          <GoogleSVG />
        </div>
        <p className={styles.noAccount}>
          ¿Aún o tienes cuenta?{" "}
          <Link className={styles.noAccountLink} to="/signup">
            {" "}
            Regístrate ahora
          </Link>
        </p>
        <Link className={styles.goBackLink} to='/'>
          Inicio
        </Link>
      </form>
    </div>
>>>>>>> 012ca5a93e599fbb8eabff81195c738f91780d8d:client/src/views/Login/Login.jsx
  );
};

export default Login;
