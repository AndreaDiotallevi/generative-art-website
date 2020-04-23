import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item, onClick }) => {
  return (
    <Link to={`${item.baseUrl}`} className="menu-item" onClick={onClick}>
      {item.menuName}
    </Link>
  );
};

export default MenuItem;
