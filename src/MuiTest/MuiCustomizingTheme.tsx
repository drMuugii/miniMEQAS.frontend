import {
  createTheme,
  colors,
  ThemeProvider,
  Box,
  Typography,
} from "@mui/material";

const newTheme = createTheme({
  palette: {
    primary: {
      main: colors.teal[500],
    },
    secondary: {
      main: colors.blueGrey[500],
    },
  },
});
export function MuiCustomizingTheme() {
  return (
    <div>
      <ThemeProvider theme={newTheme}>
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
            bgcolor: "primary.dark",
          }}
        >
          <Typography variant="h6">Hi</Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}
