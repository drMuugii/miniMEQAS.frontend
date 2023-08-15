import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Badge,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import LigIn from "../pages/LogIn";

export default function HeaderUser() {
  const [anchorEL, setAnchorEL] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEL);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEL(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEL(null);
  };

  const navigate = useNavigate();

  //   ! LogIn хийж орж ирсэн хүний нэр, avatar холбох*/

  const name = "A";

  return (
    <Toolbar>
      <Button
        color="inherit"
        id="user-menu"
        onClick={handleClick}
        aria-controls={open ? "user-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<KeyboardArrowDown />}
      >
        <Avatar>{name}</Avatar>
      </Button>
      <Menu
        id="user-menu"
        anchorEl={anchorEL}
        open={open}
        MenuListProps={{ "aria-labelledby": "user-button" }}
        onClick={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={() => navigate("/Settings")}>Тохиргоо</MenuItem>
        <MenuItem onClick={() => navigate("/login")}>Гарах</MenuItem>
      </Menu>
    </Toolbar>
  );
}
