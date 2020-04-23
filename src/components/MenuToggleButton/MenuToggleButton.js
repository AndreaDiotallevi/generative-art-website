import React from "react";

const MenuToggleButton = ({ open, onClick, history }) => {
  const getButtonClassName = () => {
    let classes = "";
    if (history.location.pathname === "/") {
      classes += " is-home-button";
    }
    if (open) {
      classes += " menu-open";
    }

    return classes;
  };

  return (
    <button
      className={`toggle-button ${getButtonClassName()}`}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default MenuToggleButton;
