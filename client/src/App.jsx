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
  MyServices
} from "../src/views/index.js";
import ProtectedRoute from "./route.jsx";
import { Navbar, Footer } from "./components/index.js";
import { useLocation } from "react-router-dom";
import React from "react";

function Nav() {
  const location = useLocation();
  return location.pathname === "/register" || location.pathname === "/login" ? (
    <React.Fragment></React.Fragment>
  ) : (
    <Navbar />
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Nav />
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
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
