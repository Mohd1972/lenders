import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="card">
        <header className="header">
          <h1>Welcome to AuthApp</h1>
          <p>Experience a secure and seamless authentication process.</p>
          <div className="buttons-container">
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn">Create Account</button>
            </Link>
          </div>
        </header>

        <section className="features">
          <h2>Why Choose AuthApp?</h2>
          <ul>
            <li>Two-Factor Authentication for added security</li>
            <li>Easy-to-use interface</li>
            <li>Fast account creation and secure login</li>
            <li>Available on all devices</li>
          </ul>
        </section>

        <footer className="footer">
          <p>© 2024 AuthApp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
