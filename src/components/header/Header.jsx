import React from 'react'

// Here we are importing scss file
import './Header.scss'
import { Link } from 'react-router-dom'
import image from '../../img/image.svg';

const header = () => {
    return (
        <div className="main">
            <div className="appLogo">
                <img src={image} alt="logo" />
            </div>
            <div className="menu">
                <ul className="menuItems">
                    {/* 
                        Link tag is treated as a tag in react so in sass use a for Link in styling
                    */}
                    <li>
                        <Link to="/">Home</Link >
                    </li>

                    <li><Link to="/about">About</Link ></li>
                    {/* <li>Services</li>
                    <li>Contact</li>
                    <li>Blog</li> */}
                </ul>
            </div>
        </div>
    )
}

export default header;