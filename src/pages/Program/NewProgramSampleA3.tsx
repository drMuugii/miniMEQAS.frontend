import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import "./TextfieldStyle.css";

export default function NewProgramSampleA3() {
  return (
    <React.Fragment>
      <Grid xs={12} direction={"row"}>
        <Typography
          textAlign={"center"}
          color={"secondary"}
          variant="h4"
          paddingBottom={"20px"}
        >
          СОРЬЦ A - 3 давталт
        </Typography>
      </Grid>

      <Stack
        justifyContent={"center"}
        direction={"row"}
        paddingBottom={2}
        spacing={1}
      >
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

      <Stack
        justifyContent={"center"}
        direction={"row"}
        paddingBottom={2}
        spacing={1}
      >
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

      <Stack
        justifyContent={"center"}
        direction={"row"}
        paddingBottom={2}
        spacing={1}
      >
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

      <Stack
        justifyContent={"center"}
        direction={"row"}
        paddingBottom={2}
        spacing={1}
      >
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

      <Stack
        justifyContent={"center"}
        direction={"row"}
        paddingBottom={2}
        spacing={1}
      >
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

      <Stack
        justifyContent={"center"}
        direction={"row"}
        paddingBottom={2}
        spacing={1}
      >
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

      <Stack
        justifyContent={"center"}
        direction={"row"}
        paddingBottom={2}
        spacing={1}
      >
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

      <Stack
        justifyContent={"center"}
        direction={"row"}
        paddingBottom={2}
        spacing={1}
      >
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
    </React.Fragment>
  );
}
