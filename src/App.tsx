import { Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/LogIn";
import LayoutNew from "./pages/Layout/LayoutNew";
import Help from "./pages/Help";
import Message from "./pages/Message";
import Calendar from "./pages/Calendar";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import ProgramHistoryList from "./pages/Program/ProgramHistoryList";
import ProgramChoose from "./pages/Program/ProgramChoose";
import ProgramNewList from "./pages/Program/ProgramNewList";
import DownloadSuccess from "./components/ProgramAlert";
import ProgramCertificate from "./pages/Program/ProgramCertificate";
import AddressForm from "./components/Checkout.tsx/AddressForm";
import Checkout from "./components/Checkout.tsx/Checkout";
import NewProgram from "./pages/Program/NewProgram";
import NewProgramCheckinfo from "./pages/Program/NewProgramCheckinfo";
import NewProgramSampleA from "./pages/Program/NewProgramSampleA";
import MuiAutoComplete from "./MuiTest/MuiAutoComplete";
import ComposedTextField from "./pages/Program/Teest";

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
      </Route>
      <Route path="Checkout" element={<Checkout />} />

      <Route path="NewProgramCheckinfo" element={<NewProgramCheckinfo />} />
      <Route path="NewProgramSampleA" element={<NewProgramSampleA />} />
      <Route path="MuiAutoComplete" element={<MuiAutoComplete />} />
      <Route path="ComposedTextField" element={<ComposedTextField />} />
    </Routes>
  );
}
