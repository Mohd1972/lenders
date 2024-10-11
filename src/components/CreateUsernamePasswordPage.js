// src/components/CreateUsernamePasswordPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/auth.css'; // Import the CSS file

const CreateUsernamePasswordPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Handle strong password check
    if (credentials.password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    // Send credentials to the backend API
    fetch("http://your-backend-ip:8000/api/create_credentials/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(response => response.json())
    .then(data => {
      // After successful creation, navigate to the success page
      navigate('/success');
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-header">Create Username and Password</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="auth-form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-submit-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsernamePasswordPage;