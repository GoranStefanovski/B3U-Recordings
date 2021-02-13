import React from 'react'
import "./WidgetsRow.css"
import Widget from "./Widget";
import BayrImage from "./Genres/Bayr.png";
import piImage from "./Genres/3pi.png";
import Unrealisam from "./Genres/Unrealisam.png";


function WidgetsRow() {
    return (
        <div className="widgetsRow wrapper">
            <Widget
                image={BayrImage}
                title="Bayr"
                link="/"
            />
            <Widget
                image={piImage}
                title="3pi"
                link="/"
            />
            <Widget
                image={Unrealisam}
                title="Unrealisam"
                link="/"
            />
        </div>
    )
}

export default WidgetsRow;
