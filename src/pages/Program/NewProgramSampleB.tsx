import { Grid, Typography } from "@mui/material";
import React from "react";
import { SampleDataB } from "./ProgramSampleData";

export default function NewProgramSampleB() {
  return (
    <React.Fragment>
      <Grid xs={12} direction={"row"}>
        <Typography
          textAlign={"center"}
          color={"secondary"}
          variant="h4"
          paddingBottom={"20px"}
        >
          СОРЬЦ B - 1
        </Typography>
      </Grid>
      <SampleDataB />
    </React.Fragment>
  );
}
