import React from 'react';
import "./Header.css";
import logoB3u from './b3uLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div className="header">
            <h4>Home</h4>
            <h4>Artists</h4>
            <h4>Events</h4>
            <img src={logoB3u} alt="/" />
            <h4>Gallery</h4>
            <h4>About</h4>
            <h4>Contact</h4>
        </div>

    )
}

export default Header
