import React from "react";
import "../css/mainResume.css";
// import background1 from "../img/video2.mp4";
import background1 from "../img/background1.mp4";
import ResponsiveAppBar from "./ResponsiveAppBar";

function Videobackground() {
    return (
        <div id="/">
            
            <video autoPlay loop muted id="video">
                <source src={background1} type="video/mp4" />
            </video>
        </div>
    );
}

export default Videobackground;
