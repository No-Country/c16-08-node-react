import { useState } from "react";
import { Link} from "react-router-dom";
import styles from "../Signup/Signup.module.css";
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

const Signup = () => {
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

        {/* inputs: */}
        {/* email: */}
        <div className={styles.inputContainer}>
          <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <TextField id="demo-helper-text-misaligned" label="Email" />
          </FormControl>
          {/* contraseña: */}
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
            </FormControl>
          </div>
          {/* repetir contraseña */}
          <div className={styles.inputContainer}>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password" fullWidth>
                Repetir contraseña
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
                label="Repeat-Password"
              />
            </FormControl>
          </div>
        </div>
        {/* boton: */}
        <div className={styles.buttonContainer}>
          <button className={styles.buttonForm} type="submit">
            Registrarme
          </button>
        </div>

        <p className={styles.alreadyAccount}>
          ¿Ya tienes cuenta?
          <Link className={styles.alreadyAccountLink} to="/login">
            Iniciá sesión
          </Link>
        </p>
        <Link className={styles.goBackLink} to='/'>
          Inicio
        </Link>
      </form>
    </div>
  );
};

export default Signup;
