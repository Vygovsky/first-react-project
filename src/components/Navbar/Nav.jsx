import React from 'react';
import navStyle from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={navStyle.nav}>
            <div className={navStyle.item}>
                <NavLink to={'/profile'} activeClassName={navStyle.activeLink}> Profile </NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={'/dialogs'} activeClassName={navStyle.activeLink}>Dialogs</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={'/photo'} activeClassName={navStyle.activeLink}>Photo</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={'/description'} activeClassName={navStyle.activeLink}>Description</NavLink>
            </div>
            <div className={navStyle.item}>
                <NavLink to={'/settings'} activeClassName={navStyle.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Nav;
