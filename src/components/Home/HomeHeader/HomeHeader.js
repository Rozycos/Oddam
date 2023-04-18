import React from "react";
import Navigation from "./Navigation";

const HomeHeader = () => {
    
    return(
        <>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <button>oddaj rzeczy</button>
                    <button>zorganizuj zbiórkę</button>
                </div>
            </div>
            <div>
                <Navigation />
            </div>

            
        </>
    )
}

export default HomeHeader;