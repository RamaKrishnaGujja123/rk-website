import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Rama Krishna Gujja. All rights reserved.</p>
    </footer>
  );
};

export default Footer;