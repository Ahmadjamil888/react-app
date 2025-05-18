import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dssh.css";

function getUsers() {
  const users = localStorage.getItem("iyuser_users");
  return users ? JSON.parse(users) : [];
}

function Dashboard({ isLoggedIn }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState(getUsers());

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  function handleLogout() {
    navigate("/");
    window.location.reload();
  }

  if (!isLoggedIn) return null;

  return (
    <div className="dash-bg">
      <div className="dash-bg-overlay" />
      <div className="dash-container">
        <nav className="dash-navbar">
          <span className="dash-logo">iyuser Dashboard</span>
          <button className="dash-logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </nav>
        <div className="dash-content">
          <h1 className="dash-title">Signed In Users</h1>
          <div className="dash-table-wrapper">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 && (
                  <tr>
                    <td colSpan={2} style={{ textAlign: "center", padding: "1rem" }}>
                      No users yet.
                    </td>
                  </tr>
                )}
                {users.map((u, i) => (
                  <tr key={i}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Video background section */}
        <div className="dash-video-section">
          <div className="dash-video-gradient" />
          <video
            className="dash-video"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-pattern-background-1186-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="dash-video-content">
            <h2>AI in Action</h2>
            <p>
              Experience the power of <span className="dash-gradient-text">AI-driven</span> user management and analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;