import { Grid, Typography } from "@mui/material";
import React from "react";
import { SampleDataA } from "./ProgramSampleData";

export default function NewProgramSampleA() {
  return (
    <React.Fragment>
      <Grid xs={12} direction={"row"}>
        <Typography
          textAlign={"center"}
          color={"secondary"}
          variant="h4"
          paddingBottom={"20px"}
        >
          СОРЬЦ A - 1
        </Typography>
      </Grid>
      <SampleDataA />
    </React.Fragment>
  );
}
