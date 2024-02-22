import { AuthContext } from "../../context/AuthContext";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import "../Login/loginForm.module.css";
import Navbar from "../../components/Navbar/Navbar";


const NavbarLogin = () => {
  const { user, isLogged, dispatch, setIsLogged } = useContext(AuthContext) || {};
  const [showDropdown, setShowDropdown] = useState(false);

  const logoURL =
    "https://res.cloudinary.com/dpxrcotbh/image/upload/v1708131383/zvfs52j0wfoz5s4cizry.png";

  const navigate = useNavigate();

  const handleUserClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = async () => {
    try {
      console.log("Cierre de sesión en progreso...");
      setIsLogged(false); // Utiliza setIsLogged para cambiar el estado isLogged
      await signOut();
      console.log("Cierre de sesión exitoso");
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showDropdown && !event.target.closest(".userProfile")) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [showDropdown]);

  if (isLogged === true) {
    return (
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <img
            className="navbar-img-toggle"
            src={logoURL}
            width="70"
            height="70"
            alt="logo"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar-toggler">
            <Link className="navbar-brand" to="/">
              <img
                className="navbar-img"
                src={logoURL}
                width="70"
                height="70"
                alt="logo"
              />
            </Link>
            {isLogged ? (
              <div className="userProfile" onClick={handleUserClick}>
                <div className="userDetails">
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="user-avatar"
                    />
                  )}
                  <ul className="navbar-nav d-flex justify-content-center align-items-center">
                    <li className="nav-item">
                      {user && <span>{user.displayName || user.email}</span>}
                    </li>
                    {showDropdown && (
                      <div className="dropdown">
                        <Link
                          to="/"
                          className="logout-button"
                          onClick={handleSignOut}
                        >
                          Log Out
                        </Link>
                      </div>
                    )}
                  </ul>
                </div>
              </div>
            ) : (
              <Navbar />
            )}
          </div>
        </div>
      </nav>
    );
  }
};

export default NavbarLogin;
