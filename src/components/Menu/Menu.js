import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const menuItems = [
  { name: "Web Development Portfolio", route: "/portfolio" },
  { name: "Generative Art", route: "/art" },
  { name: "Contact", route: "/contact" },
  { name: "Home", route: "/" },
];

const Menu = ({ open, onClick, history }) => {
  const getButtonClassName = () => {
    console.log("here");
    if (history.location.pathname === "/") {
      return "is-home-component";
    }
  };

  const renderList = () => {
    if (open) {
      return (
        <ul>
          {menuItems.map((item, index) => (
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
