import { AuthProvider } from "./../src/components/Login/AuthProvider";
import { AuthContextProvider } from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";
import { Routes, Route } from "react-router-dom";
//import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
//import Section from "./components/Section/Section";
import RegisterForm from "./components/Login/RegisterForm";
import Login from "./components/Login/Login";

function App() {
  return (
    <AuthContextProvider>
      <FormProvider>
        <AuthProvider>
          <div>
            <Navbar />
         {/*    <Section />
            <Footer />  */}
            <Routes>
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </AuthProvider>
      </FormProvider>
    </AuthContextProvider>
  );
}

export default App;
