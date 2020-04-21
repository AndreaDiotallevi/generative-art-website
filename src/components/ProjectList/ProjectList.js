import React from "react";
import ProjectGif from "../ProjectGif/ProjectGif";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import projects from "../../utils/projects";

const ProjectList = () => {
  const renderList = () => {
    return projects.map((project) => (
      <div className="project-list-item" key={project.name}>
        <ProjectGif project={project} />
        <ProjectOverview project={project} />
      </div>
    ));
  };

  return <div className="project-list-component">{renderList()}</div>;
};

export default ProjectList;
