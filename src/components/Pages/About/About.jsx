// rafce shortcut
import React from 'react'
import aboutImage from '../../../img/about.jpg';
import './About.scss'


const about = () => {
    return (
        <div className='aboutPage'>
            <div className="logoDiv">
                <img src={aboutImage} alt="Image" />
            </div>
            <div className="about">
                <h1>ABOUT US</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, maiores? Fuga, unde, soluta assumenda ea ut voluptates sapiente reprehenderit perspiciatis, maiores libero natus? Fugiat nisi qui excepturi adipisci facere optio.
                </p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default about