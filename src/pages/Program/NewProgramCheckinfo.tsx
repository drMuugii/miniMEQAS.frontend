import {
  AppBar,
  Box,
  Stack,
  Toolbar,
  Typography,
  Container,
  Paper,
} from "@mui/material";
import React from "react";
import NewProgramParticipateInfo from "./NewProgramParticipateInfo";

export default function NewProgramCheckinfo() {
  return (
    <React.Fragment>
      <AppBar
        position="absolute"
        color="secondary"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            miniMEQAS
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h3" align="center" marginBottom={"50px"}>
            Үндсэн мэдээллээ шалгана уу
          </Typography>
          <NewProgramParticipateInfo />
        </Paper>
      </Container>
    </React.Fragment>
  );
}
