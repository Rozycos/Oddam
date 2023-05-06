import React from "react";

const GiveHeader = () => {

    return(
        <>
            <section className="hero__section">
                <div className="give__hero-image"></div>
                <div className="give__hero-text">
                    <h1><p>Oddaj rzeczy, których już nie chcesz</p> POTRZEBUJĄCYM</h1>
                    <h2>Wystarczą 4 proste kroki:</h2>
                    <span className="rectangles">
                        {/* <div className="rectangles__single">
                            <div className="rectangles__single-text">
                                <p>1</p>
                                <p>Wybierz rzeczy</p>
                            </div>
                        </div>
                        <div className="rectangles__single">
                            <div className="rectangles__single-text">
                                <p>2</p>
                                <p>Wybierz rzeczy</p>
                            </div>
                        </div>
                        <div className="rectangles__single">
                            <div className="rectangles__single-text">
                                <p>3</p>
                                <p>Wybierz rzeczy</p>
                            </div>
                        </div>
                        <div className="rectangles__single">
                            <div className="rectangles__single-text">
                                <p>4</p>
                                <p>Wybierz rzeczy</p>
                            </div>
                        </div> */}
                        <div className="rectangles__single">
                            <div className="rectangles__single-text">
                                <p>1</p>
                                <p>Wybierz rzeczy</p>
                            </div>
                        </div>
                        <div className="rectangles__single">
                            <div className="rectangles__single-text">
                                <p>2</p>
                                <p>Spakuj je w worki</p>
                            </div>
                        </div>
                        <div className="rectangles__single">
                            <div className="rectangles__single-text">
                                <p>3</p>
                                <p>Wybierz fundację</p>
                            </div>
                        </div>
                        <div className="rectangles__single">
                            <div className="rectangles__single-text">
                                <p>4</p>
                                <p>Zamów kuriera</p>
                            </div>
                        </div>
                    </span>
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