import React, { useEffect } from 'react';
import AOS from 'aos'; // For scroll animations
import 'aos/dist/aos.css'; // AOS styles
import '../styles/Home.css'; // Import the CSS file
import resume from '../assets/RamakrishnagujjaResume.pdf'; // Import the resume

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app-container">
      <div className="content" data-aos="fade-up">
        <h1>Hi ! I am <br /> Rama Krishna</h1>
        <h2>Fullstack Developer</h2>
      </div>
      <section id="about" className="section" data-aos="fade-up">
        <h2>About Me</h2>
        <p className="about-me">
        <p>Hi, I’m Rama Krishna Gujja — a passionate and results-driven Senior Full Stack Java Developer with over 8 years of experience building scalable, high-performance applications in fast-paced financial and tech environments. I specialize in Java, Spring Boot, and Microservices Architecture, with deep expertise in cloud platforms like AWS and Azure.</p> <br />

        <p>From designing enterprise-level backend systems to crafting sleek, responsive frontends using React.js, Angular, and Node.js, I bring a full-spectrum approach to development. My work doesn’t stop at code — I thrive in Agile teams, mentor junior developers, and collaborate closely with cross-functional stakeholders to deliver business impact.</p> <br />

        <p>I’ve architected solutions that streamline workflows, enhance user experience, and optimize performance. Whether I’m building RESTful APIs, deploying to Kubernetes, or automating CI/CD pipelines with Jenkins and GitHub Actions, I’m always focused on writing clean, maintainable, and secure code.</p> <br />

        <p>Outside of work, I enjoy solving real-world problems through tech, keeping up with the latest cloud innovations, and occasionally diving into Python for automation scripts. Let’s build something awesome.</p> <br />
        </p>
      </section>
      <div className="contact-info" data-aos="fade-up">
        <h3>Name: Rama Krishna Gujja</h3>
        <p>Mobile:+1 7739397577</p>
        <p>Email: <a className="email" href="mailto:ramakrishnagujja744.com">ramakrishnagujja744.com</a></p>
      </div>
      <div className="connect-section" data-aos="fade-up">
        <h2>Let's Connect!</h2>
        <p>I am open to new opportunities and collaborations.</p>
        <p>Let’s talk about the next big thing!</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ramakrishna-gujja/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/RamaKrishnaGujja123" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
          </a>
        </div>
        <a href={resume} download="../assets/RamakrishnagujjaResume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="download-resume-button">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Home;