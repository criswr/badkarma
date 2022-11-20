import React from "react";
import NavButton from "./NavButton";
import "./NavBar.css"
import logo from "../images/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="container NavBarContainer">
                <a href="/">
                    <img src={logo} alt="Bad Karma" className="logo"/>
                </a>
                <div className="NavBarButtons">
                    <a href="/">
                        <NavButton seccion={"Inicio"}/>
                    </a>
                    <a href="/2021">
                        <NavButton seccion={"Drop 2021"}/>
                    </a>
                    <a href="/2022">                     
                        <NavButton seccion={"Drop 2022"}/>
                    </a>
                    <a href="/contacto">
                        <NavButton seccion={"Contacto"}/>
                    </a>
                    <a href="/carrito">
                        <CartWidget />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;