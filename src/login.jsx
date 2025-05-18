import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dssh.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (email === "shazabjamildhami@gmail.com" && password === "Ahmadjamil*25") {
      setIsLoggedIn(true);
      setErrorMsg("");
      navigate("/dashboard");
    } else {
      setIsLoggedIn(false);
      setErrorMsg("This does not match with our credentials.");
    }
  }

  return (
    <div className="auth-bg">
      <div className="auth-bg-overlay" />
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Login</h2>
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
        <div className="auth-field">
          <label>Password</label>
          <input
            type="password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button className="auth-btn" type="submit">Login</button>
        {errorMsg && <div className="auth-error">{errorMsg}</div>}
        <div className="auth-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signin")}>Sign In</span>
        </div>
      </form>
    </div>
  );
}

export default Login;