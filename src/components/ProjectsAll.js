import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
//Card component with project information
const cardData = [
  {
    title: "work-wiz",
    content:
      "This is a WorkWiz employee tracker, a command-line application that can be used to add, view & delete employees, roles and departments. Application uses Node.js, Inquirer, and MySQL to manage a company's employee database.",
    technologies: ["Node.js", "MySQL", "Big Data", "Inquirer", "ES6", "CLI"],
    backgroundImage: "./img-1.jpg",
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

    backgroundImage: "./img-2.jpg",
    githubLink: "https://github.com/itcreativeusa/shop-nerd",
  },
  {
    title: "you-better-readme",
    content:
      "This you-better-readme was created as a boot camp every week student challenge. It's a command-line node.js application that accepts user input for generating a readme file with the title of the project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.",
    technologies: ["Node.js", "ES6", "Inquirer", "CLI", "Markdown", "Git"],
    backgroundImage: "./img-3.jpg",
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
    backgroundImage: "./img-4.jpg",
    githubLink: "https://github.com/itcreativeusa/green-scribbles",
  },
  {
    title: "text-me-jate",
    content:
      "Text-me Progressive Web Application is a text editor that runs in the browser and creates notes or code snippets with or without an internet connection. Application have an option to install as a Progressive Web Application.",
    technologies: [
      "Progressive Web Applications (PWA)",
      "Webpage Performance and Webpack",
      "Workbox and IndexedDB",
      "Service Workers",
      "Manifest",
      "ES6",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "APIs",
    ],
    backgroundImage: "./img-5.jpg",
    githubLink: "https://github.com/itcreativeusa/text-me-jate",
  },
  {
    title: "link-minds",
    content:
      "This is a link-minds an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. App use Express.js for routing, a MongoDB database, and the Mongoose ODM.",
    technologies: [
      "NoSQL",
      "MongoDB",
      "Mongoose",
      "Express.js",
      "Node.js",
      "ES6",
      "APIs",
    ],
    backgroundImage: "./img-6.jpg",
    githubLink: "https://github.com/itcreativeusa/link-minds",
  },
  {
    title: "smart-day-creator",
    content:
      "This smart-day-creator was created as a boot camp every week student challenge. It's a javascript scheduler app. A simple calendar app for scheduling your work day. Add text to the text field and press the save button. The text is stored in local storage.",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Third-Party APIs",
      "jQuery",
      "CSS Frameworks with Bootstrap and Google Fonts",
      "jQuery UI and Day.js",
      "GitHub Pages",
    ],
    backgroundImage: "./img-7.jpg",
    githubLink: "https://itcreativeusa.github.io/smart-day-creator",
  },
  {
    title: "gogo-logo-mogo",
    content:
      "This gogo-logo-mogo is Node.js command-line application that takes user input to generate a logo and save it as an [SVG file]. The application prompts the user to select a color, shape, and text for the logo and save the generated SVG to a .svg file.",
    technologies: [
      "Object-Oriented Programming (OOP)",
      "Test-driven Development",
      "Promises",
      "Node.js",
      "ES6",
      "Inquirer",
      "Jest",
      "SVG",
    ],

    backgroundImage: "./img-8.jpg",
    githubLink: "https://github.com/itcreativeusa/gogo-logo-mogo",
  },
  {
    title: "my-pretty-portfolio",
    content:
      "This My-pretty-portfolio website was created as a boot camp every week student challenge. This website is an HTML & CSS portfolio page. The code of this portfolio page was created from scratch.",
    technologies: [
      "HTML",
      "CSS",
      "Responsive Design",
      "CSS Resets",
      "Pseudo-Classes",
      "Pseudo-Elements",
      "GitHub Pages",
    ],

    backgroundImage: "./img-9.jpg",
    githubLink: "https://itcreativeusa.github.io/my-pretty-portfolio",
  },
  {
    title: "amazing-history-quiz",
    content:
      "This Amazing-history-quiz app was created as a boot camp every week of student college. This app is a javascript quiz game. The code of this portfolio page was created from scratch.",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Web APIs",
      "Events",
      "Client-Side Storage",
      "GitHub Pages",
    ],

    backgroundImage: "./img-10.jpg",
    githubLink: "https://itcreativeusa.github.io/amazing-history-quiz",
  },
  {
    title: "horiseon-landing-page ",
    content:
      "This Horiseon-Landing-Page website was created as a boot camp every week student challenge. This website is an HTML & CSS landing page.",
    technologies: ["HTML", "CSS", "CSS layout", "Box Model", "GitHub Pages"],

    backgroundImage: "./img-11.jpg",
    githubLink: "https://itcreativeusa.github.io/horiseon-landing-page",
  },
  {
    title: "generate-pass-easy ",
    content:
      "This application is a Javascript random password generator. It was created as a boot camp every week student challenge. The password generator is easy to use. User need to press the 'Generate password' button and follow application instructions by answering each prompt.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Arrays and Functions",
      "Objects",
      "GitHub Pages",
    ],

    backgroundImage: "./img-12.jpg",
    githubLink: "https://itcreativeusa.github.io/generate-pass-easy",
  },
  {
    title: "css-snippet-cheatsheet",
    content:
      "This CSS-Snippet-Cheatsheet website was created as a boot camp every week for student challenges. This website is an HTML & CSS portfolio page. The code of this portfolio page was created from scratch. The page contains blocks of code the user may automatically select.",
    technologies: ["Node.js", "Inquirer", "MySQL"],

    backgroundImage: "./img-13.jpg",
    githubLink: "https://itcreativeusa.github.io/css-snippet-cheatsheet",
  },
  {
    title: "Validaying an Email - Regex Tutorial",
    content:
      "Regular expressions, or regex, are patterns written using a combination of special and literal characters. These special characters allow regex to be used to find patterns in strings, while the literal characters are used as exact matches for specific words or phrases.",
    technologies: [
      "Regex",
      "Gist",
      "Validation",
      "Anchors",
      "Quantifiers",
      "Character Classes",
      "Grouping and Capturing",
      "Character Escapes",
    ],
    backgroundImage: "./img-14.jpg",
    githubLink:
      "https://gist.github.com/itcreativeusa/6d24f96ad71f60c6c7b46aea62f94b5e",
  },
];

// We declare an object called styles that will contain a few objects for card and heading styles
const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
    paddingTop: 10,
  },
  title: {
    minHeight: 50,
    fontSize: "1.5rem",
    color: "black",
    fontWeight: "600",
  },
  heading: {
    background: "#cc4499",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2.25rem",
    color: "white",
    padding: "0 20px",
    textAlign: "center",
  },
  content: {
    fontWeight: "400",
    fontSize: "1.25rem",
    position: "relative",
    overflow: "hidden",
    boxSizing: "borderBox",
    color: "white",
  },
  technologies: {
    color: "black",
    fontWeight: "600",
    fontSize: "1.25rem",
    position: "relative",
    overflow: "hidden",
    boxSizing: "borderBox",
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function ProjectsAll() {
  return (
    <div style={styles.card}>
      <div className="row" style={{ margin: 20 }}>
        {cardData.map((card, index) => (
          <div key={index} className="col-md-12 col-lg-6 col-sm-12">
            <div
              className="card mb-4"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/${card.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="card-body" style={{ height: 450, padding: 50 }}>
                <h5 className="card-title" style={styles.title}>
                  {card.title}
                </h5>
                <p className="card-text" style={styles.content}>
                  {card.content}
                </p>
                <p
                  style={styles.technologies}
                  className="card-technologies"
                  id="test"
                >
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
    </div>
  );
}

export default ProjectsAll;
