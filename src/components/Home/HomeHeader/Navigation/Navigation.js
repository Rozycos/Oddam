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
                    <Link activeClass="active" className="scroll__link" to="steps" spy={true} smooth={true} duration={500}>O co chodzi?</Link>
                    {/* <Link to="/" spy={true} smooth={true} duration={500}>O co chodzi?</Link> */}
                </li>
                <li>
                    <Link activeClass="active" className="scroll__link" to="about" spy={true} smooth={true} duration={500}>O nas</Link>
                </li>
                <li>
                    <Link activeClass="active" className="scroll__link" to="help" spy={true} smooth={true} duration={500}>Fundacja i organizacje</Link>
                </li>
                <li>
                    <Link activeClass="active" className="scroll__link" to="contact" spy={true} smooth={true} duration={500}>Kontakt</Link>
                </li>
            </ul>    
        </>
    )
}

export default Navigation;