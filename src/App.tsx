import { Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/Login/LogIn";
import LayoutNew from "./pages/Layout/LayoutNew";
import Help from "./pages/Help/Help";
import Message from "./pages/Message/Message";
import Calendar from "./pages/Calendar/Calendar";
import Settings from "./pages/Settings/Settings";
import Home from "./pages/Home/Home";
import ProgramHistoryList from "./pages/Program/ProgramHistoryList";
import ProgramChoose from "./pages/Program/ProgramChoose";
import ProgramNewList from "./pages/Program/ProgramNewList";
import DownloadSuccess from "./components/ProgramAlert";
import ProgramCertificate from "./pages/Program/ProgramCertificate";
import NewProgram from "./pages/Program/NewProgram";
import NewProgramCheckinfo from "./pages/Program/NewProgramCheckinfo";
import MuiAlert from "./MuiTest/MuiAlert";
import NewProgram2 from "./pages/Program/NewProgram2";

//! Layout ийн зохион байгуулалт хийх. path/ үед бүх хуудсыг харуулдаг болгох

export default function App() {
  return (
    <Routes>
      <Route path="login" element={<LogIn />} />
      <Route path="/" element={<LayoutNew />}>
        <Route path="Home" element={<Home />} />
        <Route path="ProgramChoose" element={<ProgramChoose />} />
        <Route path="ProgramHistoryList" element={<ProgramHistoryList />} />
        <Route path="ProgramNewList" element={<ProgramNewList />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="Message" element={<Message />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="Help" element={<Help />} />
        <Route path="DownloadSuccess" element={<DownloadSuccess />} />
        <Route path="ProgramCertificate" element={<ProgramCertificate />} />
        <Route path="NewProgram" element={<NewProgram />} />
        <Route path="NewProgramCheckinfo" element={<NewProgramCheckinfo />} />
      </Route>
      <Route path="MuiAlert" element={<MuiAlert />} />
      <Route path="NewProgram2" element={<NewProgram2 />} />
    </Routes>
  );
}
