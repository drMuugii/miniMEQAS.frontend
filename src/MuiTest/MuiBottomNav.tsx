import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Favorite, Home, Person } from "@mui/icons-material";
import { useState } from "react";

export default function MuiBottomnNav() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Home"
        icon={<Home />}
      ></BottomNavigationAction>

      <BottomNavigationAction
        label="Favourite"
        icon={<Favorite />}
      ></BottomNavigationAction>

      <BottomNavigationAction
        label="Profile"
        icon={<Person />}
      ></BottomNavigationAction>
    </BottomNavigation>
  );
}
