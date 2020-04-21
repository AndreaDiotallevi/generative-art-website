import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const getClassName = () => {
    if (props.location.pathname === "/") {
      return "home";
    }
  };

  return (
    <div id="navbar-component" className={`navbar-component ${getClassName()}`}>
      <div id="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <h1 id="navbar-title" className={`navbar-title ${getClassName()}`}>
              ANDREA DIOTALLEVI
            </h1>
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/art" className={`navbar-link ${getClassName()}`}>
            <p id="navbar-artworks" className={`navbar-text ${getClassName()}`}>
              Generative Art
            </p>
          </Link>
          <Link to="/dev" className={`navbar-link ${getClassName()}`}>
            <p id="navbar-dev" className={`navbar-text ${getClassName()}`}>
              Dev Portfolio
            </p>
          </Link>
          <Link to="/" className={`navbar-link ${getClassName()}`}>
            <p id="navbar-home" className={`navbar-text ${getClassName()}`}>
              Home
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
