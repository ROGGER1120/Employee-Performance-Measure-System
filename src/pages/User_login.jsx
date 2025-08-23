import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/User_login.css";

const User_login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Hardcoded Admin Credentials
  const USER_PASSWORD = "user@123";
  const USER_USERNAME = "user";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (username === USER_USERNAME && password === USER_PASSWORD) {
      localStorage.setItem('userRole', 'user'); 
      setError("");
      setIsLoading(false);
      navigate("/user-dashboard", { replace: true });
    } else {
      setError("Invalid username or password!");
      setIsLoading(false);
    }
  };

  return (
    <div className="user-login-container">
      <div className="user-login-card">
        <div className="user-login-header">
          <h2>User Portal</h2>
          <p>Enter your credentials to access the dashboard</p>
        </div>

        <form className="user-login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="user-username">Username</label>
            <input
              type="text"
              id="user-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter User username"
              autoComplete="username"
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="user-password">Password</label>
            <input
              type="password"
              id="user-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? <div className="spinner"></div> : "Sign In"}
          </button>

          <div className="login-footer">
            <button 
              type="button" 
              className="back-button" 
              onClick={() => navigate("/login")}
            >
              <i className="bi bi-arrow-left"></i> Back to Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User_login;