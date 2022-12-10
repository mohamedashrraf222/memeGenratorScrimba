import React from "react";
import { useState } from "react"
import "../index.css"
import memesData from "./memeData";



export default function Meme() {
    const [img, changeImg] = useState(memesData.data.memes[1].url)

    const [data, setData] = useState({
        firstInput: "",
        secondInput: ""
    })

    function change(e) {
        const { name, value } = e.target
        setData((prev) => {

            return {
                ...prev,
                [name]: value
            }
        })
    }

    const [ updatedData , setUpdate ] = useState({
        updatedTop : "",
        updatedbottom : ""
    })
        


    function random() {
        let number = Math.floor(Math.random() * 100)
        setUpdate((prev)=>{
            return {
                updatedTop : data.firstInput,
                updatedbottom : data.secondInput
            }
        })
        changeImg(memesData.data.memes[number].url)

    }

    

    return (
        <div >
            <div className="form-container">
                <input
                    type="text"
                    id="firstInput"
                    name="firstInput"
                    placeholder="First Input"
                    onChange={change}
                    value={data.firstInput}
                />
                <input
                    type="text"
                    id="secondtInput"
                    name="secondInput"
                    onChange={change}
                    placeholder="Second Input"
                    value={data.secondInput}
                />
                <button
                    onClick={random}>
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={img} className="meme--image" />
                <h2 className="meme--text top">{updatedData.updatedTop}</h2>
                <h2 className="meme--text bottom">{updatedData.updatedbottom}</h2>
            </div>

        </div>
    )
}