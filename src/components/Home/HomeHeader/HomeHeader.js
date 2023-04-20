import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const HomeHeader = () => {
    
    return(
        <>
            <div>
                <Navigation />
            </div>
            <div className="hero__image"></div>
            <div className="hero__text">
                <h1><p>Zacznij pomagać!</p> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <button className="btn"><Link className="btn__primary" to="/logowanie">oddaj <br/>rzeczy</Link></button>
                <button className="btn"><Link className="btn__primary" to="/logowanie">zorganizuj zbiórkę</Link></button>
            </div>
        </>
    )
}

export default HomeHeader;