import { Box, Container, Grid, Paper, Toolbar } from "@mui/material";
import ProgramHistoryTable from "./ProgramHistoryTable";

export default function ProgramHistoryList() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        // height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <ProgramHistoryTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
