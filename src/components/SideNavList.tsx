import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SideNavDataRoute } from "./SideNavDataRoute";

export default function SideNavList() {
  const navigate = useNavigate();
  return (
    <List>
      {SideNavDataRoute.map((el: any) => (
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
  );
}
