import React from "react";
//import { NavLink } from "react-router-dom";
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import { Link } from "react-scroll";

const Navigation = () =>{
    return (
        <>
            <ul className="nav__nav">
                <li>
                    {/* <NavLink to="/">Start</NavLink> */}
                    <Link to="/">Start</Link>
                </li>
                <li>
                    {/* <Link activeClass="active" className="test1" to="/" spy={true} smooth={true} duration={500}>O co chodzi?</Link> */}
                    <Link to="/" spy={true} smooth={true} duration={500}>O co chodzi?</Link>
                </li>
                <li>O nas

                </li>
                <li>Fundacja i organizacje

                </li>
                <li>Kontakt

                </li>
            </ul>    
        </>
    )
}

export default Navigation;