import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

//windowSize Hook
import useWindowSize from "./hooks/useWindowsSize";

//Components 👇
import Header from "./components/Header";
import Info from "./components/Info";
import Section from "./components/Section";
import Test from "./components/Testimonials";
import Contact from "./components/Contact";
import Player from "./components/Player";
import Projects from "./components/Projects";

function App() {

  //Hook
  const size = useWindowSize();
  //REF
  const app = useRef();
  const scrollContainer = useRef();
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
    <div ref={app} className="App">
      <div ref={scrollContainer} className="scroll">
        <Header />
        <Routes>

          <Route
            path="/"
            element={
              <>
                <Section />
                <Info />
                <Test />
                <Player />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact/>
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Projects />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
