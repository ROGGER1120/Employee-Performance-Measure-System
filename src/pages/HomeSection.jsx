import React from "react";
import "../assets/styles/HomeSection.css";

const HomeSection = ({ username, dateTime }) => {
  return (
    <div className="home-wrapper">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-header">
          <h1>
            Welcome, <span className="highlight">{username}</span>!
          </h1>
          <p className="designation">Glad to see you here.</p>
        </div>

        {/* Date & Time */}
        <div className="time-display">
          <span className="date">
            {dateTime.toLocaleDateString(undefined, {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="time">{dateTime.toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Employee Highlights Section */}
      <div className="employee-section">
        <h2>Employee Highlights</h2>
        <div className="employee-card">
          <h3>Employee of the Month</h3>
          <p>John Doe</p>
        </div>
        <div className="employee-card">
          <h3>Previous Month</h3>
          <p>Jane Smith</p>
        </div>
        <div className="employee-card">
          <h3>Best Employee of the Year</h3>
          <p>Michael Adams</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
