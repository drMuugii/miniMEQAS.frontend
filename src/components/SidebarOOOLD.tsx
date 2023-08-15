import {
  Box,
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@mui/material";

import { Home, Mail } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Sidebar2() {
  const navigate = useNavigate();
  return (
    <>
      <Drawer variant="permanent" anchor="left">
        <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
          <Typography variant="h6" color="initial" component="div">
            Slide panel
          </Typography>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/home")}>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Home />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/program")}>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Home />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Program" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/calendar")}>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Home />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Calendar" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/message")}>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Home />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Message" />
            </ListItemButton>
          </ListItem>
          <Divider />

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/settings")}>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Home />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Home />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </>
  );
}
