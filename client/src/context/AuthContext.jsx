import { createContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types'


const INITIAL_STATE = {
  user: null,
  loading: false,
  isLogged: false,
  error: null,
};

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        isLogged: true,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        /*         user: null,*/
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("token"); // Elimina el token del almacenamiento local al cerrar sesión

      return {
        ...INITIAL_STATE, // Restaura el estado inicial al cerrar sesión

        user: null,

        isLogged: false,
        loading: false,
        loginMethod: null, // Restablecer loginMethod al cerrar sesión
        error: null,
      };
    case "SET_IS_LOGGED":
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
};
export const AuthContext = createContext();

// Proveedor del contexto
export const AuthContextProvider = ( {children} ) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

   const setIsLogged = (value) => {
    dispatch({ type: 'SET_IS_LOGGED', payload: value });
   };
  
  useEffect(() => {
    // Actualiza el valor de isLogged en localStorage
    localStorage.setItem("isLogged", state.isLogged);
  }, [state.isLogged]);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
}