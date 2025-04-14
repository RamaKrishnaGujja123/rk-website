import React from 'react';
import resume from '../assets/RamakrishnagujjaResume.pdf';
import '../styles/DownloadResume.css'; // Import the CSS file

const DownloadResume = () => {
  return (
    <div className="download-resume-container">
      <a href={resume} className="download-resume-link" download="RamakrishnagujjaResume.pdf">
        Download Resume
      </a>
    </div>
  );
};

export default DownloadResume;