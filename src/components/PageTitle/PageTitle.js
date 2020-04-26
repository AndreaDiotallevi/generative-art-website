import React from "react";
import routes from "../../utils/routes";

const PageTitle = ({ history }) => {
  const pathname = history.location.pathname;

  const getComponentClassName = () => {
    if (pathname === "/") {
      return "is-home-component";
    }
  };

  const getDescriptionClassName = () => {
    if (pathname === "/") {
      return "is-home-description";
    }
  };

  const getPageTitle = () => {
    const baseUrl = "/" + pathname.split("/")[1];
    const route = routes.filter((route) => route.baseUrl === baseUrl)[0];
    return route.pageTitle;
  };

  return (
    <div className={`page-title-component ${getComponentClassName()}`}>
      <div className="page-title-container">
        <h2 className={`page-title ${getDescriptionClassName()}`}>
          {getPageTitle()}
        </h2>
      </div>
    </div>
  );
};

export default PageTitle;
