import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/music">Music</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
