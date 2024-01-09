import React from 'react'
import './Home.scss'
import manImage from '../../../img/man.jpg';

const home = () => {
    return (
        <div className='home'>
            <img src={manImage} alt="Man" />
            <div className="rightBody">
                <h1>Design confidently.</h1>
                <p>UsabilityHub is a remote user research platform that takes the guesswork out of design decisions by validating them with real users.</p>
                <button>Get Started</button>
            </div>
        </div>
    )
}

export default home