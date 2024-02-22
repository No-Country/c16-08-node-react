import { useState } from "react";
import styles from '../Login/Login.module.css'
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import GoogleSVG from "../../components/GoogleSVG/GoogleSVG";
import {Link} from 'react-router-dom'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const logoURL = "https://res.cloudinary.com/dpxrcotbh/image/upload/v1708131383/zvfs52j0wfoz5s4cizry.png";


  return (
    <div className={styles.container}>
      <form  className={styles.form}>

        <div className={styles.logoContainer}>
          <img         
            src={logoURL}
            width="150"
            height="150"
            alt="logo"
          />
        </div>

        <div className={styles.inputContainer}>
        <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">   
        <TextField
    id="demo-helper-text-misaligned"
    label="Email"

  />
  </FormControl>


        <div className={styles.inputContainer}>
          <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password"  fullWidth >Contraseña</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />

            <p className={styles.forgotPassword}> <a href="">Olvidé mi contraseña</a></p>
          </FormControl>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.buttonForm} type="submit">Ingresar</button>

          <GoogleSVG/>
        </div>
        <p className={styles.noAccount}>
          ¿Aún o tienes cuenta?{" "}
          <Link className={styles.noAccountLink} to="/signup">
            {" "}
            Regístrate ahora
          </Link>
        </p>
      </form>


    </div>
  );
};

export default Login;