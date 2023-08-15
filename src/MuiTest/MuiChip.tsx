import { Face } from "@mui/icons-material";
import { Chip, Stack, Avatar } from "@mui/material";

import { useState } from "react";

export default function MuiChip() {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack spacing={1} direction={"row"}>
      <Chip label="Chip" color="success" size="small" icon={<Face />} />
      <Chip
        label="Chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
      />
      <Chip
        label="Chip"
        color="success"
        size="small"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip
        label="Chip Click"
        color="primary"
        onClick={() => alert("clicked")}
      />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("clicked")}
        onDelete={() => alert("Delete handler called")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
}
