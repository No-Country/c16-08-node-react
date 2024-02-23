import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types'


const FormContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useFormContext() {
  return useContext(FormContext);
}

export function FormProvider({ children }) {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //fields validations
  const validate = (input) => {
    let errors = {};
    const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const patternPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  
    if (!input.email) {
      errors.email = "Email is required";
    } else if (!patternEmail.test(input.email)) {
      errors.email = "Email is not valid";
    }
  
    if (!input.password) {
      errors.password = "Password is required";
    } else if (input.password.length < 8 || !patternPassword.test(input.password)) {
      errors.password = "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one digit";
    }
  
    return errors;
  };

  return (
    <FormContext.Provider
      value={{
        input,
        setInput,
        errors,
        setErrors,
        successMessage,
        setSuccessMessage,
        errorMessage,
        setErrorMessage,
        validate,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.any.isRequired,
}