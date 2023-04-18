import React from "react";
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import { Link } from "react-scroll";

const Navigation = () =>{
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link activeClass="active" className="test1" to="/" spy={true} smooth={true} duration={500}>Start</Link>
                    </li>
                    <li>O co chodzi?

                    </li>
                    <li>O nas

                    </li>
                    <li>Fundacja i organizacje

                    </li>
                    <li>Kontakt

                    </li>
                </ul>    
            </nav>
        </>
    )
}

export default Navigation;