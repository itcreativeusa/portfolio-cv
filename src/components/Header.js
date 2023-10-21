import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Style.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    fontSize: "1.25rem",
    backgroundColor: "#333",
    backgroundSize: "cover",
  },
};

function CustomNavbar() {
  return (
    <div style={styles.navbar}>
      <Navbar expand="md" variant="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              About Me
            </Nav.Link>
            <Nav.Link as={Link} to="/project-all">
              All projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Me
            </Nav.Link>
            <Nav.Link as={Link} to="/resume">
              My resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
