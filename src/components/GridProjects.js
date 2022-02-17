import React from "react";
import "./styles/GridProjects.css";

import projects from "./assets/projects";
import { Link } from "react-router-dom";

const GridProjects = () => {

  return (
    <div className="grid-container">
      <div className="grid">
        {projects.map(project=>(
          <a className="card" key={project.id} href={project.url}  target="_blank" rel="noreferrer">
            <img src={project.img} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <div className="card__header-text">
            <h3 className="card__title">{project.name}</h3>
            <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span>
            <span className="card__status">1 month ago</span>
          </div>
        </div>
        <p className="card__description">{project.desc}</p>
      </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GridProjects;
