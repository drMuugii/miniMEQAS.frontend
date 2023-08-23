import { Box, Button, Container, Grid, Paper, Toolbar } from "@mui/material";
import ProgramNewTable from "./ProgramNewTable";
import { useNavigate } from "react-router";

export default function ProgramNewList() {
  const navigate = useNavigate();
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <ProgramNewTable />

              <Button
                variant="contained"
                onClick={() => navigate("/NewProgramCheckinfo")}
              >
                NewProgramCheckinfo
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
