import React from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo que está a la izquierda */}
        <div className="logo">
          <img src="/Logo.png" alt="Logo" />
        </div>

        {/* Enlaces a la derecha */}
        <div className="nav-links">
          <a href="#inicio">Inicio</a>

          {/* Menú desplegable de Productos */}
          <PopupState variant="popover" popupId="productos-menu">
            {(popupState) => (
              <>
                <Button
                  variant="text"
                  {...bindTrigger(popupState)}
                  style={{
                    color: "white",
                    textTransform: "none",
                    fontFamily: "Cardo",
                    border: "none",
                    fontSize: "20px",
                  }}
                >
                  <a href="#contacto">Productos</a>
                </Button>
                <Menu
                  {...bindMenu(popupState)}
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "#000",
                      width: "209px",
                      height: "220px",
                      color: "#fff",
                      boxShadow: "0px 10px 40px #E7CF9E",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "10px",
                    },
                  }}
                >
                  <MenuItem
                    onClick={popupState.close}
                    sx={{
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "20px",
                      fontFamily: "Cardo",
                    }}
                  >
                    - Broches
                  </MenuItem>
                  <MenuItem
                    onClick={popupState.close}
                    sx={{
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "20px",
                      fontFamily: "Cardo",
                    }}
                  >
                    - Collares
                  </MenuItem>
                  <MenuItem
                    onClick={popupState.close}
                    sx={{
                      justifyContent: "center",
                      textAlign: "center",
                      fontSize: "20px",
                      fontFamily: "Cardo",
                    }}
                  >
                    - Ofertas
                  </MenuItem>
                </Menu>
              </>
            )}
          </PopupState>

          <a href="#contacto">Contacto</a>
        </div>

        <div className="menu-icon"></div>
      </div>
    </nav>
  );
};

export default Navbar;
