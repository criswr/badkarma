import React from "react";
import NavButton from "./NavButton";
import "./NavBar.css"
import logo from "../images/logo.png";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const activeClass = ({ isActive }) => (isActive ? "activeNavButton" : "");

    return (
        <div className="NavBar">
            <div className="NavBarContainer">
                <NavLink to="/">
                    <img src={logo} alt="Bad Karma" className="logo"/>
                </NavLink>
                <div className="NavBarButtons">
                    <NavLink to="/">
                        <NavButton seccion={"Inicio"}/>
                    </NavLink>
                    <NavLink to="/category/camisetas" className={activeClass}>
                        <NavButton seccion={"Camisetas"}/>
                    </NavLink>
                    <NavLink to="/category/accesorios" className={activeClass}>                     
                        <NavButton seccion={"Accesorios"}/>
                    </NavLink>
                    <NavLink to="/cart">
                        <CartWidget />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar;