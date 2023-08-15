import { Stack, Link, Typography } from "@mui/material";

export default function MuiLink() {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Typography variant="h6">
        <Link href="#">Link</Link>
      </Typography>
      <Link href="#" color={"secondary"} underline="hover" variant="body2">
        underline:hover
      </Link>
      <Link href="#" color={"secondary"} underline="none">
        underline:none
      </Link>
    </Stack>
  );
}
