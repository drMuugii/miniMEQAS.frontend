import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import "./TextfieldStyle.css";

export default function NewProgramSampleA2() {
  return (
    <React.Fragment>
      <Grid xs={12} direction={"row"}>
        <Typography
          textAlign={"center"}
          color={"secondary"}
          variant="h4"
          paddingBottom={"20px"}
        >
          СОРЬЦ A - 2
        </Typography>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"} textAlign={"end"}>
            WBC:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="wbc1"
            name="wbc1"
            variant="outlined"
            size="small"
            inputProps={{ style: { fontSize: 25 } }}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"}>
            x10*6/µL
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"} textAlign={"end"}>
            RBC:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="wbc1"
            name="wbc1"
            variant="outlined"
            size="small"
            inputProps={{ style: { fontSize: 25 } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"}>
            x10*6/µL
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"} textAlign={"end"}>
            HGB:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="wbc1"
            name="wbc1"
            variant="outlined"
            size="small"
            inputProps={{ style: { fontSize: 25 } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"}>
            g/dL
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"} textAlign={"end"}>
            Hct:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="wbc1"
            name="wbc1"
            variant="outlined"
            size="small"
            inputProps={{ style: { fontSize: 25 } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"}>
            %
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"} textAlign={"end"}>
            PLT:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="wbc1"
            name="wbc1"
            variant="outlined"
            size="small"
            inputProps={{ style: { fontSize: 25 } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"}>
            x10*3/µL
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"} textAlign={"end"}>
            MCV:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="wbc1"
            name="wbc1"
            variant="outlined"
            size="small"
            inputProps={{ style: { fontSize: 25 } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"}>
            fL
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"} textAlign={"end"}>
            MCH:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="wbc1"
            name="wbc1"
            variant="outlined"
            size="small"
            inputProps={{ style: { fontSize: 25 } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"}>
            pg
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"} textAlign={"end"}>
            MCHC:
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            id="wbc1"
            name="wbc1"
            variant="outlined"
            size="small"
            inputProps={{ style: { fontSize: 25 } }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h4" p={"5px"}>
            g/dL
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
