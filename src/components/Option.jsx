import ImageOption from "../assets/placeholder-restaurant.jpg"
import React from "react";

function Option(prop){
    return (
        <>
            <div className="option">
                <img id="imgOption" src={ImageOption} alt="" />
                <div className="overlay"></div>
                <div className="imgText">{prop.name}</div>
            </div>
        </>
    )
}

export default Option;