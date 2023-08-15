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
import EmailIcon from "@mui/icons-material/Email";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

export default function HeaderOOOLD() {
  const [anchorEL, setAnchorEL] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEL);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEL(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEL(null);
  };

  return (
    <AppBar position="absolute" enableColorOnDark sx={{ width: "85%" }}>
      <Toolbar>
        <Typography
          variant="h4"
          component={"div"}
          sx={{ flexGrow: 1, fontWeight: "medium" }}
        >
          miniMEQAS
        </Typography>

        <Stack direction={"row"} spacing={8}>
          <Button color="inherit" aria-label="MuiTypography">
            <Badge badgeContent={1} color="error" showZero>
              <EmailIcon color="action" fontSize="large" />
            </Badge>
          </Button>
          <Badge badgeContent={5} color="error" showZero overlap="circular">
            <Button color="inherit">
              <CircleNotificationsIcon color="action" fontSize="large" />
            </Button>
          </Badge>

          <Button
            color="inherit"
            id="home-menu"
            onClick={handleClick}
            aria-controls={open ? "home-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            <Avatar>User name</Avatar>
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
          <MenuItem onClick={handleClose}>Settings</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
