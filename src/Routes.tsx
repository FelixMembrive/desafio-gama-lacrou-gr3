import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";


export default function RoutesComponent() {
  return (
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="register" element={<Register />} />
      </Routes>
  );
}