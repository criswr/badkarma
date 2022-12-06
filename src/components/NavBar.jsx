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
                    <NavLink exact to="/">
                        <NavButton seccion={"Inicio"}/>
                    </NavLink>
                    <NavLink exact to="/category/camisetas" className={activeClass}>
                        <NavButton seccion={"Camisetas"}/>
                    </NavLink>
                    <NavLink exact to="/category/accesorios" className={activeClass}>                     
                        <NavButton seccion={"Accesorios"}/>
                    </NavLink>
                    <NavLink exact to="/carrito">
                        <CartWidget />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar;