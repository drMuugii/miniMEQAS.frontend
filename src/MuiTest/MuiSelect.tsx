import { Box, TextField, MenuItem, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function MuiSelect() {
  const [city, setCity] = useState("");
  console.log(city);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value as string);
  }

  return (
    <div>
      <Box width={400}>
        <Typography variant="h6" component="h1">
          <h3>1 choice</h3>
        </Typography>
        <TextField
          label="Select city"
          select
          value={city}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="LS">Los Angles</MenuItem>
          <MenuItem value="DN">Denver</MenuItem>
          <MenuItem value="CN">Chicago</MenuItem>
          <MenuItem value="SE">Seatle</MenuItem>
        </TextField>
      </Box>
      <Box>
        <MultipleChoice />
      </Box>
    </div>
  );
}

export function MultipleChoice() {
  const [cities, setCities] = useState<string[]>([]);
  console.log({ cities });
  function handleChangeCities(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setCities(typeof value === "string" ? value.split(",") : value);
  }

  return (
    <Box width={400}>
      <Typography variant="h6" component="h1">
        <h3>Multiple choice</h3>
      </Typography>
      <TextField
        label="Select cities"
        select
        value={cities}
        onChange={handleChangeCities}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Select cities to go"
      >
        <MenuItem value="LS">Los Angles</MenuItem>
        <MenuItem value="DN">Denver</MenuItem>
        <MenuItem value="CN">Chicago</MenuItem>
        <MenuItem value="SE">Seatle</MenuItem>
      </TextField>
    </Box>
  );
}
