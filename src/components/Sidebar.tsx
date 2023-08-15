import {
  Box,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import Logo from "../assets/Logo.jpg";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <Box>
      <Drawer variant="permanent" anchor="left">
        <Box
          p={2}
          height={"100px"}
          width={"250px"}
          textAlign={"center"}
          role="banner"
        >
          <img src={Logo} width={"250px"} height={"120px"} />
        </Box>
        <Divider />
        <List>
          {SidebarData.map((el: any, index) => (
            <ListItem key={el.title} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(el.path);
                }}
              >
                <ListItemIcon>{el.icon}</ListItemIcon>
                <ListItemText primary={el.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
