import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import { useState } from "react";
import AutoAwesomeMotion from "@mui/icons-material/AutoAwesomeMotion";
import { KeyboardArrowDown } from "@mui/icons-material";

export default function MuiNavbar_Layout() {
  const [anchorEL, setAnchorEL] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEL);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEL(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEL(null);
  };

  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar>
        <IconButton edge="start" color="secondary" aria-label="logo">
          <AutoAwesomeMotion fontSize="large" />
        </IconButton>
        <Typography
          variant="h6"
          component={"div"}
          sx={{ flexGrow: 1, fontWeight: "medium" }}
        >
          Mui Tutorial
        </Typography>
        <Stack direction={"row"} spacing={2}>
          <Button color="inherit" aria-label="MuiTypography">
            Button
          </Button>
          <Button color="inherit">Typography</Button>
          <Button color="inherit">TextField</Button>
          <Button color="inherit">Select</Button>
          {/* <Button color="inherit">RadioButton</Button>
          <Button color="inherit">Choose Box</Button>
          <Button color="inherit">Rating</Button>
          <Button color="inherit">Auto Complete</Button>
          <Button color="inherit">Card</Button>
          <Button color="inherit">Accordion</Button>
          <Button color="inherit">Img List</Button>
          <Button color="error">MUI API, props</Button> */}
          <Button
            color="inherit"
            id="home-menu"
            onClick={handleClick}
            aria-controls={open ? "home-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            HOME
          </Button>
        </Stack>
        <Menu
          id="home-menu"
          anchorEl={anchorEL}
          open={open}
          MenuListProps={{ "aria-labelledby": "home-button" }}
          onClick={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem onClick={handleClose}>Button</MenuItem>
          <MenuItem onClick={handleClose}>Typography</MenuItem>
          <MenuItem onClick={handleClose}>TextField</MenuItem>
          <MenuItem onClick={handleClose}>Select</MenuItem>
          <MenuItem onClick={handleClose}>RadioButton</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
