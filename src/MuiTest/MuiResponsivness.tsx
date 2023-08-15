import { Box } from "@mui/material";

export default function MuiResponsivness() {
  return (
    <Box
      sx={{
        height: "300px",
        width: {
          xs: 100, // дэлгэц 0 px их үед width нь 100px
          sm: 200, // дэлгэц 600 px их үед width нь 200px
          md: 300, // дэлгэц 900 px их үед width нь 300px
          lg: 400, // дэлгэц 1200 px их үед width нь 400px
          xl: 500, // дэлгэц 1536 px их үед width нь 500px
        },
        bgcolor: "primary.main",
      }}
    ></Box>
  );
}
