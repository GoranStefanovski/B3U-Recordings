import React from 'react'
import "./ArtistDj.css"

function ArtistDj({ image, artistDj, genre }) {
    return (
        <div className="artistDj">
            <img className="image" src={image} alt={artistDj} />
            <div className="middle">
                <div className="text">
                    <h4>{artistDj}</h4>
                    <h5>{genre}</h5>
                </div>
            </div>
        </div>
    )
}

export default ArtistDj
