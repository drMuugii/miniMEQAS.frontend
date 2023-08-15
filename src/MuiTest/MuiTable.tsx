import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { table } from "console";

export default function MuiTable() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {tableData1.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const tableData1 = [
  {
    id: 1,
    first_name: "Allyson",
    last_name: "Fruchon",
    email: "afruchon0@cargocollective.com",
    gender: "Genderfluid",
    ip_address: "139.2.182.134",
  },
  {
    id: 2,
    first_name: "Garvin",
    last_name: "MacPharlain",
    email: "gmacpharlain1@newyorker.com",
    gender: "Male",
    ip_address: "183.233.45.124",
  },
  {
    id: 3,
    first_name: "John",
    last_name: "Leare",
    email: "jleare2@intel.com",
    gender: "Male",
    ip_address: "130.189.240.245",
  },
  {
    id: 4,
    first_name: "Katlin",
    last_name: "Limbrick",
    email: "klimbrick3@intel.com",
    gender: "Female",
    ip_address: "14.146.31.212",
  },
  {
    id: 5,
    first_name: "Estrella",
    last_name: "Nuton",
    email: "enuton4@wikia.com",
    gender: "Female",
    ip_address: "65.202.225.194",
  },
  {
    id: 6,
    first_name: "Maressa",
    last_name: "Derell",
    email: "mderell5@posterous.com",
    gender: "Female",
    ip_address: "253.82.123.126",
  },
  {
    id: 7,
    first_name: "Ophelia",
    last_name: "Domenico",
    email: "odomenico6@nsw.gov.au",
    gender: "Agender",
    ip_address: "223.235.76.97",
  },
  {
    id: 8,
    first_name: "Algernon",
    last_name: "Peto",
    email: "apeto7@arstechnica.com",
    gender: "Male",
    ip_address: "23.111.218.102",
  },
  {
    id: 9,
    first_name: "Beale",
    last_name: "Lademann",
    email: "blademann8@storify.com",
    gender: "Male",
    ip_address: "239.244.54.173",
  },
  {
    id: 10,
    first_name: "Sonny",
    last_name: "Kemshell",
    email: "skemshell9@canalblog.com",
    gender: "Male",
    ip_address: "113.144.54.60",
  },
];
