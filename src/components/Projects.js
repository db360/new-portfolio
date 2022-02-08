import React from "react";
import Gallery from "./Gallery";
import GridProjects from "./GridProjects";
import "./styles/Projects.css";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="cont-titulo">
          <h1>
            <span>P</span>
            <span>E</span>
            <span>R</span>
            <span>S</span>
            <span>O</span>
            <span>N</span>
            <span>A</span>
            <span>L</span> <span>P</span>
            <span>R</span>
            <span>O</span>
            <span>Y</span>
            <span>E</span>
            <span>C</span>
            <span>T</span>
            <span>S</span>
          </h1>
          <Gallery />
        </div>
      </div>
      <GridProjects />
    </>
  );
};

export default Projects;
