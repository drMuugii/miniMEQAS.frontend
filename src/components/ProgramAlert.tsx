import { Alert, Stack, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function DownloadSuccess() {
  return (
    <Stack spacing={2}>
      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close Alert")}
      >
        This is Error Alert
        <AlertTitle>Error</AlertTitle>
      </Alert>

      <Alert
        variant="filled"
        severity="warning"
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        This is Warning Alert
        <AlertTitle>Warning</AlertTitle>
      </Alert>
      <Alert variant="filled" severity="info">
        This is Info Alert
        <AlertTitle>Alert</AlertTitle>
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
      >
        This is Success Alert
        <AlertTitle>Success</AlertTitle>
      </Alert>
    </Stack>
  );
}
