import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const NavbarLogin = () => {
  const { user, isLogged } = useContext(AuthContext) || {};
  console.log("isLogged:", isLogged);

  const logoURL =
    "https://res.cloudinary.com/dpxrcotbh/image/upload/v1708131383/zvfs52j0wfoz5s4cizry.png";

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

            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                {user && <span>{user.displayName || user.email}</span>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default NavbarLogin;
