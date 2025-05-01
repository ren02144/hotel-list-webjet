import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img
          src="https://media.webjet.com.au/ui/images/webjet-logo-au-red.png"
          alt="Webjet"
          className="logo"
        />
      </div>
    </header>
  );
}

export default Header;
