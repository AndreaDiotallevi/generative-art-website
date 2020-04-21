import React from "react";

const pageTitles = {
  "/art": "Generative Artist and Creative Coder",
  "/contact": "About Me",
  "/portfolio": "Full Stack Software Developer",
};

const PageTitle = ({ history }) => {
  if (history.location.pathname === "/") {
    return null;
  }

  return (
    <div className="page-title-component">
      <div className="page-title-container">
        <h2 className="page-title">{pageTitles[history.location.pathname]}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
