import { Typography, Container, Paper } from "@mui/material";
import React from "react";
import NewProgramParticipateInfo from "./NewProgramParticipateInfo";
import { Copyright } from "../../components/Copyright";

export default function NewProgramCheckinfo() {
  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 2, md: 2 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h4" align="center" marginBottom={"20px"}>
            Үндсэн мэдээллээ шалгана уу
          </Typography>
          <NewProgramParticipateInfo />
          <Copyright />
        </Paper>
      </Container>
    </React.Fragment>
  );
}
