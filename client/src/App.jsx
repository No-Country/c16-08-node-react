import { AuthProvider } from "../src/views/Login/AuthProvider";
import { AuthContextProvider } from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";
import { Routes, Route } from "react-router-dom";
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login";
import Landing from "./views/Landing/Landing";
import Form from '../src/views/Form/Form'


function App() {
  return (
    <AuthContextProvider>
      <FormProvider>
        <AuthProvider>
          
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/publicar" element={<Form />} />
            </Routes>
  
         
        </AuthProvider>
      </FormProvider>
    </AuthContextProvider>
  );
}

export default App;
