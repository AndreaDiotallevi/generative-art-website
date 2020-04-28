import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import routes from "../../utils/routes";

const Menu = ({ open, onClick, history }) => {
  const pathname = history.location.pathname;

  const getButtonClassName = () => {
    if (pathname === "/") {
      return "is-home-component";
    }
  };

  const getLinkClassName = (url) => {
    let classes = "";

    if (pathname.includes(url) && url !== "/") {
      classes += "link-active";
    } else if (pathname === "/" && url === "/") {
      classes += "link-active";
    }

    return classes;
  };

  const renderList = () => {
    if (open) {
      return (
        <ul>
          <React.Fragment>
            {routes.map((item, index) => (
              <MenuItem
                key={index}
                onClick={onClick}
                item={item}
                history={history}
              />
            ))}
            <a
              href="https://medium.com/@andreadiotallevi"
              target="_blank"
              rel="noopener noreferrer"
              className={`menu-item ${getLinkClassName()}`}
            >
              Blog
            </a>
          </React.Fragment>
        </ul>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={`menu-component ${getButtonClassName()}`}>
      {renderList()}
    </div>
  );
};

export default Menu;
