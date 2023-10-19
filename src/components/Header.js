import React from "react";

// Here we import bootstrap for access to some additional styling
import "bootstrap/dist/css/bootstrap.min.css";
// Here import a CSS file as a dependency
import "../styles/Style.css";

function Header() {
  // Returning the header component with the title
  return (
    <header className="header">
      <h1>Kateryna's Stetsenko Portfolio &#128640;</h1>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
    </header>
  );
}

export default Header;
