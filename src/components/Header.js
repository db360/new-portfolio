import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { motion } from "framer-motion";

import "./styles/Header.css";
import logo from "../components/assets/images/logo-dab.png";

import { Close, MenuOutlined } from "@material-ui/icons";

const titleVariants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: { y: 0, x:0, opacity: 100 },
  transition: {
    delayChildren: 1,
    staggerChildren: 1,
    staggerDirection: -1,
    duration: 2,
  },
};

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const openMenu = () => {
    setNavActive(!navActive);
  };

  return (
    <motion.div
      variants={titleVariants}
      transition={titleVariants.transition}
      initial="hidden"
      animate="show"
      className="header"
    >
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        {/* <span>DAVID</span> */}
      </div>
      <nav>
        <ul className={navActive ? "list-items active" : "list-items"}>
          <div className="close-icon">
            <Close className="close" onClick={openMenu} />
          </div>
          {/* <li><Link to='/works'>Works</Link></li> */}
          <li>
            <NavLink  to="/" className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
          >Home</NavLink>
          </li>
          <li>
            <NavLink  to="/about" className={({ isActive }) =>
              isActive ? 'active' : undefined
            }
          >About</NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) =>
              isActive ? 'active' : undefined
            }>Projects</NavLink>
          </li>
          <li>
            <NavLink to="/music" className={({ isActive }) =>
              isActive ? 'active' : undefined
            }>Music</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) =>
              isActive ? 'active' : undefined
            }>Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="hamburger-icon">
        <MenuOutlined className="icon" onClick={openMenu} />
      </div>
    </motion.div>
  );
};

export default Header;
