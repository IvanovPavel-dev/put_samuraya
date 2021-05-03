import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a href='/news'>News</a>
            </div>
            <div className={s.item}>
                <a href='/music'>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div><div className={s.item}>
                <a>Xyetings</a>
            </div>
        </nav>
    )
}

export default Navbar;