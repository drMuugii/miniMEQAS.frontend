import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import LogIn from "./pages/LogIn";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LogIn />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}
