import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Style.css";

const styles = {
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: `url("./menu-bg.jpg")`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    height: "500px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "2rem",
    textTransform: "uppercase",
    transition: "color 0.3s", // Smooth transition on color change
  },
  linkHover: {
    color: "#ff3b83",
  },
};

function Header() {
  return (
    <div style={styles.heading}>
      <header className="header">
        <h1>
          <Link to="/" style={styles.link} activeStyle={styles.linkHover}>
            Kateryna's Stetsenko Portfolio
          </Link>
        </h1>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </header>
    </div>
  );
}

export default Header;
