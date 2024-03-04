import { Link } from "react-router-dom";
import "./navbar.scss";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

// import Box from '@mui/material/Box';
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigation = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    logout();
  };
  const handlePerfil = () => {
    navigation("/perfil");
  };
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
              {isAuthenticated ? (
                <Link className="nav-link active" aria-current="page" to="/inicio">
                  Inicio
                </Link>
              ) : (
                <Link className="nav-link active" aria-current="page" to="/">
                  Inicio
                </Link>
              )}
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/acerca">
                ¿Quiénes somos?
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/explora">
                Explora
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/mis-anuncios">
                    Mis anuncios
                  </Link>
                </li>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="usuario"
                      src="/avatar.svg"
                      sx={{ width: 30, height: 30 }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Cerrar sesión</Typography>
                  </MenuItem>
                  <MenuItem onClick={handlePerfil}>
                    <Typography textAlign="center">Perfil</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
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
                  <Link to="/register" className="dropdown-item">
                    Registrarse
                  </Link>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
