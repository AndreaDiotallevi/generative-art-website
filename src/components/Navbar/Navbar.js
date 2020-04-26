import React from "react";
import { Link } from "react-router-dom";
import MenuToggleButton from "../MenuToggleButton/MenuToggleButton";
import routes from "../../utils/routes";

const Navbar = ({ open, onClick, history }) => {
  const pathname = history.location.pathname;

  const getLinkClassName = (url) => {
    let classes = "";

    if (pathname === "/") {
      classes += " is-home";
    }

    if (pathname.includes(url) && url !== "/") {
      classes += " link-active";
    } else if (pathname === "/" && url === "/") {
      classes += " link-active";
    }

    return classes;
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
          {routes.map((route) => (
            <Link
              to={route.baseUrl}
              className={`navbar-link ${getLinkClassName(route.baseUrl)}`}
              key={route.menuName}
            >
              {route.menuName}
            </Link>
          ))}
          <a
            href="https://medium.com/@andreadiotallevi"
            target="_blank"
            rel="noopener noreferrer"
            className={`navbar-link ${getLinkClassName()}`}
          >
            Blog
          </a>
          <MenuToggleButton open={open} onClick={onClick} history={history} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
