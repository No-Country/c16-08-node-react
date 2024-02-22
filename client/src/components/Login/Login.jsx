import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./loginForm.css";

const backendUrl = import.meta.env.VITE_APP_BACKEND_URL;

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  console.log(input);
  // eslint-disable-next-line
  const { loading, error, dispatch, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`${backendUrl}/api/auth/login`, input);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/profile");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  /*  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Log out error', error)
    }
   
  }
 */
  return (
    <>
      <div className="login">
        <div className="lContainer">
          <input
            type="text"
            placeholder="email"
            id="email"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
          <button disabled={loading} onClick={handleClick} className="lButton">
            Login
          </button>
          {error && <span>{error.message}</span>}
          {/*         <button onClick={handleLogOut}>Log out</button>
           */}{" "}
        </div>
      </div>
    </>
  );
};

export default Login;
