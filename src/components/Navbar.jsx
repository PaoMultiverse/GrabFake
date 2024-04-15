import React, { useEffect, useState } from "react";
import "./StyleSheet.css";
import logo1 from "../assets/logo-grabfood.svg" 
import logo2 from "../assets/logo-grabfood-white.svg" 
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [color, setColor] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const changeBackground = () => {
        if (window.scrollY >= 70 && isHomePage) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, [isHomePage]);

    return (
        <div className={`container-navbar ${!isHomePage ? "bg-white" : ""} ${color ? "shadow active" : ""}`}>
            <div className="headerContainer p-3 container-sm d-flex justify-content-between align-items-center">
                <div className="logo-box">
                    <Link to="/GrabFake">
                        <img className="logoApp" src={isHomePage ? (color ? logo1 : logo2) : (color ? logo2 : logo1)} alt="" />
                    </Link>
                </div>
                <div className="btn-group">
                    <div className="btn-child btn btn-light rounded cart" >
                        <a href="#" ></a>
                    </div>
                    <div className="btn-child btn btn-light rounded logIn">Đăng nhập/ Đăng ký</div>
                    <div className="btn-child btn btn-light rounded lang">EN/</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
