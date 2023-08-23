import * as React from "react";
import { Button, IconButton, Typography, TextField, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
