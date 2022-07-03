import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";


export default function RoutesComponent() {
  return (
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
  );
}