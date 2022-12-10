import React from "react";
import "../index.css"

export default function YesOrNo() {

    const [yesOrNo, setYesOrNo] = React.useState(true)

    function change() {
        setYesOrNo( x => !x )
    }

    return (
        <div className="container--yesOrNoo">
            <h1>click on the circle to change it</h1>
            <div className="dot" onClick={change}>
                <h2>{yesOrNo ? "yes" : "no"}</h2>
            </div>
        </div>
    )
}