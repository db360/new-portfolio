import React from 'react';
import { Link } from 'react-router-dom';
import { Close } from '@material-ui/icons';
import './styles/Modal.css';

const Modal = ({showModal}) => {
  return (
    <div className='modal'>
        <div className="close-modal">
            <Close className='cm' onClick={showModal} />
        </div>
        <div className='cart'>
            <Link to='/'>Websites</Link>
        </div>
        <div className='cart'>
            <Link to='/'>Designs</Link>
        </div>
        <div className='cart'>
            <Link to='/'>Templates</Link>
        </div>
        <div className='cart'>
            <Link to='/'>Music</Link>
        </div>
    </div>
);
};

export default Modal;
