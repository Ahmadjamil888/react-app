import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="auth-bg">
      <div className="auth-bg-overlay" />
      
      <div className="auth-form" style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", color: "#ff9800" }}>404</h1>
        <h2 className="auth-title">Page Not Found</h2>
        <p style={{ color: "#334155", marginBottom: "1.5rem" }}>
          Sorry, the page you are looking for does not exist.
        </p>
        <button className="auth-btn" onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;