import { Routes, Route } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import LogIn from "./pages/LogIn";
import Layout from "./components/Layout";
import Program from "./components/Program";
import Calendar from "./components/Calendar";
import Message from "./components/Message";
import Settings from "./components/Settings";
import Help from "./components/Help";
import HeaderOOOLD from "./components/HeaderOOOLD";
import HeaderBadge from "./components/HeaderBadge";
import MuiTooltip from "./MuiTest/MuiTooltip";

//! Layout ийн зохион байгуулалт хийх. path/ үед бүх хуудсыг харуулдаг болгох

export default function App() {
  return (
    <Routes>
      <Route index element={<LogIn />} />
      <Route path="login" element={<LogIn />} />
      <Route path="Home" element={<Layout />} />
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="Program" element={<Program />} />
      <Route path="Calendar" element={<Calendar />} />
      <Route path="Message" element={<Message />} />
      <Route path="Settings" element={<Settings />} />
      <Route path="Help" element={<Help />} />
      <Route path="MuiTooltip" element={<MuiTooltip />} />
    </Routes>
  );
}
