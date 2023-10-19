import React from "react";
import { Link } from "react-router-dom";
//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/Style.css";

const styles = {
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `url("./menu-bg.jpg")`,
    backgroundSize: "contain",
    backgroundRepeat: "repeat",
    minHeight: "300px",
    lineHeight: "1.5",
    height: "300px",
    fontSize: "2rem",
    fontWeight: "600",
  },
};

function CustomNavbar() {
  return (
    <div style={styles.heading}>
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
