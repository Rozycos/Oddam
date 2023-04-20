import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/Icon-1.svg"
import icon2 from "../../assets/Icon-2.svg"
import icon3 from "../../assets/Icon-3.svg"
import icon4 from "../../assets/Icon-4.svg"

const SimpleSteps =()=>{
    return (
        <>
            <section className="steps">
                <h2>Wystarczą 4 proste kroki</h2>
                <div className="steps__container container">
                    <div className="steps__single">
                        <div className="steps__icon">
                            <img src={icon1} alt="koszula"/>
                        </div>
                        <h3 className="steps__title">
                            <strong>Wybierz rzeczy</strong>
                        </h3>
                        <p className="steps__description">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="steps__single">
                        <div className="steps__icon">
                            <img src={icon2} alt="torba"/>
                        </div>
                        <h3 className="steps__title">
                            <strong>Spakuj je</strong>
                        </h3>
                        <p className="steps__description">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="steps__single">
                        <div className="steps__icon">
                            <img src={icon3} alt="lupa"/>
                        </div>
                        <h3 className="steps__title">Zdecyduj komu chcesz pomóc</h3>
                        <p className="steps__description">wybierz zaufane miejsce</p>
                    </div>
                    <div className="steps__single">
                        <div className="steps__icon">
                        <img src={icon4} alt="strzałki"/>
                        </div>
                        <h3 className="steps__title">Zamów kuriera</h3>
                        <p className="steps__description">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <button className="btn"><Link className="btn__primary" to="/logowanie">oddaj <br/>rzeczy</Link></button>
            </section>
        </>
    )
}

export default SimpleSteps;