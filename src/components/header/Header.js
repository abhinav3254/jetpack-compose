import React from 'react'

// Here we are importing scss file
import './Header.scss'
import image from '../../img/image.svg';

const header = () => {
    return (
        <div className="main">
            <div className="appLogo">
                <img src={image} alt="logo" />
            </div>
            <div className="menu">
                <ul className="menuItems">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>
        </div>
    )
}

export default header;