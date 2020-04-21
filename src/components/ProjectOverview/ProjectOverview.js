import React from "react";

const ProjectOverview = ({ project }) => {
  const renderApis = () => {
    if (project.apis !== null) {
      return (
        <span>
          <p className="bold">External APIs: </p>
          <p className="margin-left">{project.apis}</p>
        </span>
      );
    }
  };

  return (
    <div className="project-overview-component">
      <div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-overview">{project.overview}</p>
        <span>
          <p className="bold">Stack: </p>
          <p className="margin-left">{project.devTechnologies}</p>
        </span>
        {renderApis()}
        <span>
          <p className="bold">Testing, CI, CD: </p>
          <p className="margin-left">{project.testingTechnologies}</p>
        </span>
      </div>
      <div>
        <span className="project-overview-links">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectOverview;
