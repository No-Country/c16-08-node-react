import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { signInWithGoogle } from "../Login/signInWithGoogle.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import { FcGoogle } from "react-icons/fc";
import styles from "../Signup/Signup.module.css";


const Signup = () => {
  const { dispatch } = useContext(AuthContext) || {};
 const navigate = useNavigate();

  const logoURL =
    "https://res.cloudinary.com/dpxrcotbh/image/upload/v1708131383/zvfs52j0wfoz5s4cizry.png";
 
    
    const handleGoogleLogin = async () => {
      try {
        const user = await signInWithGoogle();
        // Actualiza el estado de autenticación con el nombre de usuario
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { user },
        });
        navigate('/service')
      } catch (error) {
        console.error("Error de inicio de sesión con Google:", error);
      }
    };

  return (
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logoURL} width="150" height="150" alt="logo" />
        </div>
  
        {/* Botón para iniciar sesión con Google */}
        <div className={styles.buttonContainer}>
        <div className="social-login-container">
          <button className="btnGoogle" onClick={handleGoogleLogin}>
            <FcGoogle className="google-icon" />
          </button>
          <div>
          Regístrate o Inicia sesión con Google
          </div>
        </div>
        </div>
  
        {/* Mensaje de tener cuenta y enlace a la página de inicio de sesión */}
      {/*   <p className={styles.alreadyAccount}>
          ¿Ya tienes cuenta?
          <Link className={styles.alreadyAccountLink} to="/login">
            Iniciá sesión
          </Link>
        </p> */}
  
       {/*  {/* Enlace a la página de inicio
        <Link className={styles.goBackLink} to='/'>
          Inicio
        </Link> */}
      </div>
    );
};

export default Signup;
