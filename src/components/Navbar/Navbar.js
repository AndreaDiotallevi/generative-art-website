import React from "react";
import { Link } from "react-router-dom";
import MenuToggleButton from "../MenuToggleButton/MenuToggleButton";

const Navbar = ({ open, onClick, history }) => {
  const getLinkClassName = () => {
    if (history.location.pathname === "/") {
      return "is-home";
    }
  };

  const getComponentClassName = () => {
    if (history.location.pathname === "/") {
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
          <Link to="/portfolio" className={`navbar-link ${getLinkClassName()}`}>
            Web Development Portfolio
          </Link>
          <Link to="/art" className={`navbar-link ${getLinkClassName()}`}>
            Generative Art
          </Link>
          <a
            href="https://medium.com/@andreadiotallevi"
            target="_blank"
            rel="noopener noreferrer"
            className={`navbar-link ${getLinkClassName()}`}
          >
            Blog
          </a>
          <Link to="/contact" className={`navbar-link ${getLinkClassName()}`}>
            Contact
          </Link>
          <Link to="/" className={`navbar-link ${getLinkClassName()}`}>
            Home
          </Link>
          <MenuToggleButton open={open} onClick={onClick} history={history} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
