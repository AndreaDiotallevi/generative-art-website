import React from "react";
import { Link } from "react-router-dom";

const routes = ["portfolio", "art", "contact", "home"];

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
          <ul>
            {routes.map((route) => (
              <Link
                to={`/${route}`}
                className={`navbar-link ${getClassName()}`}
                key={route}
              >
                <p
                  id={`navbar-${route}`}
                  className={`navbar-link ${getClassName()}`}
                >
                  {route}
                </p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
