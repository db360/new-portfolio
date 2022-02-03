import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import './styles/Section.css'

import { motion } from 'framer-motion';

const Section = () => {
  const [modalActive, setModalActive] = useState(false);

  const showModal = () => {
    setModalActive(!modalActive)
  }
  return (
        <div className='section'>

          <div>
            <h1 className='main-header'>My Name is <span>David Martínez</span></h1>
            <p className='main-status'>I am a Sound Tech who loves Music and Technology, i've been playing with hardware since I was a kid, lately with 3D design and animation, and now I've found that i can blend all my passions together trought Web Development.</p>
            <div className="main-btn">
              <Link onClick={showModal} to="/">See My Works</Link>
            </div>

            {modalActive && <Modal showModal={showModal}/>}

          </div>

        </div>
    );
};

export default Section;
