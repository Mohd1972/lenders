import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import OTPVerificationPage from './components/OTPVerificationPage';
import CreateUsernamePasswordPage from './components/CreateUsernamePasswordPage';
import SuccessPage from './components/SuccessPage';
import './App.css';
import './style/auth.css';  // Importing CSS globally

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/verify-otp" element={<OTPVerificationPage />} />
        <Route path="/create-credentials" element={<CreateUsernamePasswordPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
