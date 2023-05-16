import React from "react";

const StepFive=({nextStep, prevStep, stepTwoData, stepThreeCityData, stepFourData})=>{

    const Continue = (e) => {
        e.preventDefault();
        nextStep();
      };

    const Previous = (e) => {
        e.preventDefault();
        prevStep();
      }
console.log(stepTwoData)
    return (
        <>
            <div className="stepper__body">
                <div className="stepper__container">
                    <div className="checkbox__container">
                        <h4 className="checkbox__title summary__title">Podsumowanie Twojej darowizny</h4>
                        <div>
                            <h5 className="checkbox__title-city">Oddajesz:</h5>
                            <ul  className="summary">
                                <li>{stepTwoData} worki, ubrania w dobrym stanie, dzieciom</li>
                                <li>dla lokalizacji: {stepThreeCityData}</li>
                            </ul>
                        </div>
                        <div className="checkbox__title-container">
                            <div>
                                <h5 className="checkbox__title-city">Adres odbioru:</h5>
                                <span className="checkbox__title-container">
                                    <ul className="summary__list">
                                        <li>Ulica</li>
                                        <li>Miasto</li>
                                        <li>Kod pocztowy</li>
                                        <li>Numer telefonu</li>
                                    </ul>
                                    <ul className="summary__list">
                                        <li>{stepFourData.street}</li>
                                        <li>{stepFourData.city}</li>
                                        <li>{stepFourData.zipcode}</li>
                                        <li>{stepFourData.phone}</li>
                                    </ul>
                                </span>
                            </div>
                            <div>
                                <h5 className="checkbox__title-city">Termin odbioru:</h5>
                                <span className="checkbox__title-container">
                                    <ul className="summary__list">
                                        <li>Data</li>
                                        <li>Godzina</li>
                                        <li>Uwagi dla kuriera</li>
                                    </ul>
                                    <ul className="summary__list">
                                        <li>{stepFourData.date}</li>
                                        <li>{stepFourData.hour}</li>
                                        <li className="summary__list-comment">{stepFourData.comment}</li>
                                    </ul>
                                </span>
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