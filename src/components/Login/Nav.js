import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{
    return (
        <>
            <nav className="nav">
                <ul className="nav__login">
                    <li>
                        <Link className="nav__login-link" to="/logowanie">Zaloguj</Link>
                    </li>
                    <li>
                        <Link className="nav__login-link nav__login-signin" to="/rejestracja">Załóż konto</Link>
                    </li>
                </ul>
                <ul className="nav__nav">
                <li>
                    {/* <NavLink to="/">Start</NavLink> */}
                    <Link className="login__nav" to="/">Start</Link>
                </li>
                <li>
                    <Link className="login__nav" to="/">O co chodzi?</Link>
                    {/* <Link to="/" spy={true} smooth={true} duration={500}>O co chodzi?</Link> */}
                </li>
                <li>
                    <Link className="login__nav" to="/">O nas</Link>
                </li>
                <li>
                    <Link className="login__nav" to="/">Fundacja i organizacje</Link>
                </li>
                <li>
                    <Link className="login__nav" to="/">Kontakt</Link>
                </li>
            </ul> 
            </nav>
        </>
    )
}

export default Nav;