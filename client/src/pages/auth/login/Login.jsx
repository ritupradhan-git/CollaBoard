import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import '../../../index.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="card-header">
          <h2>Welcome back</h2>
          <p>Enter your details to access your account.</p>
        </div>

        {/* Google Login */}
        <button className="btn-google">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
          />
          Log in with Google
        </button>

        <div className="divider">
          <span>or log in with email</span>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="name@company.com"
            />
          </div>

          <div className="form-group">
            <div className="label-row">
              <label>Password</label>
              <a href="#forgot" className="forgot-link">
                Forgot?
              </a>
            </div>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-input"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-submit">
            Log In
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account?{' '}
          <Link to="/register" className="link-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
