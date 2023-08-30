import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { ProgramNewListData } from "./ProgramNewListData";

//! Search, filter хийх.

export default function ProgramNewTable() {
  return (
    <TableContainer>
      <Table size="small" aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Эхлэх огноо</TableCell>
            <TableCell>Дуусах огноо</TableCell>
            <TableCell>Төрөл</TableCell>
            <TableCell align="center">Нэр</TableCell>
            <TableCell>Төлөв</TableCell>
            <TableCell align="center">Оролцох</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ProgramNewListData.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>{row.EQAcategory}</TableCell>
              <TableCell align="center">{row.EQAname}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell align="center">{row.participate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
