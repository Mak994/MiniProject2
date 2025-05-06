import React, { useState } from 'react';
import './LoginSignup.css';
import { useNavigate, Link } from 'react-router-dom';

const LoginSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Optional: add basic validation if needed
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }

    // Allow all emails
    navigate('/homepage');
  };

  return (
    <div className="login-container">
      <div className="header">
        <h1>3D Virtual Museum Tour</h1>
      </div>

      <div className="login-box">
        <h2>Login / Signup</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <div className="subscription-link">
          Not subscribed? <Link to="/subscribe">View Subscription Plans</Link>
        </div>

        <button className="login-btn" onClick={handleLogin}>Login</button>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default LoginSignup;