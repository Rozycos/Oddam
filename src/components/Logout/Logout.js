import React from "react";
//import LoginNavigation from "../Home/HomeHeader/Navigation";
import Nav from "../Login/Nav";
import { Link } from "react-router-dom";

const Logout = () =>{
    return (
        <>
            <Nav/>
            <section className="login">
                <h2 className="logout">Wylogowanie nastąpiło pomyślnie!</h2>
                    <div className="login__buttons">
                                    {/* <button className="form__submit-button" onClick={handleSubmit}>Wyślij</button> */}
                        <button className="login__button login__button-active logout__button" ><Link className="login__nav" to="/">Strona główna</Link></button>
                    </div>
            </section>
            
        </>
    )
}

export default Logout