import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import "./styles/Section.css";
import { motion } from "framer-motion";

import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube } from "react-icons/ai";
import { ImSoundcloud } from "react-icons/im";

const Section = () => {
  const [modalActive, setModalActive] = useState(false);

  const showModal = () => {
    setModalActive(!modalActive);
  };

  const titleVariants = {
    hidden: {
      x: -750,
      opacity: 0,
    },
    show: { x: 0, opacity: 100 },
    transition: {
      staggerChildren: 1,
      duration: 1,
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <>
      <div className="section">
        <motion.div
          variants={titleVariants}
          transition={titleVariants.transition}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={listItem} className="main-header">
            My Name is <span>David Martínez</span>
          </motion.h1>
          <motion.p variants={listItem} className="main-status">
            I am a Sound Tech who loves Music and Technology, i've been playing
            with hardware since I was a kid, lately with 3D design and
            animation, and now I've found that i can blend all my passions
            together trought Web Development.
          </motion.p>
          <motion.div variants={listItem} className="main-btn">
            <Link onClick={showModal} to="/">
              See My Works
            </Link>
          </motion.div>

          {modalActive && <Modal showModal={showModal} />}
        </motion.div>
      </div>
      <div className="icons">
        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/dabeat360" className="social-icon">
           {<AiOutlineInstagram size={40} />}
        </a>
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/dabmartinez/" className="social-icon">
           {<AiOutlineLinkedin size={40} />}
        </a>
        <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UC9iBk4HsF-7Ehm7zj_WsnOQ/featured" className="social-icon">
           {<AiOutlineYoutube size={40} />}
        </a>
        <a rel="noreferrer" target="_blank" href="https://soundcloud.com/dab360" className="social-icon">
           {<ImSoundcloud size={40} />}
        </a>
        </div>
    </>
  );
};

export default Section;
