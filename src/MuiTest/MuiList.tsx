import { Mail } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";

export default function MuiList() {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <Mail />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText primary="List item 1" secondary="secondary text" />
          </ListItemButton>
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 2" secondary="secondary text" />
        </ListItem>
        <Divider />

        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Mail />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 3" secondary="secondary text" />
        </ListItem>
      </List>
    </Box>
  );
}
