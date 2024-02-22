import { AuthProvider } from "../src/views/Login/AuthProvider";
import { AuthContextProvider } from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import Services from "./components/Services/Services";
import Signup from "./views/Signup/Signup";
// import RegisterForm from "../src/views/Login/RegisterForm";
//import Login from "./views/Login/Login";
//import Landing from "./views/Landing/Landing";

function App() {
  return (
    <AuthContextProvider>
      <FormProvider>
        <AuthProvider>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Section />} />
              <Route path="/" element={<Footer />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/service" element={<Services />} />
              {/* 
                <Route path="/home" element={<Landing />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<Login />} />
              </Route> */}
            </Routes>
            <Footer />
          </div>
        </AuthProvider>
      </FormProvider>
    </AuthContextProvider>
  );
}

export default App;
