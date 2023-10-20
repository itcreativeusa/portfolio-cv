import React from "react";
//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Style.css";

const styles = {
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    fontWeight: "600",
    background: `url("./menu-bg.jpg")`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    height: "500px",
  },
};

function Header() {
  return (
    <div style={styles.heading}>
      <header className="header">
        <h1>
          <a href="/">Kateryna's Stetsenko Portfolio</a>
        </h1>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </header>
    </div>
  );
}

export default Header;
