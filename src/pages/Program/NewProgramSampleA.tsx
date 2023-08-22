import { Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import "./TextfieldStyle.css";

export default function NewProgramSampleA() {
  return (
    <React.Fragment>
      <Grid container item spacing={1} justifyContent={"center"}>
        <Grid xs={12}>
          <Typography
            textAlign={"center"}
            color={"secondary"}
            variant="h4"
            paddingBottom={"20px"}
          >
            СОРЬЦ A - 1 давталт /нэг хэмжээнд оруулах, хариу оруулсны дараа
            filled болгох/
          </Typography>
        </Grid>

        <Grid xs={12} sm={8}>
          <Stack direction={"row"}>
            <Typography variant="h4" p={"5px"}>
              WBC:
            </Typography>

            <TextField
              id="wbc1"
              name="wbc1"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 25 } }}
              // font size of input text
            />
            <Typography variant="h4" p={"5px"}>
              x10*3/µL
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Stack direction={"row"}>
            <Typography variant="h4" p={"5px"}>
              RBC:
            </Typography>
            <TextField
              id="wbc1"
              name="wbc1"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 25 } }}
              // font size of input text
            />
            <Typography variant="h4" p={"5px"}>
              x10*6/µL
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Stack direction={"row"}>
            <Typography variant="h4" p={"5px"}>
              HGB:
            </Typography>
            <TextField
              id="wbc1"
              name="wbc1"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 25 } }}
              // font size of input text
            />
            <Typography variant="h4" p={"5px"}>
              g/dL
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Stack direction={"row"}>
            <Typography variant="h4" p={"5px"}>
              Hct:
            </Typography>
            <TextField
              id="wbc1"
              name="wbc1"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 25 } }}
              // font size of input text
            />
            <Typography variant="h4" p={"5px"}>
              %
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Stack direction={"row"}>
            <Typography variant="h4" p={"5px"}>
              PLT:
            </Typography>
            <TextField
              id="wbc1"
              name="wbc1"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 25 } }}
              // font size of input text
            />
            <Typography variant="h4" p={"5px"}>
              x10*3/µL
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Stack direction={"row"}>
            <Typography variant="h4" p={"5px"}>
              MCV:
            </Typography>
            <TextField
              id="wbc1"
              name="wbc1"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 25 } }}
              // font size of input text
            />
            <Typography variant="h4" p={"5px"}>
              fL
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Stack direction={"row"}>
            <Typography variant="h4" p={"5px"}>
              MCH:
            </Typography>
            <TextField
              id="wbc1"
              name="wbc1"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 25 } }}
              // font size of input text
            />
            <Typography variant="h4" p={"5px"}>
              pg
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Stack direction={"row"}>
            <Typography variant="h4" p={"5px"}>
              MCHC:
            </Typography>
            <TextField
              id="wbc1"
              name="wbc1"
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 25 } }}
              // font size of input text
            />
            <Typography variant="h4" p={"5px"}>
              g/dL
            </Typography>
          </Stack>
        </Grid>

        <SampleA />
      </Grid>
    </React.Fragment>
  );
}

const SampleDataA = [
  {
    id: 1,
    parameter: "WBC",
    unit: "x10*6/µ",
  },
  {
    id: 2,
    parameter: "RBC",
    unit: "x10*3/µ",
  },
  {
    id: 3,
    parameter: "HGB",
    unit: "g/dL",
  },
  {
    id: 4,
    parameter: "HcT",
    unit: "%",
  },
  {
    id: 5,
    parameter: "PLT",
    unit: "x10*3/µ",
  },
  {
    id: 6,
    parameter: "MCV",
    unit: "fL",
  },
  {
    id: 7,
    parameter: "MCH",
    unit: "pg",
  },
  {
    id: 8,
    parameter: "MCHC",
    unit: "g/dL",
  },
];

export function SampleA() {
  return (
    <Grid xs={12}>
      <Stack
        justifyContent={"center"}
        direction={"column"}
        paddingBottom={2}
        spacing={1}
      >
        {SampleDataA.map((el: any) => (
          <>
            <Typography variant="h5" p={"5px"} key={el.parameter}>
              parameter
            </Typography>
            <TextField
              id={el.id}
              name={el.parameter}
              label={el.parameter}
              variant="outlined"
              size="small"
              inputProps={{ style: { fontSize: 25 } }}
              key={el.id}
            />
            <Typography variant="h5" p={"5px"} key={el.unit}>
              unit
            </Typography>
          </>
        ))}
      </Stack>
    </Grid>
  );
}
