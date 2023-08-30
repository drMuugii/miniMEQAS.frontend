import * as React from "react";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ParticipateData from "./ParticipateData";

export default function NewProgramParticipateInfo() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <ParticipateData />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Button
          size="large"
          fullWidth
          variant="contained"
          color="success"
          sx={{ marginTop: "20px" }}
          onClick={() => navigate("/NewProgram")}
        >
          үргэлжлүүлэх
        </Button>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Button
          size="large"
          fullWidth
          variant="contained"
          color="warning"
          sx={{ marginTop: "20px", marginBottom: "10px" }}
          onClick={() => navigate("/Home")}
        >
          засах
        </Button>
      </Grid>
    </React.Fragment>
  );
}
