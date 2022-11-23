import React from "react";
import '../style.css'
import meme from '../images/Troll Face.png'

export default function Nav(){
    return(
        <div className="nav">
            <img src={meme} alt="Broken" className="img-icon"/>
            <span className="title-body">
                <span className="title">meme generator</span>
                <span className="title2">react course - project 3</span>
            </span>
        </div>
    )
}