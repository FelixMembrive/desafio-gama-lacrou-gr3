import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";
import EmailPageActive from "./pages/EmailPageActive";
import EmailPageInactive from "./pages/EmailPageInactive";


export default function RoutesComponent() {
  return (
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="emailPageActive" element={<EmailPageActive/>} />
        <Route path="emailPageInactive" element={<EmailPageInactive/>} />
      </Routes>
  );
}