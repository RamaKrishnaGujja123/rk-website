import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header>
      <h1>Rama Krishna Gujja</h1>
      <p>Fullstack Web Developer</p>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/workexperience">WorkExperience</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/download-resume">Download Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;