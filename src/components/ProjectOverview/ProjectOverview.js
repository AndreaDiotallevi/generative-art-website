import React from "react";

const ProjectOverview = ({ project }) => {
  const renderApis = () => {
    if (project.apis !== null) {
      return (
        <span>
          <p className="margin-left">
            <strong>External APIs: </strong>
            {project.apis}
          </p>
        </span>
      );
    }
  };

  return (
    <div className="project-overview-component">
      <h3 className="project-name">{project.name}</h3>
      <p className="project-overview">{project.overview}</p>
      <p>
        <strong>Stack: </strong>
        {project.devTechnologies}
      </p>
      {renderApis()}
      <p className="margin-left">
        <strong>Testing, CI, CD: </strong>
        {project.testingTechnologies}
      </p>
      <div className="project-anchors-container">
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectOverview;
