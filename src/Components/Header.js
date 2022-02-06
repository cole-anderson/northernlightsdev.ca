import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav>
            <NavLink exact activeClassName="active" to="/">
                Home
            </NavLink>
            <NavLink activeClassName="active" to="/projects">
                Projects
            </NavLink>
            <NavLink activeClassName="active" to="/aboutme">
                About Me
            </NavLink>
        </nav>
    );
}
export default Header;
