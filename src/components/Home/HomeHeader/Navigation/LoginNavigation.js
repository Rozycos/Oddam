import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

const LoginNavigation = () =>{
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
                <Navigation/> 
            </nav>
        </>
    )
}

export default LoginNavigation;