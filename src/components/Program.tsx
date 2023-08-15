import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { tableData } from "./ProgramData";

export default function Program() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "80px",
        width: "100%",
        maxHeight: "800px",
      }}
    >
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Дугаар</TableCell>
            <TableCell>Эхлэх огноо</TableCell>
            <TableCell>Дуусах огноо</TableCell>
            <TableCell>Төрөл</TableCell>
            <TableCell align="center">Нэр</TableCell>
            <TableCell>Төлөв</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &last-child th": { border: 0 } }}
            >
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>{row.EQAcategory}</TableCell>
              <TableCell align="center">{row.EQAname}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
