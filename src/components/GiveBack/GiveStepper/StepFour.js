import React from "react";

const StepFour=({nextStep, prevStep})=>{

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
            <div className="stepper__info">
                <strong className="stepper__container stepper__head">Ważne!</strong>
                <p className="stepper__container stepper__text">Podaj adres oraz termin odbioru rzeczy.</p>
            </div>
            <div className="stepper__body">
                <div className="stepper__container">
                    <p>Krok 4/4</p>
                    <div className="checkbox__container">
                        <h4 className="checkbox__title">Podaj adres oraz termin odbioru rzeczy przez kuriera</h4>
                        
                    </div>
                    <button className="btn__stepper" onClick={Previous}>Wstecz</button>
                    <button className="btn__stepper" onClick={Continue}>Dalej</button>
                </div>
            </div>
        </>
    )
}

export default StepFour;