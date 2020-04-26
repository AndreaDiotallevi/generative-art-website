import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item, onClick, history }) => {
  const pathname = history.location.pathname;

  const getLinkClassName = (url) => {
    let classes = "";

    if (pathname.includes(url) && url !== "/") {
      classes += "link-active";
    } else if (pathname === "/" && url === "/") {
      classes += "link-active";
    }

    return classes;
  };

  return (
    <Link
      to={`${item.baseUrl}`}
      className={`menu-item ${getLinkClassName(item.baseUrl)}`}
      onClick={onClick}
    >
      {item.menuName}
    </Link>
  );
};

export default MenuItem;
