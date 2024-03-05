import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../Signup/Signup.module.css";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";

import { useAuth } from "../../context/AuthContext.jsx";
import { registerSchema } from "../../schemas/auth.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Toaster, useToaster } from "react-hot-toast";
import { MdDataSaverOff } from "react-icons/md";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const { signup, isAuthenticated, loadingButton } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, submitCount },
    getValues,
    watch,
    formState,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const getStateForm = watch();

  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
    navigate("/login");
  };
 
  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  useEffect(() => {
    const checkFieldsFilled = () => {
      const values = getValues();
      const validate = (value) => value.length >= 3;
      const areAllFieldsFilled = Object.values(values).every(validate);

      setAllFieldsFilled(areAllFieldsFilled);
    };

    checkFieldsFilled();
  }, [getStateForm]);

  const validateButton = () => {
    if (!isValid && submitCount === 0 && allFieldsFilled) return false;
    if (isValid && allFieldsFilled && submitCount >= 1) return false;
    if (isValid && submitCount === 0) return false;
    return true;
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const logoURL =
    "https://res.cloudinary.com/dpxrcotbh/image/upload/v1708131383/zvfs52j0wfoz5s4cizry.png";

  return (
    <div className={styles.container}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <div className={styles.logoContainer}>
          <Avatar sx={{ m: 1, bgcolor: "#2c6e49", width: 120, height: 120 }}>
            <img src={logoURL} width="100" height="100" alt="logo" />
          </Avatar>
        </div>
        {/* inputs: */}
        {/* email: */}
        <div className={styles.inputContainer}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="username"
                name="username"
                label="Nombre"
                autoComplete="Name"
                {...register("username", { required: true })}
                error={!!errors.username?.message}
                color="success"
              />
              {errors.username?.message && (
                <FormHelperText error>
                  {errors.username?.message}
                </FormHelperText>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Correo Electrónico"
                autoComplete="Correo Electrónico"
                {...register("email", { required: true })}
                error={!!errors.email?.message}
                color="success"
              />
              {errors.email?.message && (
                <FormHelperText error>{errors.email?.message}</FormHelperText>
              )}
            </Grid>

            {/* contraseña: */}
            <Grid item xs={12}>
              <FormControl
                sx={{ width: "100%" }}
                error={errors.password?.message}
              >
                <InputLabel htmlFor="password" color="success">
                  Contraseña
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  color="success"
                  label="Contraseña"
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={!!errors.password?.message}
                />
              </FormControl>
              {errors.password?.message && (
                <FormHelperText error>
                  {errors.password?.message}
                </FormHelperText>
              )}
            </Grid>

            <Grid item xs={12}>
              <FormControl
                sx={{ width: "100%" }}
                error={!!errors.confirmPassword?.message}
              >
                <InputLabel htmlFor="confirmPassword" color="success">
                  Repetir Contraseña
                </InputLabel>
                <OutlinedInput
                  id="confirmarContraseña"
                  name="confirmPassword"
                  htmlFor="confirmarContraseña"
                  autoComplete="new-password"
                  label="Repetir Contraseña"
                  {...register("confirmPassword", { required: true })}
                  color="success"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  error={!!errors.confirmPassword?.message}
                />
              </FormControl>
              {errors.confirmPassword?.message && (
                <FormHelperText error>
                  {errors.confirmPassword?.message}
                </FormHelperText>
              )}
            </Grid>
          </Grid>
        </div>
        {/* boton: */}
        <div className={styles.buttonContainer}>
          <LoadingButton
            type="Submit"
            size="large"
            color="success"
            variant="contained"
            loading={loadingButton}
            loadingPosition="start"
            disabled={validateButton()}
            startIcon={loadingButton ? <MdDataSaverOff /> : " "}
            sx={{
              textTransform: "capitalize",
              bgcolor: "#2c6e49",
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "#3d865c",
              },
            }}
          >
            {loadingButton ? <span>Cargando</span> : <span>Registrarme</span>}
          </LoadingButton>
        </div>

        <p className={styles.alreadyAccount}>
          ¿Ya tienes cuenta?
          <Link className={styles.alreadyAccountLink} to="/login">
            Iniciá sesión
          </Link>
        </p>
        <Link className={styles.goBackLink} to="/">
          Inicio
        </Link>
      </Box>
    </div>
  );
};

export default Signup;
