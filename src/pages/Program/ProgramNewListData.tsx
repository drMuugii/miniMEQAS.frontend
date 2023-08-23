import { Alert, IconButton } from "@mui/material";
import FastForwardIcon from "@mui/icons-material/FastForward";

export const ProgramNewListData = [
  {
    id: 1,
    number: 1,
    startDate: "2021.07.13",
    endDate: "2021.07.20",
    EQAcategory: "ГЕМАТОЛОГИ",
    EQAname:
      "miniMEQAS Гематологийн чанарын гадаад үнэлгээний 1-дэх удаагийн  хөтөлбөр",
    status: "Нээлттэй",
    participate: (
      <IconButton onClick={() => alert("NewProgramCheckinfo")}>
        <FastForwardIcon />
      </IconButton>
    ),
  },
  {
    id: 2,
    number: 2,
    startDate: "2021.12.10",
    endDate: "2021.12.17",
    EQAcategory: "ГЕМАТОЛОГИ",
    EQAname:
      "miniMEQAS Гематологийн чанарын гадаад үнэлгээний 2-дах удаагийн  хөтөлбөр",
    status: "Хариу илгээсэн",
    participate: (
      <IconButton onClick={() => alert("NewProgramCheckinfo")}>
        <FastForwardIcon />
      </IconButton>
    ),
  },
  {
    id: 3,
    number: 3,
    startDate: "2023.11.10",
    endDate: "2023.11.17",
    EQAcategory: "ГЕМАТОЛОГИ",
    EQAname:
      "miniMEQAS Гематологийн чанарын гадаад үнэлгээний 3-дах удаагийн  хөтөлбөр",
    status: "Нээлттэй",
    participate: (
      <IconButton onClick={() => alert("NewProgramCheckinfo")}>
        <FastForwardIcon />
      </IconButton>
    ),
  },
];
