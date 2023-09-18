import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8080/login', {
        params: {
          username: username,
        },
      });

      if (response.status === 200 && response.data.password === password) {
        const userData = response.data.userId;
        localStorage.setItem('userData', JSON.stringify(userData));
        setLoginSuccess(true);
        setLoginError(false);
        setTimeout(() => {
          navigate('/home'); 
        }, 1000);
      } else {
        setLoginError(true);
        setLoginSuccess(false);
      }
    } catch (error) {
      console.log('error' + error);
    }
  };

  return (
    <div className="login-container">
      <video src="/videos/video-earth.mp4" autoPlay loop muted />
      <h1 className="title">DIGIX</h1>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button className="button1" type="submit">
            Login
          </button>
        </form>
        {loginSuccess && <p className="success-message">Welcome!</p>}
        {loginError && <p className="error-message">User not found!</p>}
        <p>
          Don't have an account?{' '}
          <a href="/register" className="register-link">
            New User Register
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
