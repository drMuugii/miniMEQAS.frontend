import { Stack, Badge, Button, Tooltip } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

export default function HeaderBadge() {
  return (
    <Stack direction={"row"} spacing={6} alignItems={"center"}>
      <Button color="inherit" aria-label="MuiTypography">
        <Badge badgeContent={1} color="error" showZero>
          <EmailIcon color="action" fontSize="large" />
        </Badge>
      </Button>

      <Button color="inherit">
        <Badge badgeContent={5} color="error" showZero>
          <CircleNotificationsIcon color="action" fontSize="large" />
        </Badge>
      </Button>
    </Stack>
  );
}
