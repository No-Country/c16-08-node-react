
import { Link } from "react-router-dom";
import './navbar.scss'

const Navbar = () => {
 
  const logoURL =
    "https://res.cloudinary.com/dpxrcotbh/image/upload/v1708131383/zvfs52j0wfoz5s4cizry.png";

  
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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/inicio"
                >
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  ¿Quiénes somos?
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/explore">
                  Explora
                </Link>
              </li>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle custom-btn-color"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Ingresar
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to="/login" className="dropdown-item">
                    Iniciar sesión
                  </Link>
                  <Link to="/signup" className="dropdown-item">
                    Registrarse
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;
