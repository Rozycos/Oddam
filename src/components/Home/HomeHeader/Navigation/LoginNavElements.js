import React, { useContext }  from "react";
import { Link } from "react-router-dom";
//import Navigation from "./Navigation";
import { AppContext } from "../../../../context/UserProvider";
import { auth } from "../../../../firebase_setup/firebase";
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

const handleSignOut = () => auth.signOut();

const LoginNavElements = () =>{
    const {currentUser} = useContext(AppContext);  

    return (
        <>
            
                <ul className="nav__login">
                {currentUser === null ? (
                <>
                    <li className="nav__element"></li>
                    <li>
                        <Link className="nav__login-link" to="/logowanie">Zaloguj</Link>
                    </li>
                    <li>
                        <Link className="nav__login-link nav__login-signin" to="/rejestracja">Załóż konto</Link>
                    </li>
                </>
                ) : (
                        <>
                            <li className="nav__login logged">{"Cześć " + currentUser.email + "!"}</li>
                            <li>
                                <Link className="nav__login logged" to="/oddaj-rzeczy">Oddaj rzeczy</Link>
                            </li>
                            <li>
                                <Link className="nav__login-link nav__login-signin" to="/wylogowano" onClick={handleSignOut}>Wyloguj</Link>
                            </li>
                        </>
                    )}
                </ul>
                
            
        </>
    )
}

export default LoginNavElements;