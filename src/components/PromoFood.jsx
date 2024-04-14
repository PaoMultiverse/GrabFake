import React from "react";
import icRate from "../assets/icon-rate.png";
import icClock from "../assets/icon-clock.png";
import icDot from "../assets/icon-dot.png";
import PromoFoodList from "./PromoFoodList";
import { Link } from "react-router-dom";
function PromoFood(props){
    return (
        <>
            <div className='card'>
              
                <img className='product--image' src={PromoFoodList[props.url]} alt="" />
                <h4>{props.name}</h4>
                <p>{props.type}</p>
                <p>
                  <img className='icon-in-food' src={icRate} alt="icon-rate" /> {props.rate}
                  <img className='icon-in-food' src={icClock} alt="icon-clock" /> {props.time}
                  <img className='icon-in-food' src={icDot} alt="icon-dot" /> {props.km}
                </p>
                <Link to="/StoreMeal">Click here</Link>
            </div>
        </>
    )
}
export default PromoFood;