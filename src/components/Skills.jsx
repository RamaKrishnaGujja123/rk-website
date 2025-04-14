import React, { useState } from 'react';
import '../styles/Skills.css'; // Import the CSS file

// Optimized skills data
const skillsData = {
  'Web Development': [
    { image: require('../assets/webdevelopment/React.png'), name: 'React.js' },
    { image: require('../assets/webdevelopment/Angular.png'), name: 'Angular.js' },
    { image: require('../assets/webdevelopment/Javascript.jpg'), name: 'JavaScript' },
    { image: require('../assets/webdevelopment/Typescript.png'), name: 'TypeScript' },
    { image: require('../assets/webdevelopment/nodejs.jpg'), name: 'Node.js' },
    { image: require('../assets/webdevelopment/expressjs.jpg'), name: 'Express.js' },
    { image: require('../assets/webdevelopment/bootstrap.avif'), name: 'Bootstrap' },
    { image: require('../assets/webdevelopment/html5.png'), name: 'HTML5' },
    { image: require('../assets/webdevelopment/css3.jpg'), name: 'CSS3' },
    { image: require('../assets/webdevelopment/flexbox.png'), name: 'Flexbox' },
    { image: require('../assets/webdevelopment/grid.jpg'), name: 'CSS Grid' },
  ],
  'Frameworks': [
    { image: require('../assets/frameworks/springboot.png'), name: 'Spring Boot' },
    { image: require('../assets/frameworks/spring.png'), name: 'Spring Framework' },
    { image: require('../assets/frameworks/hibernate.png'), name: 'Hibernate ORM' },
    { image: require('../assets/frameworks/struts.png'), name: 'Struts' },
    { image: require('../assets/frameworks/ejb.png'), name: 'EJB' },
  ],
  'Programming Languages': [
    { image: require('../assets/programming languages/java.png'), name: 'Java' },
    { image: require('../assets/programming languages/Python.jpg'), name: 'Python' },
  ],
  'Database Management': [
    { image: require('../assets/dbmgmt/PostgreSQL.jpg'), name: 'PostgreSQL' },
    { image: require('../assets/dbmgmt/mongodb.jpg'), name: 'MongoDB' },
    { image: require('../assets/dbmgmt/sql.jpg'), name: 'SQL' },
    { image: require('../assets/dbmgmt/mysql.png'), name: 'MySQL' },
    { image: require('../assets/dbmgmt/sqlserver.png'), name: 'SQL Server' },
    { image: require('../assets/dbmgmt/cassandra.png'), name: 'Cassandra' },
  ],
  'Containerization & Orchestration': [
    { image: require('../assets/development tools/docker.jpg'), name: 'Docker' },
    { image: require('../assets/development tools/kubernetes.png'), name: 'Kubernetes (EKS)' },
  ],
  'CI/CD Tools': [
    { image: require('../assets/development tools/jenkins.jpeg'), name: 'Jenkins' },
    { image: require('../assets/development tools/azuredevops.png'), name: 'Azure DevOps' },
    { image: require('../assets/development tools/githubactions.png'), name: 'GitHub Actions' },
  ],
  'Version Control': [
    { image: require('../assets/version control/git.png'), name: 'Git' },
    { image: require('../assets/version control/github.png'), name: 'GitHub' },
    { image: require('../assets/version control/gitlab.png'), name: 'GitLab' },
  ],
  'Development Tools': [
    { image: require('../assets/development tools/vs code.png'), name: 'VS Code' },
    { image: require('../assets/development tools/intellij.png'), name: 'IntelliJ IDEA' },
    { image: require('../assets/development tools/postman.png'), name: 'Postman' },
  ],
};

const Skills = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    Object.keys(skillsData).reduce((acc, key) => ({ ...acc, [key]: 0 }), {})
  );

  const nextSlide = (category) => {
    if (currentIndexes[category] < skillsData[category].length - 1) {
      setCurrentIndexes({
        ...currentIndexes,
        [category]: currentIndexes[category] + 1,
      });
    }
  };

  const prevSlide = (category) => {
    if (currentIndexes[category] > 0) {
      setCurrentIndexes({
        ...currentIndexes,
        [category]: currentIndexes[category] - 1,
      });
    }
  };

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills & Certifications</h2>

      <div className="skills-carousels">
        {Object.keys(skillsData).map((category) => (
          <div key={category} className="skills-carousel">
            <h3 className="carousel-title">{category}</h3>
            <div className="skills-slider">
              <button
                className="nav-button left"
                onClick={() => prevSlide(category)}
                disabled={currentIndexes[category] === 0}
              >
                ◀
              </button>

              <div className="skill-card">
                <img
                  src={skillsData[category][currentIndexes[category]].image}
                  alt={skillsData[category][currentIndexes[category]].name}
                  className="skill-image"
                />
                <p>{skillsData[category][currentIndexes[category]].name}</p>
              </div>

              <button
                className="nav-button right"
                onClick={() => nextSlide(category)}
                disabled={
                  currentIndexes[category] >= skillsData[category].length - 1
                }
              >
                ▶
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Let's Connect Section */}
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Let's Connect!
        </h3>
        <p className="text-gray-700 mb-4">
          I’m always up for new challenges, collaborations, or just a good tech
          conversation.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/ramakrishna-gujja/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>
          <a
            href="https://github.com/RamaKrishnaGujja123"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="social-icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
