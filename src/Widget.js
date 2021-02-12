import React from 'react'
import "./Widget.css"

function Widget({ image, title, link, }) {
    return (
        <div className="widget">
            <img className="rotateimg180" src={image} alt={title} />

            <h3>{title}</h3>
            <br />

        </div>
    )
}

export default Widget
