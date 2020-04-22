import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item, onClick }) => {
  return (
    <Link to={`${item.route}`} className="menu-item" onClick={onClick}>
      {item.name}
    </Link>
  );
};

export default MenuItem;
