import React from "react";

const pageTitles = {
  "/": "Software Engineer and Generative Artist",
  "/art": "Generative Artist and Creative Coder",
  "/contact": "About Me",
  "/portfolio": "Full Stack Software Developer",
};

const PageTitle = ({ history }) => {
  const getComponentClassName = (route) => {
    if (history.location.pathname === "/") {
      return "is-home-component";
    }
  };

  const getDescriptionClassName = (route) => {
    if (history.location.pathname === "/") {
      return "is-home-description";
    }
  };

  return (
    <div className={`page-title-component ${getComponentClassName()}`}>
      <div className="page-title-container">
        <h2 className={`page-title ${getDescriptionClassName()}`}>
          {pageTitles[history.location.pathname]}
        </h2>
      </div>
    </div>
  );
};

export default PageTitle;
