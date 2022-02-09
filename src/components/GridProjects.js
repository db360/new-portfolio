import React from "react";
import "./styles/GridProjects.css";

import projects from "./assets/projects";

const GridProjects = () => {

  return (
    <div className="grid-container">
      <div className="grid">
        {projects.map(project=>(
          <div className="card" key={project.id}>
            <img className="image" src={project.img} alt=""/>
            <div className="title-desc">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridProjects;
