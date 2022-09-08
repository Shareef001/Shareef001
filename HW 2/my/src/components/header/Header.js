import React from 'react';
import { NavLink} from "react-router-dom";
function Header() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink  to="/">Basket Page</NavLink>
                </li>
                <li>
                    <NavLink  to="/about">About Page</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;