import { Box, Drawer, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import Menu from "@mui/icons-material/Menu";

export default function MuiDrawer() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setisDrawerOpen(true)}
      >
        <Menu />
      </IconButton>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box p={2} width={"250px"} textAlign={"center"} role="presentation">
          <Typography variant="h6" color="initial" component="div">
            Slide panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
