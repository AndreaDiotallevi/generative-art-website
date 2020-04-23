import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import routes from "../../utils/routes";

const Menu = ({ open, onClick, history }) => {
  const getButtonClassName = () => {
    if (history.location.pathname === "/") {
      return "is-home-component";
    }
  };

  const renderList = () => {
    if (open) {
      return (
        <ul>
          {routes.map((item, index) => (
            <MenuItem key={index} onClick={onClick} item={item} />
          ))}
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
