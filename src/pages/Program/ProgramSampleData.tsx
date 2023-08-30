import { Grid, TextField, Typography } from "@mui/material";
import React from "react";

const SampleA = [
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
    parameter: "HCT",
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

export function SampleDataA() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    console.log(data);
  };

  return (
    <React.Fragment>
      <Grid container spacing={1} component={"form"} onSubmit={handleSubmit}>
        {SampleA.map((el: any) => (
          <>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h5"
                textAlign={"end"}
                py={"5px"}
                key={el.parameter}
              >
                {el.parameter}
                {":"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id={el.id}
                name={el.parameter}
                label={""}
                variant="outlined"
                size="small"
                type="number"
                fullWidth
                inputProps={{
                  style: { fontSize: 20 },
                  sx: {
                    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":
                      {
                        display: "none",
                      },
                    "&[type=number]": {
                      MozAppearance: "textfield",
                    },
                  },
                }}
                key={el.id}
                placeholder={el.parameter}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h5"
                py={"5px"}
                key={el.unit}
                className={".hideArrow"}
              >
                {el.unit}
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </React.Fragment>
  );
}

const SampleB = [
  {
    id: 9,
    parameter: "WBC",
    unit: "x10*6/µ",
  },
  {
    id: 10,
    parameter: "RBC",
    unit: "x10*3/µ",
  },
  {
    id: 11,
    parameter: "HGB",
    unit: "g/dL",
  },
  {
    id: 12,
    parameter: "HCT",
    unit: "%",
  },
  {
    id: 13,
    parameter: "PLT",
    unit: "x10*3/µ",
  },
  {
    id: 14,
    parameter: "MCV",
    unit: "fL",
  },
  {
    id: 15,
    parameter: "MCH",
    unit: "pg",
  },
  {
    id: 16,
    parameter: "MCHC",
    unit: "g/dL",
  },
];

export function SampleDataB() {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {SampleB.map((el: any) => (
          <>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h5"
                textAlign={"end"}
                py={"5px"}
                key={el.parameter}
              >
                {el.parameter}
                {":"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                id={el.id}
                name={el.parameter}
                label={""}
                variant="outlined"
                size="small"
                type="number"
                fullWidth
                inputProps={{
                  style: { fontSize: 20 },
                  sx: {
                    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button":
                      {
                        display: "none",
                      },
                    "&[type=number]": {
                      MozAppearance: "textfield",
                    },
                  },
                }}
                key={el.id}
                placeholder={el.parameter}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h5"
                py={"5px"}
                key={el.unit}
                className={".hideArrow"}
              >
                {el.unit}
              </Typography>
            </Grid>
          </>
        ))}
      </Grid>
    </React.Fragment>
  );
}
