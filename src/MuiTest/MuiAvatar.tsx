import { Avatar, Stack, AvatarGroup } from "@mui/material";

export default function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        <Avatar sx={{ bgcolor: "primary.light" }}>USA</Avatar>
        <Avatar sx={{ bgcolor: "error.light" }}>UK</Avatar>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>USA</Avatar>
          <Avatar sx={{ bgcolor: "error.light" }}>UK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jande Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="John Doe"
          />
        </AvatarGroup>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: "60", height: "60" }}
        >
          USA
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "error.light", width: "60", height: "60" }}
        >
          UK
        </Avatar>
      </Stack>
    </Stack>
  );
}
