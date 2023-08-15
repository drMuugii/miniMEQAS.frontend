import { Box, Container, Stack } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import SidebarLIST from "./SidebarLIST";

export default function Layout() {
  return (
    <Box>
      <Header />
      <Stack direction={"row"}>
        <SidebarLIST />
        <Outlet />
      </Stack>
    </Box>
  );
}
