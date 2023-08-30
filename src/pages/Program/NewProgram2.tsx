import {
  Typography,
  Container,
  Paper,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { Copyright } from "../../components/Copyright";

export default function NewProgram2() {
  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <Paper
          variant="outlined"
          sx={{ my: { xs: 2, md: 2 }, p: { xs: 2, md: 3 } }}
        >
          <Typography
            component="h1"
            variant="h4"
            align="center"
            marginBottom={"30px"}
          >
            {/* //! Ямар хөтөрбөрлүү орсон тэр text ийг харуулах function бичих */}
            Хөтөлбөрийн нэр, дугаар
          </Typography>
          <Grid container>
            <Stack direction={"row"}>
              <SampleData2A />
              <SampleData2A />
              <SampleData2A />
            </Stack>
          </Grid>
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}

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

export function SampleData2A() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const data = new FormData(event.currentTarget);
    console.log({ WBC: data.get("WBC") });
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
                  style: { fontSize: 15 },
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
