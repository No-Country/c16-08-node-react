
import { AuthProvider } from "../src/context/AuthContext.jsx";
import { AuthContextProvider } from "./context/AuthContext";
import { FormProvider } from "./context/FormContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {About, Landing,Login,Signup, Explore, Form, HomeLoggedUser, ProfileForm, Faq} from "../src/views/index.js"
// import { ProtectedRoute } from "../route.js";


function App() {
  return (
   <AuthProvider>
      <BrowserRouter>
        <Routes>
          
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/publicar" element={<Form />} />
              <Route path="/explora" element={<Explore />} />
              <Route path="/acerca" element={<About />} />
              <Route path="/inicio" element={<HomeLoggedUser />} />
              <Route path="/perfil" element={<ProfileForm />} />
              <Route path="/Faq" element={<Faq />} />
                 {/* <Route element={<ProtectedRoute />}>
            <Route path="/publicar" element={<Form />} />
          </Route> */}
            </Routes>
  
         
           </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
