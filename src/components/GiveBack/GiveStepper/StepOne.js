import React, { useState, useReducer } from "react";
//import { stepOne } from "./InputsNames";



const StepOne=({nextStep})=>{
    //const [checkedState, setCheckedState] = useState(false, false, false, false, false);

// const handleOnChange = (position) => {
//     const updatedCheckedState = checkedState.map((item, index) =>
//       index === position ? !item : item
//     );

//     setCheckedState(updatedCheckedState);
    
const Continue = (e) => {
        e.preventDefault();
        nextStep();
      };

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
                        <div >
                            {/* <label className="checkbox">
                                    <input type="checkbox"/>
                                    <span></span>
                                    ubrania, do wyrzucenia
                                </label> */}
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
                    </div>
                    <button className="btn__stepper" onClick={Continue}>Dalej</button>
                </div>
            </div>
        </>
    )
}

export default StepOne;