import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";

export default function SidebarLIST() {
  const navigate = useNavigate();
  return (
    <Stack className="stack" direction="column">
      <Box sx={{ marginTop: "80px", width: "300px" }}>
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
      </Box>
    </Stack>
  );
}
