import { IconButton } from "@mui/material";
import FastForwardIcon from "@mui/icons-material/FastForward";
import { useNavigate } from "react-router-dom";

export function GoButton() {
  const navigte = useNavigate();
  return (
    <IconButton onClick={() => navigte("/NewProgramCheckinfo")}>
      <FastForwardIcon />
    </IconButton>
  );
}

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
    participate: <GoButton />,
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
    participate: <GoButton />,
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
    participate: <GoButton />,
  },
];
