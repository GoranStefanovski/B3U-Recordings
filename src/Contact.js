import React from 'react';
import "./Contact.css";
import Logo from "./b3uLogo.png";

function Contact() {
    return (
        <div className="contact">
            <div className="contact__logo">
                <img src={Logo} alt="B3U" />
            </div>
            <div className="contact__text">
                <p>Phone : +38975256858</p>
                <p>E-mail : tevidma@gmail.com</p>
            </div>
        </div>
    )
}

export default Contact
