import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const getLinkClassName = (route) => {
    if (props.location.pathname === "/") {
      return "is-home";
    }
  };

  const getComponentClassName = (route) => {
    if (props.location.pathname === "/") {
      return "is-home-component";
    }
  };

  return (
    <div
      id="navbar-component"
      className={`navbar-component ${getComponentClassName()}`}
    >
      <div id="navbar-container">
        <div className="navbar-left">
          <Link to="/">
            <h1
              id="navbar-title"
              className={`navbar-title ${getLinkClassName()}`}
            >
              ANDREA DIOTALLEVI
            </h1>
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/portfolio">
            <p
              id="navbar-portfolio"
              className={`navbar-text ${getLinkClassName()}`}
            >
              Dev Portfolio
            </p>
          </Link>
          <a
            href="https://medium.com/@andreadiotallevi"
            target="_blank"
            rel="noopener noreferrer"
            className={`navbar-text ${getLinkClassName()}`}
          >
            Blog
          </a>
          <Link to="/art">
            <p
              id="navbar-artworks"
              className={`navbar-text ${getLinkClassName()}`}
            >
              Generative Art
            </p>
          </Link>
          <Link to="/contact">
            <p
              id="navbar-contact"
              className={`navbar-text ${getLinkClassName()}`}
            >
              Contact
            </p>
          </Link>
          {/* <Link to="/">
            <p id="navbar-home" className={`navbar-text ${getLinkClassName("/")}`}>
              Home
            </p>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
