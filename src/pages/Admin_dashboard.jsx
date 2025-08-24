import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/AdminDashboard.css";
import Logo from "../assets/images/lls_logo.png";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Admin");
  const [role, setRole] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  // Check user role
  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    const storedUsername = localStorage.getItem("username") || "admin";
    if (storedRole !== "admin") {
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

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
            <img
              src={Logo}
              alt="Logo"
              className="header-logo"
            />
            <div>
              <h1 className="header-title">Admin Dashboard</h1>
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
            <button className="menu-btn active">Home</button>
            <button className="menu-btn mobile-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </aside>

        {/* Content */}
        <main className="dashboard-content">
          <div className="welcome-container">
            <div className="welcome-header">
              <h1>
                Welcome, <span className="highlight">{username}</span>!
              </h1>
              <p className="designation">Glad to see you here.</p>
            </div>
            <div className="time-display">
              <span className="date">
                {dateTime.toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="time">
                {dateTime.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
