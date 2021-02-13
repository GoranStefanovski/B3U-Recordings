import React from 'react';
import "./Header.css";
import logoB3u from './b3uLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="header">
            <h4>
                <Link id="btn" to={'/home'}>

                    Home
                </Link>
            </h4>
            <h4>
                <Link id="btn" to={'/artists'}>
                    Artists

            </Link>
            </h4>
            <h4>
                <Link id="btn" to={'/evenets'}>
                    Events
                    </Link>
            </h4>
            <img src={logoB3u} alt="/" />
            <h4>
                <Link id="btn" to={'/gallery'}>
                    Gallery
                    </Link>
            </h4>
            <h4>
                <Link id="btn" to={'/about'}>
                    About
                    </Link>
            </h4>
            <h4>
                <Link id="btn" to={'/contact'}>

                    Contact
                    </Link>
            </h4>
        </div>

    )
}

export default Header
