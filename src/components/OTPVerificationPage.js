// src/components/OTPVerificationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerificationPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verify OTP by calling the backend API
    fetch("http://your-backend-ip:8000/api/verify_otp/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ otp })
    })
    .then(response => response.json())
    .then(data => {
      // Assuming successful OTP verification
      navigate('/create-credentials');
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <form onSubmit={handleSubmit}>
        <label>OTP:</label>
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default OTPVerificationPage;
