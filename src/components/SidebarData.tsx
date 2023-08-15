import { Help, Home, Settings } from "@mui/icons-material";
import Mail from "@mui/icons-material/Mail";
import EventIcon from "@mui/icons-material/Event";
import AssignmentIcon from "@mui/icons-material/Assignment";

export const SidebarData = [
  {
    title: "Эхлэл",
    icon: <Home fontSize="large" color="secondary" />,
    path: "Home",
  },
  {
    title: "Хөтөлбөр",
    icon: <AssignmentIcon fontSize="large" color="secondary" />,
    path: "/Program",
  },
  {
    title: "Хуанли",
    icon: <EventIcon fontSize="large" color="secondary" />,
    path: "/Calendar",
  },
  {
    title: "Зурвас",
    icon: <Mail fontSize="large" color="secondary" />,
    path: "/Message",
  },
  {
    title: "Тохиргоо",
    icon: <Settings fontSize="large" color="secondary" />,
    path: "/Settings",
  },
  {
    title: "Тусламж",
    icon: <Help fontSize="large" color="secondary" />,
    path: "/SideMenu",
  },
];
