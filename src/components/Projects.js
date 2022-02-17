import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useWindowSize from "../hooks/useWindowsSize";
import Gallery from "./Gallery";
import GridProjects from "./GridProjects";
import "./styles/Projects.css";

const Projects = ({scrollContainer}) => {
  const size = useWindowSize();
  //REF
  const app = useRef();
 const location = useLocation();
  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    // console.log(size.height)
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [size.height, location.pathname]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, [location.pathname]);

  const skewScrolling = () => {
    skewConfigs.current = window.scrollY;
    skewConfigs.previous +=
      (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
    skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

    // Variables for acceleration and velocity
    const difference = skewConfigs.current - skewConfigs.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //
    scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0)`;

    requestAnimationFrame(() => skewScrolling());
  };
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
