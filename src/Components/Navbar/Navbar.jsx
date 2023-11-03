import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export const Navbar = ({ user }) => {
  return (
    <header className="header">
      <div className="navbar-container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <span className="gradient-text">Health Care</span>
            </Link>
          </div>
          <nav>
            <ul className="nav-link">
              <li>
                <Link className="nav-item" to="/home">
                  Home
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link className="nav-item" to="/services">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item" to="/logout">
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="nav-item" to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
              <button className="contact-btn">Contact</button>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
