//import { AuthProvider } from "./components/Login/AuthProvider";
import { Routes, Route} from "react-router-dom";
import Login from "./views/Login/Login";
import Landing from "./views/Landing/Landing";
import Signup from "./views/Signup/Signup";

function App() {
  return (
   /*  <AuthProvider> */
      <div>
        <Routes>

            <Route path='/' element={<Landing />}>    
      </Route>  

<Route path='/login' element={<Login />}>    
      </Route>
      <Route path='/signup' element={<Signup />}>    
      </Route>   
</Routes>
      </div>
 /*    </AuthProvider> */
  );
}

export default App;
