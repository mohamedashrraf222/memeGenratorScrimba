import React from "react";
import "../index.css"

export default function Header() {
    return(
        <div className="header">
            <div><img src="troll.svg" alt="troll face" /><h3 className="memeGen">Meme Generator</h3></div>
            <h3 className="react-course">React course - project 3</h3>
        </div>
    )
}