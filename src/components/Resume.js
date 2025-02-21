import React from "react";
import { Container } from "react-bootstrap";

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
    color: "##ff3b83",
    textDecoration: "none",
  },
  content: {
    fontSize: "1.2rem",
    lineHeight: "1.5",
  },
  downloadButton: {
    padding: "10px 20px",
    backgroundColor: "white",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: "20px",
    color: "#ff3b83",
    border: "1px solid #ff3b83",
  },
  nameSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
};

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Container style={styles.container}>
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #printable-content, #printable-content * {
              visibility: visible;
            }
            #printable-content {
              position: absolute;
              left: 0;
              top: 0;
            }
          }
        `}
      </style>
      <div id="printable-content">
        <div style={styles.nameSection}>
          <h1>Kateryna Stetsenko</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button style={{ ...styles.downloadButton, marginRight: "10px" }}>
              <a
                href="/Kateryna-Stetsenko-resume.pdf"
                download
                style={styles.link}
              >
                Download Resume
              </a>
            </button>
            <button style={styles.downloadButton} onClick={handlePrint}>
              Print this page
            </button>
          </div>
        </div>
        <p className="lead" style={{ fontWeight: "bold" }}>
          Full-Stack Developer
        </p>

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
              Github:
              <a
                href="https://github.com/itcreativeusa"
                style={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/itcreativeusa
              </a>
            </p>
            <p>
              LinkedIn:
              <a
                href="https://www.linkedin.com/in/itcreativeusa/"
                style={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.linkedin.com/in/itcreativeusa/
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
            applications. Committed to delivering exceptional user experiences
            and driving technological advancements.
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
            <b>
              Certificate: UC Berkeley Extention Bootcamp. Full Stack Developer,
              Berkeley, CA
            </b>{" "}
            Completed intensive full-stack development program at Berkeley
            Bootcamp, gaining expertise in modern web development technologies
            and frameworks. Proficient in front-end tools such as HTML, CSS,
            Bootstrap, JavaScript/ES6, jQuery, AJAX, and DOM manipulation, as
            well as back-end technologies like Node.js, Express.js, MySQL,
            Sequelize ORM, and NoSQL databases. Experienced in building
            end-to-end web applications using the MERN stack (MongoDB,
            Express.js, React, Node.js) and following the MVC paradigm. Skilled
            in agile development methodologies, collaborating effectively with
            cross-functional teams to ensure project success. Strong
            problem-solving abilities demonstrated through unit testing and
            test-driven development practices. Committed to continuous learning,
            keeping up with the latest trends and tools in web development.
          </p>
          <p style={styles.content}>
            <b>
              Certificate: Webmaster Courses. Educational center "Success,"
              Ukraine.
            </b>{" "}
            Completed webmaster courses, learning web design and development
            from scratch.
          </p>
          <p style={styles.content}>
            <b>
              Master in Finance. National Academy of Statistics, Accounting, and
              Auditing, Ukraine.{" "}
            </b>
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.heading}>Work Experience:</h2>
          <p style={styles.content}>
            <b>
              Founder and Project Manager, Itcreative Web Studio, Ukraine
              (2014-2019){" "}
            </b>{" "}
            Starting from freelance web development, grown into a web studio
            managing multiple projects in parallel, distributing work to
            multiple freelance developers, and collaborating with multiple
            clients to provide innovative web solutions and deliver high-quality
            projects on time.
          </p>
          <p style={styles.content}>
            <b>Founder, Finder IoT Startup, Ukraine (2016-2017)</b> Established
            and led an IoT startup, handling product development and business
            strategy, resulting in participation and recognition in startup
            competitions.
          </p>
          <p style={styles.content}>
            <b>Sales Manager, Company Prodex, Ukraine (2007-2014)</b> Managed
            wholesales, developed sales strategies, and fostered strong client
            relationships.
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
      </div>
    </Container>
  );
};

export default Resume;
