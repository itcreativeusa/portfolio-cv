import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import a few of the font awesome icons for footer
import {
  faLinkedin as fabLinkedin,
  faGithub as fabGithub,
} from "@fortawesome/free-brands-svg-icons";
//Footer component with social media links
const styles = {
  footer: {
    background: "#333",
    color: "#fff",
    padding: "20px 0",
    textAlign: "center",
  },
  icon: {
    margin: "0 10px",
    fontSize: "1.5rem",
    transition: "color 0.3s",
  },
  iconHover: {},
};
//Footer component with social media links
function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Linkedin & Github:</p>
      <a
        href="https://www.linkedin.com/in/katestetsenko/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.icon}
        id="linkedin"
      >
        <FontAwesomeIcon icon={fabLinkedin} />
      </a>
      <a
        href="https://github.com/itcreativeusa/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.icon}
        id="github"
      >
        <FontAwesomeIcon icon={fabGithub} />
      </a>
    </footer>
  );
}

export default Footer;
