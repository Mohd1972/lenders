// src/components/SuccessPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div>
      <h2>Account Created Successfully!</h2>
      <p>Congratulations, your account has been created. You can now log in.</p>
      <Link to="/">Go to Login</Link>
    </div>
  );
};

export default SuccessPage;
