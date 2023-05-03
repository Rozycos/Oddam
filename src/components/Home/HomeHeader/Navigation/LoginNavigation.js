import React, { useContext, useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { AppContext } from "../../../../context/UserProvider";
import { auth } from "../../../../firebase_setup/firebase";
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";

const handleSignOut = () => auth.signOut();

const LoginNavigation = () =>{
    //const {currentUser} = useContext(AppContext);
   // console.log(auth.onAuthStateChanged())
    const [currentUser, setCurrentUser] = useState(null);
    
      useEffect(() => {
        const unsubscripe = auth.onAuthStateChanged(user => {
          if (user) {
            setCurrentUser(user);
            //localStorage.setItem('currentUser', user.uid);
          } else {
            setCurrentUser(null);
            //localStorage.removeItem('currentUser');
          }
        });
    
        return unsubscripe
      }, []);  

    return (
        <>
            <nav className="nav">
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
                            <li className="nav__login logged">{"Cześć " + currentUser.email}</li>
                            <li>
                                <Link className="nav__login logged" to="/oddaj-rzeczy">Oddaj rzeczy</Link>
                            </li>
                            <li>
                                <Link className="nav__login-link nav__login-signin" to="/wylogowano" onClick={handleSignOut}>Wyloguj</Link>
                            </li>
                        </>
                    )}
                </ul>
                <Navigation/> 
            </nav>
        </>
    )
}

export default LoginNavigation;