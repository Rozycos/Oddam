import React from "react";
import { Link } from "react-router-dom";
import LoginNavElements from "../Home/HomeHeader/Navigation/LoginNavElements";

const GiveBackNav =()=>{
    
    return (
        <>
            <nav className="nav">
                <LoginNavElements/>
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

export default GiveBackNav;