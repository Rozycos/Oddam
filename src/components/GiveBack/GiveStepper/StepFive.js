import React from "react";

const StepFive=({nextStep, prevStep})=>{

    const Continue = (e) => {
        e.preventDefault();
        nextStep();
      };

    const Previous = (e) => {
        e.preventDefault();
        prevStep();
      }

    return (
        <>
            <div className="stepper__body">
                <div className="stepper__container">
                    <div className="checkbox__container">
                        <h4 className="checkbox__title">Podsumowanie Twojej darowizny</h4>
                        <div>Oddajesz:
                            <ul>
                                <li>4 worki, ubrania w dobrym stanie, dzieciom</li>
                                <li>dla lokalizacji: Warszawa</li>
                            </ul>
                        </div>
                        <div>
                            <div>Adres odbioru:
                                <ul>
                                    <li>Ulica</li>
                                    <li>Miasto</li>
                                    <li>Kod pocztowy</li>
                                    <li>Numer telefonu</li>
                                </ul>
                                <ul>
                                    <li>Prosta 51</li>
                                    <li>Warszawa</li>
                                    <li>90-209</li>
                                    <li>473 839 483</li>
                                </ul>
                            </div>
                            <div>Termin odbioru:
                            <ul>
                                <li>Data</li>
                                <li>Godzina</li>
                                <li>Uwagi dla kuriera</li>
                            </ul>
                            <ul>
                                <li>17.10.2019</li>
                                <li>17:30</li>
                                <li>Uwagi dla kuriera</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    <button className="btn__stepper" onClick={Previous}>Wstecz</button>
                    <button className="btn__stepper" onClick={Continue}>Potwierdzam</button>
                </div>
            </div>
        </>
    )
}

export default StepFive;