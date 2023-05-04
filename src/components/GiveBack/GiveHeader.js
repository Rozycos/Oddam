import React from "react";

const GiveHeader = () => {

    return(
        <>
            <section className="hero__section">
                <div className="hero__image"></div>
                <div className="hero__text">
                    <h1><p>Oddaj rzeczy, których już nie chcesz</p> POTRZEBUJĄCYM</h1>
                    <h2>Wystarczą 4 proste kroki:</h2>
                    <div>kwadrat 1</div>
                    <div>kwadrat 2</div>
                    <div>kwadrat 3</div>
                    <div>kwadrat 4</div>
                    {/* {currentUser === null ? (<button className="btn"><Link className="btn__primary" to="/logowanie">oddaj <br/>rzeczy</Link></button>):(
                        <button className="btn"><Link className="btn__primary" to="/oddaj-rzeczy">oddaj <br/>rzeczy</Link></button>
                    )}
                    <button className="btn"><Link className="btn__primary" to="/">zorganizuj zbiórkę</Link></button> */}
                </div>
            </section>
        </>
    )
}

export default GiveHeader;