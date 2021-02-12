import React from 'react'
import "./Tracks.css"
import ReactPlayer from "react-player";

function Trakcs({ srcTrack }) {
    return (
        <div className="tracks">
            <ReactPlayer className="player" url="https://soundcloud.com/b3u_recordings/ls-of-a" />
            <ReactPlayer url="https://soundcloud.com/b3u_recordings/ls-of-a" />
            <ReactPlayer url="https://soundcloud.com/b3u_recordings/ls-of-a" />

        </div>
    )
}

export default Trakcs
