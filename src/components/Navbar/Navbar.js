import React from 'react';
import './navbar.scss';


import logo from "../../logo.svg";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="city tours company" />
            <ul>
                <li><a href="/" className="nav-link active">Home</a></li>
                <li><a href="/" className="nav-link">About</a></li>
                <li><a href="/" className="nav-link">Tours</a></li>
            </ul>
        </nav>
    )
}
