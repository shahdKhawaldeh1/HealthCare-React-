
import React from 'react';
import './Home.css';
import aboutPhoto from '../../assets/images/about.jpg';
import ContactToggle from '../Contact/ContactToggle'; 
import { Contact } from '../Contact/Contact';

export const Home = () => {
  return (
    <>
       <div className="header-home">
        <div className="home-content">
          <div className="loading">
            <svg>
              <polyline id="back" points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"></polyline>
              <polyline id="front" points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"></polyline>
            </svg>
          </div>
          <h1 className="home-title">Your Health is our First priority</h1>
          <button className="home-btn">
            <svg
              className="empty"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
            >
              <path fill="none" d="M0 0H24V24H0z"></path>
              <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"></path>
            </svg>
            <svg
              className="filled"
              height="32"
              width="32"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H24V24H0z" fill="none"></path>
              <path d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"></path>
            </svg>
            Get Started!
          </button>
        </div>
      </div>

        {/* start about section */}
        <section className="about">
        <div className="about-container">
          <div className="grid-container">
            <div>
              <h2 className="about-heading">We always ensure the best medical treatment for your health</h2>
              <p className="about-paragraph">Our mission is to provide the highest quality medical care and ensure the well-being of our patients</p>
              <ul className="about-list">
                <li>
                  <i className="about-icon fa-regular fa-circle-check"></i>
                  <span className="about-item">You can trust us for your healthcare needs, as we are dedicated to excellence in patient care.</span>
                </li>
                <li>
                  <i className="about-icon fa-regular fa-circle-check"></i>
                  <span className="about-item">Our dedicated team are professionals and provide personalized care.</span>
                </li>
                <li>
                  <i className="about-icon fa-regular fa-circle-check"></i>
                  <span className="about-item">Our goal is to provide you with the best medical treatment, ensuring your comfort.</span>
                </li>
              </ul>
              <button className="about-btn">more about us</button>
            </div>
            <div className="image-container">
              <img className="about-img" alt="about" src={aboutPhoto} />
            </div>
          </div>
        </div>
      </section>

      {/* start services section */}
      <section className="services-section" id="skills-section">
        <div className="services-container">
          <h2 className="section-heading">Our Services</h2>
          <div className="services-parent">
            <div className="service">
              <i className="fa-solid fa-check" />
              <span>free checkup</span>
            </div>
            <div className="service">
              <i className="fa-solid fa-truck-medical" />
              <span>24/7 ambulance</span>
            </div>
            <div className="service">
              <i className="fa-solid fa-user-doctor" />
              <span>Experts Doctors</span>
            </div>
            <div className="service">
              <i className="fa-solid fa-capsules" />
              <span>medicines</span>
            </div>
            <div className="service">
              <i className="fa-solid fa-heart-circle-bolt" />
              <span>Total Care</span>
            </div>
            <div className="service">
              <i className="fa-solid fa-stethoscope" />
              <span>Monitoring</span>
            </div>
            <div className="service">
              <i className="fa-solid fa-calendar-days" />
              <span>Appointment</span>
            </div>
            <div className="service">
              <i className="fa-solid fa-notes-medical" />
              <span>Mental Health</span>
            </div>
          </div>
        </div>
      </section>


        <Contact/>
      <ContactToggle /> 
    </>
  );
};
