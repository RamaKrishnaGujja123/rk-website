import React, { useState } from 'react';
import "../styles/WorkExperience.css";

const WorkExperience = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const workExperiences = [
    {
      title: 'Sr Java Full Stack Developer – FINRA',
      location: 'Rockville, Maryland',
      duration: 'April 2024 – Present',
      details: [
        'Streamlined application development with SDLC methodology, improving delivery and quality.',
        'Built enterprise apps using Spring Boot, Spring IoC, DI, and Spring Batch for processing.',
        'Used Spring Security, Hibernate ORM, core Java features, and microservices architecture.',
        'Developed RESTful APIs, explored GraphQL, and followed SOA principles.',
        'Managed deployments with AWS (EC2, S3, Lambda, RDS, etc.) and Terraform.',
        'Optimized NoSQL data modeling in MongoDB; integrated Kafka for event streaming.',
        'Built UIs using HTML5, CSS3, JavaScript, React, Redux, and SPA architecture.',
        'Containerized apps using Docker & Kubernetes; setup CI/CD with Jenkins.',
        'Implemented ELK stack for centralized logging and Python ETL scripts for automation.',
        'Utilized Snowflake, Shell scripting, Git, and Agile practices.',
      ],
    },
    {
      title: 'Sr Java Full Stack Developer – FM GLOBAL',
      location: 'Johnston, Rhode Island',
      duration: 'June 2023 – April 2024',
      details: [
        'Created responsive UI components with React, Angular, TypeScript, and Bootstrap.',
        'Built REST APIs using Java, Spring Boot, and Hibernate with microservices design.',
        'Secured apps with Spring Security, OAuth 2.0, and SAML.',
        'Optimized PostgreSQL queries; handled AWS infrastructure and CI/CD with Jenkins.',
        'Implemented Kafka-based event streaming and storage strategies in MongoDB/PostgreSQL.',
        'Used JUnit, Mockito, and logging tools (Log4J2, SLF4J); collaborated via Git/JIRA.',
      ],
    },
    {
      title: 'Java Full Stack Developer – CISCO',
      location: 'San Jose, California',
      duration: 'Jan 2020 – July 2022',
      details: [
        'Developed UI with React, Angular, and responsive frameworks.',
        'Created Java Spring Boot APIs and integrated with Kafka-based microservices.',
        'Applied OAuth 2.0, JWT, and Spring Security for secure architecture.',
        'Utilized PostgreSQL, MongoDB, Hibernate, and AWS/Azure cloud services.',
        'Handled CI/CD automation via Jenkins, GitHub Actions, Docker, and Kubernetes.',
      ],
    },
    {
      title: 'Java Developer – Darwinbox Technologies Inc.',
      location: 'Hyderabad, India',
      duration: 'Jan 2017 – Dec 2019',
      details: [
        'Built scalable apps with Struts, EJB, Servlets, JSP, and DB2.',
        'Developed SOAP web services, integrated JMS for async messaging.',
        'Followed MVC patterns and used WebSphere for deployment.',
        'Automated builds using ANT; ensured code quality with Mockito, Log4j, Git.',
      ],
    },
  ];

  return (
    <section id="experience">
      <h2>Work Experience</h2>

      <div className="timeline">
        {workExperiences.map((experience, index) => (
          <div key={index} className="experience-item">
            <div
              className="dropdown-toggle"
              onClick={() => toggleDropdown(index)}
            >
              <div className="experience-content">
                <h3>{experience.title}</h3>
                <p>{experience.location} | {experience.duration}</p>
              </div>
              <span className="dropdown-arrow">{openDropdown === index ? '▲' : '▼'}</span>
            </div>

            {openDropdown === index && (
              <div className="dropdown-content">
                <ul>
                  {experience.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;