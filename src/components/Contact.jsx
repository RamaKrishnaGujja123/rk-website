import React from 'react';
import '../styles/Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Heading */}
      <h1>Contact Me</h1>
      
      {/* Contact Info Grid */}
      <div className="contact-grid">
        
        {/* Address Section */}
        <div className="contact-card">
          <img 
            src="data:image/png;base64,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" 
            alt="Address Icon" 
          />
          <h3>Address</h3>
          <p>Chicago, Illinois, United States, 60616</p>
        </div>
        
        {/* Contact Number Section */}
        <div className="contact-card">
          <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/006/795/445/small/smartphone-icon-cellphone-mobile-phone-sign-symbol-vector.jpg" 
            alt="Phone Icon" 
          />
          <h3>Contact Number</h3>
          <p>+1 7739397577</p>
        </div>
        
        {/* Email Section */}
        <div className="contact-card">
          <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/006/697/974/small/mail-email-icon-template-black-color-editable-mail-email-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg" 
            alt="Email Icon" 
          />
          <h3>E-Mail</h3>
          <p>ramakrishnagujja744@gmail.com</p>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;