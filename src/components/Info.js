import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Info.css'

const Info = () => {
  return (
        <div className='info-section'>
            <div className='info-about'>
                <h3>About <span>DAVID</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi beatae officia rem sed, quo minus fuga laborum dicta maiores voluptates, eum ea mollitia! Culpa eaque quo dignissimos exercitationem quas excepturi, temporibus accusamus adipisci sapiente dolores repellat corporis harum, ab dicta doloribus nostrum, distinctio eveniet! Fugit pariatur velit odio dolorum aut, asperiores assumenda consequatur quo ratione similique minus provident nam. Autem, distinctio eum itaque asperiores sed quibusdam tenetur sit repellendus consequatur, officia corrupti, blanditiis soluta!</p>
                <div className="info-btn">
                    <Link to="/">More</Link>
                </div>
            </div>
            <div className='info-content'>
                <h1>Who is David</h1>

                <p>Dj and Producer</p>
                <p>3D Designer</p>
                <p>UI & UX Designer</p>
                <p>Web Development</p>
                <p>JavasCript & React</p>
                <p>Three.js</p>
                <p>Web3</p>
                <p>MySql</p>
            </div>
        </div>
    );
};

export default Info;
