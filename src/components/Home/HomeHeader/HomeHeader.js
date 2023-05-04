import React, { useContext } from "react";
import { AppContext } from "../../../context/UserProvider";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const HomeHeader = () => {
    const {currentUser} = useContext(AppContext);
    return(
        <>
            <div>
                <Navigation />
            </div>
            <section className="hero__section">
                <div className="hero__image"></div>
                <div className="hero__text">
                    <h1><p>Zacznij pomagać!</p> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    {currentUser === null ? (<button className="btn"><Link className="btn__primary" to="/logowanie">oddaj <br/>rzeczy</Link></button>):(
                        <button className="btn"><Link className="btn__primary" to="/oddaj-rzeczy">oddaj <br/>rzeczy</Link></button>
                    )}
                    <button className="btn"><Link className="btn__primary" to="/">zorganizuj zbiórkę</Link></button>
                </div>
            </section>
        </>
    )
}

export default HomeHeader;