import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

const LoginNavigation = () =>{
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Zaloguj</Link>
                    </li>
                    <li>
                        <Link to="/signin">Załóż konto</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <Navigation/>    
                </ul>    
            </nav>
        </>
    )
}

export default LoginNavigation;