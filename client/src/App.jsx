import { AuthProvider } from "../src/views/Login/AuthProvider";
import { AuthContextProvider } from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";
import { Routes, Route } from "react-router-dom";
import {About, Landing,Login,Signup, Explore, Form, Faq} from "../src/views/index.js"


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
              <Route path="/explora" element={<Explore />} />
              <Route path="/acerca" element={<About />} />
              <Route path="/Faq" element={<Faq />} />
            </Routes>
  
         
        </AuthProvider>
      </FormProvider>
    </AuthContextProvider>
  );
}

export default App;
