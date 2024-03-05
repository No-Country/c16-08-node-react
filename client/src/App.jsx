import { AuthProvider } from "../src/context/AuthContext.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  About,
  Landing,
  Login,
  Signup,
  Explore,
  Form,
  HomeLoggedUser,
  ProfileForm,
  Faq,
  MyServices,
} from "../src/views/index.js";
import ProtectedRoute from "./route.jsx";
import { Navbar, Footer } from "./components/index.js";
import { useLocation } from "react-router-dom";
import React from "react";

function CondicionalComponets({ componet }) {
  const location = useLocation();
  const condicional =
    location.pathname === "/register" || location.pathname === "/login";
  if (componet === "nav")
    return condicional ? <React.Fragment></React.Fragment> : <Navbar />;
  return condicional ? <React.Fragment></React.Fragment> : <Footer />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <CondicionalComponets componet="nav" />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/acerca" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/explora" element={<Explore />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/crear-anuncio" element={<Form />} />
            <Route path="/mis-anuncios" element={<MyServices />} />
            <Route path="/inicio" element={<HomeLoggedUser />} />
            <Route path="/publicar" element={<Form />} />
            <Route path="/perfil" element={<ProfileForm />} />
          </Route>
        </Routes>
        <CondicionalComponets />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
