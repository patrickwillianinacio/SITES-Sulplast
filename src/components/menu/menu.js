import * as React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Stack from "@mui/material/Stack";
import "./menu.css";

const GrupoMenu = () => {
  const buttonStyle = {
    color: "white",
    textTransform: "initial",
    marginTop: "9px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const [stateMenu, setstateMenu] = React.useState(null);
  const open = stateMenu;

  const handleMenuClick = (event) => {
    setstateMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setstateMenu(null);
  };

  return (
    <Stack>
      <Button
        aria-controls={open ? "MuiMenu-paper" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        onClick={handleMenuClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={buttonStyle}
        disableRipple={true}
      >
        Canais de comunicação
      </Button>
      <Menu
        className={"MuiMenu-paper"}
        elevation={0}
        anchorEl={stateMenu}
        keepMounted
        open={stateMenu}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleMenuClose}>Governança e compliance</MenuItem>
        <MenuItem onClick={handleMenuClose}>Canal de trnsparência</MenuItem>
        <MenuItem onClick={handleMenuClose}>Comunicações ambientais</MenuItem>
        <MenuItem onClick={handleMenuClose}>Conversas com o DPO</MenuItem>
        <MenuItem onClick={handleMenuClose}>Comercial</MenuItem>
        <MenuItem onClick={handleMenuClose}>Outros assuntos</MenuItem>
        <MenuItem onClick={handleMenuClose}>Trabalhe conosco</MenuItem>
      </Menu>
    </Stack>
  );
};

export default GrupoMenu;
