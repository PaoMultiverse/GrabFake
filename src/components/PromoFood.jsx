import React from "react";
import icRate from "../assets/icon-rate.png";
import icClock from "../assets/icon-clock.png";
import icDot from "../assets/icon-dot.png";
import PromoFoodList from "./PromoFoodList";
import { Link } from "react-router-dom";
function PromoFood(props){
    return (
        <><Link to="/StoreMeal" style={{textDecoration:"none"}}>
            <div className='card'>
                <div className="pro-img-box">
                    <img className='img-food' src={PromoFoodList[props.url]} alt="" />
                </div>
                <h4>{props.name}</h4>
                <p>{props.type}</p>
                <p>
                  <img className='icon-in-food' src={icRate} alt="icon-rate" /> {props.rate}
                  <img className='icon-in-food' src={icClock} alt="icon-clock" /> {props.time}
                  <img className='icon-in-food' src={icDot} alt="icon-dot" /> {props.km}
                </p>
            </div></Link>
        </>
    )
}
export default PromoFood;