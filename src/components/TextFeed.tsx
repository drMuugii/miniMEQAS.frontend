import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export default function TextFeed() {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField label="variant-outlined " variant="outlined" />
        <TextField label="variant-filled" variant="filled" />
        <TextField label="variant-standard" variant="standard" />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Size-small Color-secondary"
          size="small"
          color="secondary"
        />
        <TextField
          label="Size-medium Color-primary"
          size="medium"
          color="primary"
        />
        <TextField label="Size-large Color-error" size="small" color="error" />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        {/* нууц үг орууах input */}
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          type="password"
          helperText={!value ? "Reqired" : "do not share ut password"}
        />

        {/* disabled - нь тухайн тухайн field дээр утга нэмэх, засах боломжыг хаана*/}
        <TextField
          label="Password"
          type="password"
          helperText="нууц үг оруулах, character харагдахгүй"
        />
        <TextField
          label="Password"
          type="password"
          helperText="disabled prop ашиглав"
          disabled
        />

        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>

      {/* InputAdornment ийн жишээ */}
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="item"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}
