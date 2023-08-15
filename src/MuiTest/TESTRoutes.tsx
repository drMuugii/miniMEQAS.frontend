import { BrowserRouter, Routes, Route } from "react-router-dom";
import MuiButton from "./MuiButton";
import MuiTypography from "./MuiTypography";
import TextFeed from "../components/TextFeed";
import MuiImgList from "./MuiImgList";
import MuiAccordion from "./MuiAccordion";
import MuiAutoComplete from "./MuiAutoComplete";
import MuiSelect from "./MuiSelect";
import MuiCard from "./MuiCard";
import MuiRadioButton from "./MuiRadioButton";
import MuiChooseBox from "./MuiCheckBox";
import MuiRating from "./MuiRating";
import MuiNavbar_Layout from "./MuiNavbar_Layout";
import MuiLink from "./MuiLink";
import MuiBreadrumbs from "./MuiBreadcrumbs";
import MuiDrawer from "./MuiDrawer";
import MuiSpeedDial from "./MuiSpeedDial";
import MuiBottomnNav from "./MuiBottomNav";
import MuiAvatar from "./MuiAvatar";
import MuiBadge from "./MuiBadge";
import MuiList from "./MuiList";
import MuiTooltip from "./MuiTooltip";
import MuiTable from "./MuiTable";
import MuiAlert from "./MuiAlert";
import MuiSnackbar from "./MuiSnackbar";
import MuiResponsivness from "./MuiResponsivness";
import { MuiCustomizingTheme } from "./MuiCustomizingTheme";

export default function TESTRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MuiCustomizingTheme />}>
          <Route path="Layout" element={<MuiNavbar_Layout />} />
          <Route path="Button" element={<MuiButton />} />
          <Route path="MuiTypography" element={<MuiTypography />} />
          <Route path="textFeed" element={<TextFeed />} />
          <Route path="MuiSelect" element={<MuiSelect />} />
          <Route path="MuiRadioButton" element={<MuiRadioButton />} />
          <Route path="MuiChooseBox" element={<MuiChooseBox />} />
          <Route path="MuiRating" element={<MuiRating />} />
          <Route path="MuiAutoComplete" element={<MuiAutoComplete />} />
          <Route path="MuiCard" element={<MuiCard />} />
          <Route path="MuiAccordion" element={<MuiAccordion />} />
          <Route path="MuiImgList" element={<MuiImgList />} />
          <Route path="MuiLink" element={<MuiLink />} />
          <Route path="MuiBreadrumbs" element={<MuiBreadrumbs />} />
          <Route path="MuiBreadrumbs" element={<MuiDrawer />} />
          <Route path="MuiSpeedDial" element={<MuiSpeedDial />} />
          <Route path="MuiBottomnNav" element={<MuiBottomnNav />} />
          <Route path="MuiBottomnNav" element={<MuiAvatar />} />
          <Route path="MuiBottomnNav" element={<MuiBadge />} />
          <Route path="MuiBottomnNav" element={<MuiList />} />
          <Route path="MuiBottomnNav" element={<MuiTooltip />} />
          <Route path="MuiBottomnNav" element={<MuiTable />} />
          <Route path="MuiBottomnNav" element={<MuiAlert />} />
          <Route path="MuiBottomnNav" element={<MuiSnackbar />} />
          <Route path="MuiBottomnNav" element={<MuiResponsivness />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
