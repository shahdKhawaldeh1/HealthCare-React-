import React from 'react';
import {useState } from 'react' 
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png'
import './Navbar.css'

export const Navbar = ({ user }) => {
  const [active, setActive] = useState("") 

  return (
    <header className="header">
      <div className="navbar-container">
        <div className="header-content">
          <div className="logo">
        
            <Link to="/" className='flex items-center gap-2' onClick={()=>{
          setActive(""); // Clear the 'active' state
          window.scrollTo(0,0); // Scroll to the top of the page
        }}>
          {/* <img loading="lazy" src={logo} alt='logo' className='logo-image'/> */}
          <p className="gradient-text">Medico</p>

        </Link>
            
          </div>
          <nav>
            <ul className="nav-link">
              <li>
                <Link className="nav-item" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/popular">
                  Popular
                </Link>
                <Link className="nav-item" to="/info">
                 Info
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
