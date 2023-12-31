import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
import "./../pages/AdminPages/TEST.css";
export default function MuiLayout() {
  return (
    <Paper
      sx={{
        padding: "32px",
      }}
      elevation={20}
    >
      <Stack
        sx={{
          border: "1px solid",
        }}
        direction="row-reverse"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": { backgroundColor: "primary.light" },
          }}
        >
          DrMuuguu
        </Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          // padding ийн  2 = 16 px
          p={2}
        >
          DrMuuguu
        </Box>
      </Stack>
      <Grid container my={4} rowSpacing={6} columnSpacing={1}>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor={"primary.light"} p={2}>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
