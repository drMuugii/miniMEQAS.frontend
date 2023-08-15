import { Alert, Stack, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function MuiAlert() {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is Error Alert</Alert>
      <Alert severity="warning">This is Warning Alert</Alert>
      <Alert severity="info">This is Info Alert</Alert>
      <Alert severity="success">This is Success Alert</Alert>

      <Alert variant="outlined" severity="error">
        This is Error Alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is Warning Alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is Info Alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is Success Alert
      </Alert>

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
