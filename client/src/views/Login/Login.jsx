import { useState, useEffect } from "react";
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

import { useAuth } from "../../context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/auth.js";
import Avatar from "@mui/material/Avatar";

import { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    signin(data);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/inicio");
    }
  }, [isAuthenticated]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const logoURL =
    "https://res.cloudinary.com/dpxrcotbh/image/upload/v1708131383/zvfs52j0wfoz5s4cizry.png";

  return (
    <div className={styles.container}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Avatar sx={{ m: 1, bgcolor: "#2c6e49", width: 120, height: 120 }}>
          <img src={logoURL} width="100" height="100" alt="logo" />
        </Avatar>

        <div className={styles.inputContainer}>
          <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
            <TextField
              id="demo-helper-text-misaligned"
              label="Email"
              name="email"
              autoComplete="username"
              {...register("email")}
            />
          </FormControl>

          <div className={styles.inputContainer}>
            <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" >
                Contraseña
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                autoComplete="current-password"
                {...register("password")}
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
          <Link className={styles.noAccountLink} to="/register">
            {" "}
            Regístrate ahora
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
