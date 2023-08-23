import {
  Box,
  Typography,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import { useState } from "react";
import NewProgramSampleA from "./NewProgramSampleA";
import NewProgramSampleB from "./NewProgramSampleB";
import React from "react";
import NewPorgramConfirmation from "./NewPorgramConfirmation";
import NewProgramSend from "./NewProgramSend";
import { Copyright } from "../../components/Copyright";

const steps = [
  "Сорьц А-1",
  "Сорьц А-2",
  "Сорьц А-3",
  "Сорьц Б-1 ",
  "Сорьц Б-2 ",
  "Сорьц Б-3 ",
  "Баталгаажуулах",
  "Хариу илгээх",
];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <NewProgramSampleA />;
    case 1:
      return <NewProgramSampleA />;
    case 2:
      return <NewProgramSampleA />;
    case 3:
      return <NewProgramSampleB />;
    case 4:
      return <NewProgramSampleB />;
    case 5:
      return <NewProgramSampleB />;
    case 6:
      return <NewPorgramConfirmation />;
    case 7:
      return <NewProgramSend />;
    default:
      throw new Error("Unknown step");
  }
}

export default function NewProgram() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <Paper
          variant="outlined"
          sx={{ my: { xs: 2, md: 2 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            {/* //! Ямар хөтөрбөрлүү орсон тэр text ийг харуулах function бичих */}
            Хөтөлбөрийн нэр, дугаар
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 3 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Хариу амжилттай илгээгдлээ
              </Typography>
              <Typography variant="subtitle1">
                Илгээсэн хариугаа засварлах бол ЗАСВАРЛАХ товч дарна уу!
              </Typography>
              <Button>ЗАСВАРЛАХ (буцаадаг functin болгох)</Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button
                    variant="outlined"
                    color="warning"
                    onClick={handleBack}
                    sx={{ mt: 1, ml: 1 }}
                  >
                    Буцах
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleNext}
                  sx={{ mt: 1, ml: 2 }}
                >
                  {activeStep === steps.length - 1
                    ? "Place order"
                    : "Үргэлжлүүлэх"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}
