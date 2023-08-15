import { Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import IosShareIcon from "@mui/icons-material/IosShare";
import EditIcon from "@mui/icons-material/Edit";

export default function MuiSpeedDial() {
  return (
    <SpeedDial
      ariaLabel={"Navigatin speed dial"}
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction
        icon={<ContentCopyIcon />}
        tooltipTitle="Copy"
        tooltipOpen
      ></SpeedDialAction>
      <SpeedDialAction
        icon={<PrintIcon />}
        tooltipTitle="Print"
      ></SpeedDialAction>
      <SpeedDialAction
        icon={<IosShareIcon />}
        tooltipTitle="Share"
      ></SpeedDialAction>
    </SpeedDial>
  );
}
