import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";

import SendIcon from "@mui/icons-material/Send";

export default function AdminDashboard() {
  const [formats, setFormats] = useState<string | null>(null);

  console.log(formats);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.mn">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />} disableRipple>
          Send
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          disableElevation
          onClick={() => alert("Clicked")}
        >
          Send
        </Button>

        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction={"row"}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="medium"
          color="error"
          aria-label="aligment button group"
        >
          <Button onClick={() => alert("asda")}>Left</Button>
          <Button> Center</Button>
          <Button> Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        {/* exclusive -  энэ нь зөвхөг нэгсонголттой болгоно */}
        <ToggleButtonGroup
          aria-label="text formating"
          value={formats}
          onChange={handleFormatChange}
          exclusive
        ></ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}
