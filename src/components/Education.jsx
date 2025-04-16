import React, { useEffect } from 'react';
import '../styles/Education.css'; // Import your CSS file
import { FaGraduationCap } from 'react-icons/fa';  // Importing an icon
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles

// Importing logos
import gsuLogo from '../assets/logos/govstlogo.jpg';
import vecLogo from '../assets/logos/vaaglogo.png';

const Education = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on page load
  }, []);

  return (
    <section id="education">
      <h2>Education</h2>
      <div className="timeline">
        <div className="education-item" data-aos="fade-up">
          <img src={gsuLogo} alt="Governors State University Logo" className="education-logo" />
          <div className="education-content">
            <div className="degree-info">
              <FaGraduationCap size={30} className="education-icon" />
              <h3>Master’s in Computer Science</h3>
            </div>
            <p>Governors State University, Chicago, Illinois</p>
            <p>GPA: 3.8</p>
          </div>
        </div>

        <div className="education-item" data-aos="fade-up">
          <img src={vecLogo} alt="Vaagdevi Engineering College Logo" className="education-logo" />
          <div className="education-content">
            <div className="degree-info">
              <FaGraduationCap size={30} className="education-icon" />
              <h3>Bachelor of Technology </h3>
            </div>
            <p>JNTU, Hyderabad, India</p>
            <p>Percentage: 71%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;