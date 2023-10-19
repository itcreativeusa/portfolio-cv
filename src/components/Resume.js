import React from "react";
import { Container } from "react-bootstrap";
//Styles for the resume page
const styles = {
  container: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  section: {
    marginBottom: "1.5rem",
    fontSize: "1.2rem",
    lineHeight: "1.5",
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  subheading: {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  list: {
    listStyleType: "circle",
    marginLeft: "1.5rem",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  content: {
    fontSize: "1.2rem",
    lineHeight: "1.5",
  },
  downloadButton: {
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: "20px",
    border: "1px solid #007bff",
  },
  nameSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
};
//Resume component that will be used to display the resume page
const Resume = () => {
  //Returning the resume page
  return (
    <Container style={styles.container}>
      <div style={styles.nameSection}>
        <h1>Kateryna Stetsenko</h1>
        <button style={styles.downloadButton}>
          <a
            href="./Kateryna-Stetsenko-resume.pdf"
            download
            style={styles.link}
          >
            Download Resume
          </a>
        </button>
      </div>
      <p className="lead">Full-Stack Developer</p>

      <div style={styles.section}>
        <address>
          <p>Mountain View, CA 94040</p>
          <p>Phone: 415-231-89-10</p>
          <p>
            Email:{" "}
            <a href="mailto:itcreativeusa@gmail.com" style={styles.link}>
              itcreativeusa@gmail.com
            </a>
          </p>
          <p>
            Github:{" "}
            <a
              href="https://github.com/itcreativeusa"
              style={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/itcreativeusa
            </a>
          </p>
        </address>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>Objective:</h2>
        <p style={styles.content}>
          Passionate and experienced full-stack developer with a strong
          background in creating startups and managing projects. Recently
          completed a certificate in full-stack development from Berkeley
          Bootcamp. Seeking a challenging role as a frontend or full-stack
          developer to contribute my skills in Node.js, SQL, JavaScript, APIs,
          HTML, CSS, and Git to develop innovative and scalable web
          applications. Committed to delivering exceptional user experiences and
          driving technological advancements.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>Skills:</h2>
        <ul style={styles.list}>
          <li>
            Front-End: HTML, CSS, Bootstrap, JavaScript/ES6, jQuery, AJAX, DOM
            manipulation
          </li>
          <li>Back-End: Node.js, Express.js, MySQL, Sequelize ORM, NoSQL</li>
          <li>
            Full-Stack Frameworks: MERN Stack (MongoDB, Express.js, React,
            Node.js)
          </li>
          <li>Version Control: Git</li>
          <li>Deployment: Heroku</li>
          <li>Testing: Unit testing, Test-driven development</li>
          <li>Project Management: Agile development, Team Collaboration</li>
          <li>
            Other: JSON, APIs, MVC paradigm, Object-oriented programming,
            Progressive Web Apps
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>Education:</h2>
        <p style={styles.content}>
          Berkeley Bootcamp Full Stack Program, Berkeley, CA (March 2023 -
          August 2023) Completed intensive full-stack development program at
          Berkeley Bootcamp, gaining expertise in modern web development
          technologies and frameworks. Proficient in front-end tools such as
          HTML, CSS, Bootstrap, JavaScript/ES6, jQuery, AJAX, and DOM
          manipulation, as well as back-end technologies like Node.js,
          Express.js, MySQL, Sequelize ORM, and NoSQL databases. Experienced in
          building end-to-end web applications using the MERN stack (MongoDB,
          Express.js, React, Node.js) and following the MVC paradigm. Skilled in
          agile development methodologies, collaborating effectively with
          cross-functional teams to ensure project success. Strong
          problem-solving abilities demonstrated through unit testing and
          test-driven development practices. Committed to continuous learning,
          keeping up with the latest trends and tools in web development.
        </p>
        <p style={styles.content}>
          Webmaster Courses, Educational center "Success," Ukraine (March 2014 -
          July 2014) Completed webmaster courses, learning web design and
          development from scratch.
        </p>
        <p style={styles.content}>
          Master in Finance, National Academy of Statistics, Accounting, and
          Auditing, Ukraine (2003-2009) Obtained a Master's degree in Finance,
          providing a strong foundation in financial principles and analysis.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>Work Experience:</h2>
        <p style={styles.content}>
          Founder and Project Manager, Itcreative Web Studio, Ukraine
          (2014-2019) Starting from freelance web development, grown into a web
          studio managing multiple projects in parallel, distributing work to
          multiple freelance developers, and collaborating with multiple clients
          to provide innovative web solutions and deliver high-quality projects
          on time.
        </p>
        <p style={styles.content}>
          Founder, Finder IoT Startup, Ukraine (2016-2017) Established and led
          an IoT startup, handling product development and business strategy,
          resulting in participation and recognition in startup competitions.
        </p>
        <p style={styles.content}>
          Sales Manager, Company Prodex, Ukraine (2007-2014) Managed wholesales,
          developed sales strategies, and fostered strong client relationships.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>Additional Activities:</h2>
        <ul style={styles.list}>
          <li>
            Participated in hackathons, demonstrating problem-solving and
            teamwork skills.
          </li>
          <li>
            Mentored startups and actively engaged in startup competitions.
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.heading}>Languages:</h2>
        <p>English (Fluent)</p>
        <p>Ukrainian (Native)</p>
      </div>
    </Container>
  );
};

export default Resume;
