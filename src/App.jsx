import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import { useState , useEffect } from "react";
import AdminLogin from "./pages/Admin_login";
import UserLogin from "./pages/User_login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/user" element={<UserLogin />} />
    </Routes>
  );
} 

export default App;