import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//Card component with project information
const cardData = [
  {
    title: "redux-a-shop",
    content:
      "Redux-a-shop is an e-commerce platform that allows users to browse through a variety of items, add them to their cart, and purchase them using Stripe. Applicaton is using Redux to manage global state instead of the Context API.",
    technologies: [
      "MERN Stack",
      "Redux",
      "GraphQL API",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "ES6",
      "APIs",
    ],
    backgroundImage: "./img-1.jpg",
    githubLink: "https://github.com/itcreativeusa/redux-a-shop",
  },
  {
    title: "book-ninja",
    content:
      "Book Ninja web application is a Google Books API search engine built with GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It's allow users to save book searches to the back end.",
    technologies: [
      "MERN Stack",
      "GraphQL API",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "ES6",
      "APIs",
    ],
    backgroundImage: "./img-2.jpg",
    githubLink: "https://github.com/itcreativeusa/book-ninja",
  },
  {
    title: "work-wiz",
    content:
      "This is a WorkWiz employee tracker, a command-line application that can be used to add, view & delete employees, roles and departments. Application uses Node.js, Inquirer, and MySQL to manage a company's employee database.",
    technologies: ["Node.js", "MySQL", "Big Data", "Inquirer", "ES6", "CLI"],
    backgroundImage: "./img-3.jpg",
    githubLink: "https://github.com/itcreativeusa/work-wiz",
  },

  {
    title: "shop-nerd",
    content:
      "E-commerce back end application that uses Express.js API and Sequelize to interact with a MySQL database. With this back end, users can easily add, update, and delete products, categories, and tags. .",
    technologies: [
      "Node.js",
      "Express.js",
      "Object-Relational Mapping (ORM)",
      "Inquirer",
      "MySQL",
      "Authentication",
      "Relationships with Sequelize",
    ],
    backgroundImage: "./img-4.jpg",
    githubLink: "https://github.com/itcreativeusa/shop-nerd",
  },
  {
    title: "you-better-readme",
    content:
      "This you-better-readme was created as a boot camp every week student challenge. It's a command-line node.js application that accepts user input for generating a readme file with the title of the project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.",
    technologies: ["Node.js", "ES6", "Inquirer", "CLI", "Markdown", "Git"],
    backgroundImage: "./img-5.jpg",
    githubLink: "https://github.com/itcreativeusa/you-better-readme",
  },
  {
    title: "green-scribbles",
    content:
      "This is a Note Taker that can be used to write, save & delete notes. The application uses an Express.js back end and saves, and retrieves note data from a JSON file.",
    technologies: [
      "Express.js",
      "POST Requests and Persistent Data",
      "Modular Routing",
      "Custom Middleware and Deployment",
    ],
    backgroundImage: "./img-6.jpg",
    githubLink: "https://github.com/itcreativeusa/green-scribbles",
  },
];
//styles for the card component and the button
const styles = {
  card: {
    margin: 20,
    background: "white",
  },
  title: {
    minHeight: 50,
    fontSize: "1.5rem",
    color: "#333",
    fontWeight: "600",
  },
  heading: {
    background: "#ff3b83",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.25rem",
    textTransform: "uppercase",
    color: "white",
    padding: "0 20px",
    textAlign: "center",
  },
  content: {
    color: "white",
    fontWeight: "400",
    fontSize: "1.25rem",
    position: "relative",
    overflow: "hidden",
    boxSizing: "borderBox",
  },
  buttonContainer: {
    textAlign: "center",
  },
  seeAllButton: {
    fontSize: "1.25rem",
    textTransform: "uppercase",
    fontWeight: "600",
    color: "white",
    backgroundColor: "#333",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "40px",
    transition: "background-color 0.3s",
  },
  seeAllButtonHover: {
    backgroundColor: "#ff3b83",
    color: "white",
  },
  technologies: {
    color: "#333",
    fontWeight: "600",
    fontSize: "1.25rem",
    position: "relative",
    overflow: "hidden",
    boxSizing: "borderBox",
  },
};
//Card component that will be used to display the project cards
function Project() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div style={styles.card}>
      <div style={styles.heading}>Some of my projects</div>
      <div className="row" style={{ margin: 20 }}>
        {cardData.map((card, index) => (
          <div
            key={index}
            className="col-md-12 col-lg-6 col-sm-12"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="card mb-4"
              style={{
                background:
                  hoveredIndex === index
                    ? "#ff3b83"
                    : `url(${process.env.PUBLIC_URL}/${card.backgroundImage}) center/cover`,
                height: 450,
                padding: 50,
                position: "relative",
              }}
            >
              <div>
                <h5 className="card-title" style={styles.title}>
                  {card.title}
                </h5>
                <p className="card-text" style={styles.content}>
                  {card.content}
                </p>
                <p style={styles.technologies}>
                  Technologies used: {card.technologies.join(", ")}
                </p>
                <a
                  href={card.githubLink}
                  className="btn btn-primary"
                  id="githubLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.buttonContainer}>
        <Link to="/project-all" style={{ textDecoration: "none" }}>
          <button
            className="see-all-button"
            style={{
              ...styles.seeAllButton,
              ...(hoveredIndex === "seeAllButton" && styles.seeAllButtonHover),
            }}
            onMouseEnter={() => handleMouseEnter("seeAllButton")}
            onMouseLeave={handleMouseLeave}
          >
            See All Projects
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
