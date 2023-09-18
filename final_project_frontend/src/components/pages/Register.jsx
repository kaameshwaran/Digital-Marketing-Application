import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailId(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      emailId: emailId,
      username: username,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8080/register', formData);
      if (response.status === 200 && response.data === true) {
        setRegistrationSuccess(true);
        setRegistrationError(false);
        navigate('/login');
      } else {
        setRegistrationSuccess(false);
        setRegistrationError(true);
      }
    } catch (error) {
      console.log('An error occurred:', error);
    }
  };

  return (
    <div className="register-container">
    <video src="/videos/video-4.mp4" autoPlay loop muted />
      <h2 className='title'>DIGIX</h2>
      <div className="register-form">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="email"
              value={emailId}
              onChange={handleEmailChange}
            />
          </div>
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
          <button className='button2' type="submit">Register</button>
        </form>
        {registrationSuccess && (
          <p className="success-message">Registration successful!</p>
        )}
        {registrationError && (
          <p className="error-message">
            Registration failed. Try Login?
          </p>
        )}
        <p>
          Already have an account? <a href="/" className="login-link">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
