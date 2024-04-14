import React, { useEffect, useState } from "react";

import "./StyleSheet.css";
import logo1 from "../assets/logo-grabfood.svg" 
import logo2 from "../assets/logo-grabfood-white.svg" 
import { Link, useLocation } from "react-router-dom";
function Navbar(){

    const[color,setColor]=useState(false)
    const location = useLocation();

    const isHomePage = location.pathname === "/"

    const changeBackGround = () => {
        if (window.scrollY >= 70 && isHomePage) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll",changeBackGround)
    useEffect(() => {
        window.addEventListener("scroll", changeBackGround);
        return () => {
            window.removeEventListener("scroll", changeBackGround);
        };
    }, [isHomePage]);
    return (
        <div 
            className={color ? "container-navbar shadow active" : "container-navbar"}>
                
            <div className="headerContainer p-3 container-sm d-flex justify-content-between align-items-center">
            
            <div className="logo-box">
            {isHomePage ? (
                        <Link to="/">
                            <img
                                className="logoApp"
                                src={color ? logo1 : logo2}
                                alt="" />
                        </Link>
                    ) : (
                        <Link to="/">
                            <img
                                className="logoApp"
                                src={color ? logo2 : logo1}
                                alt="" />
                        </Link>
                    )}
            </div>

            <div className="btn-group">
                <div className="btn-child btn btn-light rounded cart" >
                    <a href="#" >
                    </a>
                </div>
                <div className="btn-child btn btn-light rounded logIn">Đăng nhập/ Đăng ký</div>
                <div className="btn-child btn btn-light rounded lang">EN/</div>
            </div>
            </div>
        </div>
    )
}

export default Navbar;