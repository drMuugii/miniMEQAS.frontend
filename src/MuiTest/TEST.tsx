import TextFeed from "../components/TextFeed";
import MuiButton from "./MuiButton";
import MuiSelect from "./MuiSelect";
import MuiRadioButton from "./MuiRadioButton";
import MuiChooseBox from "./MuiCheckBox";
import MuiSwitch from "./MuiSwitch";
import MuiRating from "./MuiRating";
import MuiTypography from "./MuiTypography";
import MuiAutoComplete from "./MuiAutoComplete";
import MuiCard from "./MuiCard";
import MuiAccordion from "./MuiAccordion";
import MuiImgList from "./MuiImgList";
import MuiNavbar_Layout from "./MuiNavbar_Layout";
import MuiLink from "./MuiLink";
import MuiBreadrumbs from "./MuiBreadcrumbs";
import MuiDrawer from "./MuiDrawer";
import MuiSpeedDial from "./MuiSpeedDial";
import MuiAvatar from "./MuiAvatar";
import MuiBadge from "./MuiBadge";
import MuiChip from "./MuiChip";
import MuiList from "./MuiList";
import MuiTooltip from "./MuiTooltip";
import MuiTable from "./MuiTable";
import MuiSnackbar from "./MuiSnackbar";
import MuiResponsivness from "./MuiResponsivness";

export function TEST() {
  return (
    <div>
      <MuiButton />
      <MuiTypography />
      <TextFeed />
      <MuiSelect />
      <MuiAutoComplete />
      <MuiSwitch />
      <MuiCard />
      <MuiAccordion />
      <MuiImgList />
      <MuiNavbar_Layout />
      <MuiLink />
      <MuiBreadrumbs />
      <MuiDrawer />
      <MuiSpeedDial />
      <MuiAvatar />
      <MuiBadge />
      <MuiList />
      <MuiChip />
      <MuiTooltip />
      <MuiTable />
      <MuiSnackbar />
      <MuiResponsivness />
    </div>
  );
}
export function Button() {
  return <MuiRadioButton />;
}
export function ChooseBox() {
  return <MuiChooseBox />;
}
export function Rating() {
  return <MuiRating />;
}
