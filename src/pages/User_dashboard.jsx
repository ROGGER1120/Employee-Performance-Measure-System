import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/UserDashboard.css";
import Logo from "../assets/images/lls_logo.png";
import EmployeeDetails from "./EmployeeDetails";
import LeaveRequests from "./LeaveRequests";
import Performance from "./Performance";
import HomeSection from "./HomeSection";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("User");
  const [role, setRole] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);

  // Check user role
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    const storedUsername = localStorage.getItem("username") || "User";
    if (storedRole !== "user") {
      navigate("/login", { replace: true });
    } else {
      setRole(storedRole);
      setUsername(storedUsername);
    }
  }, [navigate]);

  // Timer function
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 sec loading
    return () => clearTimeout(timer);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleLogout = () => {
    localStorage.removeItem("userRole");
    localStorage.removeItem("username");
    navigate("/login", { replace: true });
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <button className="mobile-menu-btn" onClick={toggleSidebar}>
              &#9776;
            </button>
            <img src={Logo} alt="Logo" className="header-logo" />
            <div>
              <h1 className="header-title">Employee Performance Measure System</h1>
              <span className="header-subtitle">{role.toUpperCase()}</span>
            </div>
          </div>
          <button className="logout-btn desktop-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      {/* Main Area */}
      <div className="dashboard-main">
        {/* Sidebar */}
        <aside
          className={`dashboard-sidebar ${sidebarOpen ? "mobile-menu-open" : ""}`}
        >
          <div className="sidebar-menu">
            <button
              className={`menu-btn ${activeSection === "home" ? "active" : ""}`}
              onClick={() => setActiveSection("home")}
            >
              Home
            </button>
            <button
              className={`menu-btn ${
                activeSection === "employee" ? "active" : ""
              }`}
              onClick={() => setActiveSection("employee")}
            >
              Employee Details
            </button>
            <button
              className={`menu-btn ${
                activeSection === "leave" ? "active" : ""
              }`}
              onClick={() => setActiveSection("leave")}
            >
              Leave Requests
            </button>
            <button
              className={`menu-btn ${
                activeSection === "performance" ? "active" : ""
              }`}
              onClick={() => setActiveSection("performance")}
            >
              Performance
            </button>
            <button className="menu-btn mobile-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </aside>

        {/* Content */}
        <main className="dashboard-content">
          {loading ? (
            <div className="loading-screen">
              <h2>👋 Hello {username}!</h2>
              <p>Loading your dashboard...</p>
              <div className="spinner"></div>
            </div>
          ) : (
            <>
              {activeSection === "home" && (
                <HomeSection username={username} dateTime={dateTime} />
              )}
              {activeSection === "employee" && <EmployeeDetails />}
              {activeSection === "leave" && <LeaveRequests />}
              {activeSection === "performance" && <Performance />}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
