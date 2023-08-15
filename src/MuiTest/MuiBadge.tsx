import { Badge, Stack } from "@mui/material";
import "./TEST.css";
import { Mail } from "@mui/icons-material";

export default function MuiBadge() {
  return (
    <Stack spacing={2} direction={"row"}>
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="success" max={999}>
        <Mail />
      </Badge>

      <Badge variant="dot" color="primary" invisible={true}>
        <Mail />
      </Badge>
    </Stack>
  );
}
