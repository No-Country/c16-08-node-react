import { AuthProvider } from "../src/views/Login/AuthProvider";
import { AuthContextProvider } from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";
import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
// import Section from "./components/Section/Section";
import RegisterForm from "../src/views/Login/RegisterForm";
import Login from "./views/Login/Login";
import Landing from "./views/Landing/Landing";
import Signup from "./views/Signup/Signup";

function App() {
  return (
    <AuthContextProvider>
      <FormProvider>
        <AuthProvider>
          <div>
            <Navbar />
            {/* <Section />
            <Footer /> */}
            <Routes>
              <Route path='/' element={<Landing />}>    
                <Route path="/register" element={<RegisterForm />} />
                <Route path='/signup' element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </div>
        </AuthProvider>
      </FormProvider>
    </AuthContextProvider>
  );
}

export default App;
