import React from "react";

const StepOne=()=>{
    return (
        <>
            <div className="stepper__info">
                <h3 className="stepper__container stepper__head">Ważne!</h3>
                <p className="stepper__container stepper__text">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </div>
            <div className="stepper__body">
                <div className="stepper__container">
                    <p>Krok 1/4</p>
                    <div className="checkbox__container">
                        <h4 className="checkbox__title">Zaznacz co chcesz oddać:</h4>
                        <label className="checkbox">
                            <input type="checkbox"/>
                            <span></span>
                            ubrania, które nadają się do ponownego użycia
                        </label>
                        <label className="checkbox">
                            <input type="checkbox"/>
                            <span></span>
                            ubrania, do wyrzucenia
                        </label>
                        <label className="checkbox">
                            <input type="checkbox"/>
                            <span></span>
                            zabawki
                        </label>
                        <label className="checkbox">
                            <input type="checkbox"/>
                            <span></span>
                            książki
                        </label>
                        <label className="checkbox">
                            <input type="checkbox"/>
                            <span></span>
                            Inne
                        </label>
                    </div>
                    <button className="btn__stepper">Dalej</button>
                </div>
            </div>
        </>
    )
}

export default StepOne;