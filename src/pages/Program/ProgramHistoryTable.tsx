import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { ProgramHistoryData } from "./ProgramHistoryData";

//! Search, filter хийх.

export default function ProgramHistoryTable() {
  return (
    <TableContainer
    // component={Paper}
    // sx={{
    //   width: "100%",
    //   maxHeight: "800px",
    // }}
    >
      <Table size="small" aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Эхлэх огноо</TableCell>
            <TableCell>Дуусах огноо</TableCell>
            <TableCell>Төрөл</TableCell>
            <TableCell align="center">Нэр</TableCell>
            <TableCell>Төлөв</TableCell>
            <TableCell align="center">Тайлан татаж авах</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ProgramHistoryData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>{row.EQAcategory}</TableCell>
              <TableCell align="center">{row.EQAname}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="center">{row.reportDownload}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
