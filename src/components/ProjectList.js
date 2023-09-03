import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projets = projects.map((projet) => <ProjectItem key={projet.id} name={projet.name} about={projet.about} technologies={projet.technologies} />)

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projets}</div>
    </div>
  );
}

export default ProjectList;
