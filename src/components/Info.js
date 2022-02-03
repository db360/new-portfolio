import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Info.css'

const Info = () => {
  return (
        <div className='info-section'>
            <div className='info-about'>
                <h3>About <span>DAVID</span></h3>
                <p>I grew up in a music-loving family, this, together with my passion for computers and technology, introduced me to music production (Daw's, Synths,Drum Machines, etc). With my first salary, I bought my first set of turntables, and since then turntablism has been my passion.
                <br />
                <br />
                After high school, I graduated as a sound technician at I.E.S. Politécnico Jesús Marín in Málaga. Always driven by my passion for music, I have done many different jobs, car salesman, receptionist, waiter, chef, transporter, audio-visual equipment assembly, sound technician... all of which have been a bridge to the creation of my small audio-visual studio.
                <br />
                <br />
                Lately, under lockdown after my last job, I've been studying web development, focusing on technologies like HTML, CSS3, SASS, JavaScript, MySQL, MongoDb, node.js and React.js. Also the different applications of the BlockChain (Web3) to the audio-visual world.</p>
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
