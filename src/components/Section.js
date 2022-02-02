import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import './styles/Section.css'

const Section = () => {
  const [modalActive, setModalActive] = useState(false);

  const showModal = () => {
    setModalActive(!modalActive)
  }
  return (
        <div className='section'>

          <div>
            <h1 className='main-header'>My Name is <span>David Martínez</span></h1>
            <p className='main-status'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In saepe repellat magni! Minus ipsa sequi distinctio asperiores cum pariatur magni, enim laboriosam est perspiciatis a? Veniam laudantium perspiciatis nostrum dicta.</p>
            <div className="main-btn">
              <Link onClick={showModal} to="/">See My Works</Link>
            </div>

            {modalActive && <Modal showModal={showModal}/>}

          </div>

        </div>
    );
};

export default Section;
