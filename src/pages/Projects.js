import React, { useEffect } from "react";
import { projectsData } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
export const Projects = () => {
  return (
    <div className="projects">
      <div className="section-title">Projects :</div>
      {projectsData.map((o) => (
        <ProjectCard key={o.id} data={o} />
      ))}
    </div>
  );
};
