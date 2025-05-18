import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dssh.css";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // Save user to localStorage "database"
    const users = JSON.parse(localStorage.getItem("iyuser_users") || "[]");
    users.push({ name, email });
    localStorage.setItem("iyuser_users", JSON.stringify(users));
    setSuccessMsg("Thanks for signing in!");
    setTimeout(() => {
      navigate("/user");
    }, 1200);
  }

  return (
    <div className="auth-bg">
      <div className="auth-bg-overlay" />
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Sign In</h2>
        <div className="auth-field">
          <label>Name</label>
          <input
            type="text"
            value={name}
            required
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="auth-field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <button className="auth-btn" type="submit">Sign In</button>
        {successMsg && <div className="auth-success">{successMsg}</div>}
        <div className="auth-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </div>
      </form>
    </div>
  );
}

export default SignIn;