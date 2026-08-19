import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    const correctEmail = "test@gmail.com";
    const correctPassword = "Admin123";

    if (email === correctEmail && password === correctPassword) {
      setError("");

    
      login(email);

      navigate("/dashboard");
    } else {
      setError("Invalid Email or Password");
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">

        <form onSubmit={handleLogin}>
          <h1>Welcome back</h1>

          <p>Log in to manage your tasks</p>

          <label>Email</label>

          <input
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <br />
          <br />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="forgot">
          <a href="/">Forgot password?</a>
        </div>
        <br></br>

          <button type="submit">
            Login
          </button>
           <p className="signup">
          Don't have an account? <a href="/">Sign up</a>
        </p>
        </form>

      </div>
    </div>
  );
}

export default Login;