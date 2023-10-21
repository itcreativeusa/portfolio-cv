import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Style.css";

function Header() {
  return (
    <div className="heading">
      <header className="header">
        <h1>
          <Link
            to="/"
            className="link"
            activeStyle={{ color: "yourActiveColor" }}
          >
            Kateryna's Stetsenko Portfolio
          </Link>
        </h1>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </header>
    </div>
  );
}

export default Header;
