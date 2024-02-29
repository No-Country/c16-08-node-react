import { AuthProvider } from "../src/context/AuthContext.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  About,
  Landing,
  Login,
  Signup,
  Explore,
  Form,
 
} from "../src/views/index.js";
// import { ProtectedRoute } from "../route.js";
import  HomeLoggedUser from "./views/HomeLoggedUser/HomeLoggedUser.jsx"
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/explora" element={<Explore />} />
          <Route path="/acerca" element={<About />} />
          <Route path="/HomeLoggedUser" element={<HomeLoggedUser />} />
          {/* <Route element={<ProtectedRoute />}>
            <Route path="/publicar" element={<Form />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
