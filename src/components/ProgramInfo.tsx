import {
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProgramInfo() {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        padding: "32px",
        margin: "100px",
      }}
      elevation={20}
    >
      <Grid container my={4} rowSpacing={20} columnSpacing={1}>
        <Grid item xs={6}>
          <Box
            bgcolor={"success.light"}
            p={2}
            sx={{ width: "200px", height: "100px" }}
          >
            <Button onClick={() => navigate("/Program")}>Хөтөлбөр түүх</Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            bgcolor={"primary.light"}
            p={2}
            sx={{ width: "200px", height: "100px" }}
          >
            <Button>Хөтөлбөр оролцох</Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
