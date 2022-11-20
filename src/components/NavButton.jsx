import React from "react";
import "./NavButton.css";

const NavButton = ({seccion}) => {
    return (
        <div className="NavButton">
            {seccion}
        </div>
    )
}

export default NavButton;